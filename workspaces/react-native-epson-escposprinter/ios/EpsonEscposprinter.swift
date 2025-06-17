import Foundation
import React

let NAME = "EpsonEscposprinter"
let CODE_ERROR = "EpsonPrinterError"
let CODE_CALLBACK = "EpsonPrinterCallback"
let queue = DispatchQueue(label: NAME, qos: .userInitiated, attributes: .concurrent)
let queueEx = DispatchQueue(label: "\(NAME)Ex", qos: .userInitiated)

@objc(EpsonEscposprinter)
class EpsonEscposprinter: RCTEventEmitter,
  Epos2PtrStatusChangeDelegate,
  Epos2PtrReceiveDelegate,
  Epos2DiscoveryDelegate
{
  var printers: [Epos2Printer?] = []

  internal func ipToNumber(_ ip: String) -> UInt32 {
    return ip.split(separator: ".").reduce(0) { (result, part) -> UInt32 in
      return result << 8 + UInt32(part)!
    }
  }

  // RCTEventEmitter

  var hasListeners = false

  override func startObserving() {
    hasListeners = true
  }

  override func stopObserving() {
    hasListeners = false
  }

  override func supportedEvents() -> [String]! {
    return [
      "deviceFound",
      "printStatusChange",
      "statusChange",
      "updateProgress",
    ]
  }

  func sendEventSafe(_ name: String, withData data: NSDictionary?) {
    if hasListeners {
      sendEvent(withName: name, body: data)
    }
  }

  // Epos2PtrStatusChangeDelegate

  func onPtrStatusChange(
    _ printer: Epos2Printer?,
    eventType status: Int32
  ) {
    guard let printerId = printers.firstIndex(of: printer) else {
      return
    }

    self.sendEventSafe(
      "statusChange",
      withData: ["printerId": printerId, "status": status] as NSDictionary
    )
  }

  // Epos2PtrReceiveDelegate

  func onPtrReceive(
    _ printer: Epos2Printer?,
    code: Int32,
    status: Epos2PrinterStatusInfo,
    printJobId: String!
  ) {
    guard let printerId = printers.firstIndex(of: printer) else {
      return
    }

    var result: [String: Any] = [
      "connection": status.connection == EPOS2_TRUE
    ]

    if status.online != EPOS2_UNKNOWN {
      result["online"] = status.online == EPOS2_TRUE
    }

    if status.coverOpen != EPOS2_UNKNOWN {
      result["coverOpen"] = status.coverOpen == EPOS2_TRUE
    }

    if status.paper != EPOS2_UNKNOWN {
      result["paper"] = status.paper
    }

    if status.paperFeed != EPOS2_UNKNOWN {
      result["paperFeed"] = status.paperFeed == EPOS2_TRUE
    }

    if status.panelSwitch != EPOS2_UNKNOWN {
      result["panelSwitch"] = status.panelSwitch == EPOS2_SWITCH_ON.rawValue
    }

    if status.drawer != EPOS2_UNKNOWN {
      result["drawer"] = status.drawer
    }

    if status.errorStatus != EPOS2_UNKNOWN {
      result["errorStatus"] = status.errorStatus
    }

    if status.autoRecoverError != EPOS2_UNKNOWN {
      result["autoRecoverError"] = status.autoRecoverError
    }

    if status.buzzer != EPOS2_UNKNOWN {
      result["buzzer"] = status.buzzer == EPOS2_TRUE
    }

    if status.adapter != EPOS2_UNKNOWN {
      result["adapter"] = status.adapter == EPOS2_TRUE
    }

    if status.batteryLevel != EPOS2_UNKNOWN {
      result["batteryLevel"] = status.batteryLevel
    }

    if status.removalWaiting != EPOS2_UNKNOWN {
      result["removalWaiting"] = status.removalWaiting == EPOS2_REMOVAL_WAIT_PAPER.rawValue
    }

    result = [
      "printerId": printerId,
      "code": code,
      "status": result,
    ]

    if let jobId = printJobId {
      result["printJobId"] = jobId
    }

    self.sendEventSafe(
      "printStatusChange",
      withData: result as NSDictionary
    )
  }

  // Epos2DiscoveryDelegate

  func onDiscovery(_ deviceInfo: Epos2DeviceInfo) {
    var result: [String: Any] = [
      "deviceType": deviceInfo.deviceType,
      "target": deviceInfo.target!,
    ]

    if let deviceName = deviceInfo.deviceName {
      result["deviceName"] = deviceName
    }

    if let ipAddress = deviceInfo.ipAddress {
      result["ipAddress"] = ipAddress
    }

    if let macAddress = deviceInfo.macAddress {
      result["macAddress"] = macAddress
    }

    if let bdAddress = deviceInfo.bdAddress {
      result["bdAddress"] = bdAddress
    }

    if let leBdAddress = deviceInfo.leBdAddress {
      result["leBdAddress"] = leBdAddress
    }

    self.sendEventSafe(
      "deviceFound",
      withData: result as NSDictionary
    )
  }

  @objc
  func connect(
    _ series: NSNumber,
    withLang lang: NSNumber,
    toTarget target: NSString?,
    waitFor timeout: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    guard let target = target as? String else {
      reject(CODE_ERROR, String(EPOS2_ERR_ILLEGAL.rawValue), nil)
      return
    }

    queue.async(flags: .barrier) {
      guard
        let printer = Epos2Printer(
          printerSeries: series.int32Value,
          lang: lang.int32Value
        )
      else {
        reject(CODE_ERROR, String(EPOS2_ERR_ILLEGAL.rawValue), nil)
        return
      }

      do {
        let result = printer.connect(target, timeout: timeout.intValue)
        guard result == EPOS2_SUCCESS.rawValue else {
          reject(CODE_ERROR, String(result), nil)
          return
        }
      }

      do {
        let result = printer.startMonitor()
        guard result == EPOS2_SUCCESS.rawValue else {
          reject(CODE_ERROR, String(result), nil)
          return
        }
      }

      printer.setReceiveEventDelegate(self)
      printer.setStatusChangeEventDelegate(self)

      // Reuse printer ID after disconnection
      if let printerId = self.printers.firstIndex(where: { $0 == nil }) {
        self.printers[printerId] = printer
        resolve(printerId)
      } else {
        self.printers.append(printer)
        resolve(self.printers.count - 1)
      }
    }
  }

  @objc
  func disconnect(
    _ printerId: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    // [ ] Rewrite all queue.async with Task if it works
    Task {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      do {
        let timeoutInSeconds = Date().timeIntervalSince1970 + 5
        var result = printer.disconnect()
        while result == EPOS2_ERR_PROCESSING.rawValue {
          guard Date().timeIntervalSince1970 < timeoutInSeconds else {
            reject(CODE_ERROR, String(EPOS2_ERR_TIMEOUT.rawValue), nil)
            return
          }

          if #available(iOS 16.0, *) {
            try await Task.sleep(for: .seconds(0.1))
          } else {
            try await Task.sleep(nanoseconds: 100_000_000)
          }

          result = printer.disconnect()
        }

        guard result == EPOS2_SUCCESS.rawValue else {
          reject(CODE_ERROR, String(result), nil)
          return
        }
      }

      do {
        let result = printer.stopMonitor()
        guard result == EPOS2_SUCCESS.rawValue else {
          reject(CODE_ERROR, String(result), nil)
          return
        }
      }

      printer.setReceiveEventDelegate(nil)
      printer.setStatusChangeEventDelegate(nil)

      do {
        let result = printer.clearCommandBuffer()
        guard result == EPOS2_SUCCESS.rawValue else {
          reject(CODE_ERROR, String(result), nil)
          return
        }
      }

      self.printers[printerId.intValue] = nil

      resolve(nil)
    }
  }

  @objc
  func getStatus(
    _ printerId: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      guard let status = printer.getStatus() else {
        reject(CODE_ERROR, String(EPOS2_ERR_FAILURE.rawValue), nil)
        return
      }

      var result: [String: Any] = [:]

      result["connection"] = status.connection == EPOS2_TRUE

      if status.online != EPOS2_UNKNOWN {
        result["online"] = status.online == EPOS2_TRUE
      }

      if status.coverOpen != EPOS2_UNKNOWN {
        result["coverOpen"] = status.coverOpen == EPOS2_TRUE
      }

      if status.paper != EPOS2_UNKNOWN {
        result["paper"] = status.paper
      }

      if status.paperFeed != EPOS2_UNKNOWN {
        result["paperFeed"] = status.paperFeed == EPOS2_TRUE
      }

      if status.panelSwitch != EPOS2_UNKNOWN {
        result["panelSwitch"] = status.panelSwitch == EPOS2_SWITCH_ON.rawValue
      }

      if status.drawer != EPOS2_UNKNOWN {
        result["drawer"] = status.drawer
      }

      if status.errorStatus != EPOS2_UNKNOWN {
        result["errorStatus"] = status.errorStatus
      }

      if status.autoRecoverError != EPOS2_UNKNOWN {
        result["autoRecoverError"] = status.autoRecoverError
      }

      if status.buzzer != EPOS2_UNKNOWN {
        result["buzzer"] = status.buzzer == EPOS2_TRUE
      }

      if status.adapter != EPOS2_UNKNOWN {
        result["adapter"] = status.adapter
      }

      if status.batteryLevel != EPOS2_UNKNOWN {
        result["batteryLevel"] = status.batteryLevel
      }

      if status.removalWaiting != EPOS2_UNKNOWN {
        result["removalWaiting"] = status.removalWaiting == EPOS2_REMOVAL_WAIT_PAPER.rawValue
      }

      if status.paperTakenSensor != EPOS2_UNKNOWN {
        result["paperTakenSensor"] = status.paperTakenSensor
      }

      if status.unrecoverError != EPOS2_UNKNOWN {
        result["unrecoverError"] = status.unrecoverError
      }

      resolve(result)
    }
  }

  @objc
  func sendData(
    _ printerId: NSNumber,
    waitFor timeout: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.sendData(timeout.intValue)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func beginTransaction(
    _ printerId: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.beginTransaction()
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func endTransaction(
    _ printerId: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.endTransaction()
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func requestPrintJobStatus(
    _ printerId: NSNumber,
    withJobId jobId: NSString?,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    guard let jobId = jobId as String? else {
      reject(CODE_ERROR, String(EPOS2_ERR_ILLEGAL.rawValue), nil)
      return
    }

    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.requestPrintJobStatus(jobId)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func clearCommandBuffer(
    _ printerId: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.clearCommandBuffer()
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addTextAlign(
    _ printerId: NSNumber,
    withAlign align: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addTextAlign(align.int32Value)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addLineSpace(
    _ printerId: NSNumber,
    withLineSpace lineSpace: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addLineSpace(lineSpace.intValue)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addTextRotate(
    _ printerId: NSNumber,
    withRotate rotate: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addTextRotate(rotate.int32Value)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addText(
    _ printerId: NSNumber,
    withText text: NSString?,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    guard let text = text as String? else {
      reject(CODE_ERROR, String(EPOS2_ERR_ILLEGAL.rawValue), nil)
      return
    }

    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addText(text)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addTextLang(
    _ printerId: NSNumber,
    withLang lang: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addTextLang(lang.int32Value)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addTextFont(
    _ printerId: NSNumber,
    withFont font: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addTextFont(font.int32Value)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addTextSmooth(
    _ printerId: NSNumber,
    withSmooth smooth: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addTextSmooth(smooth.int32Value)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addTextSize(
    _ printerId: NSNumber,
    withWidth width: NSNumber,
    withHeight height: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addTextSize(
        width.intValue,
        height: height.intValue
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addTextStyle(
    _ printerId: NSNumber,
    withReverse reverse: NSNumber,
    withUnderline ul: NSNumber,
    withEmphasis em: NSNumber,
    withColor color: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addTextStyle(
        reverse.int32Value,
        ul: ul.int32Value,
        em: em.int32Value,
        color: color.int32Value
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addHPosition(
    _ printerId: NSNumber,
    withPosition x: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addHPosition(x.intValue)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addFeedUnit(
    _ printerId: NSNumber,
    withUnit unit: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addFeedUnit(unit.intValue)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addFeedLine(
    _ printerId: NSNumber,
    withLine line: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addFeedLine(line.intValue)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addImage(
    _ printerId: NSNumber,
    withData data: NSString?,
    fromLeft x: NSNumber,
    fromTop y: NSNumber,
    withWidth width: NSNumber,
    withHeight height: NSNumber,
    withColor color: NSNumber,
    withMode mode: NSNumber,
    withHalftone halftone: NSNumber,
    withBrightness brightness: NSNumber,
    withCompress compress: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      guard
        let imageData = Data(
          base64Encoded: data! as String,
          options: .ignoreUnknownCharacters
        ),
        let image = UIImage(data: imageData)
      else {
        reject(CODE_ERROR, String(EPOS2_ERR_ILLEGAL.rawValue), nil)
        return
      }

      let result = printer.add(
        image,
        x: x.intValue,
        y: y.intValue,
        width: width.intValue,
        height: height.intValue,
        color: color.int32Value,
        mode: mode.int32Value,
        halftone: halftone.int32Value,
        brightness: brightness.doubleValue,
        compress: compress.int32Value
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addLogo(
    _ printerId: NSNumber,
    withKey1 key1: NSNumber,
    withKey2 key2: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addLogo(key1.intValue, key2: key2.intValue)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addBarcode(
    _ printerId: NSNumber,
    withData data: NSString?,
    withType type: NSNumber,
    withHri hri: NSNumber,
    withFont font: NSNumber,
    withWidth width: NSNumber,
    withHeight height: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    guard let data = data as String? else {
      reject(CODE_ERROR, String(EPOS2_ERR_ILLEGAL.rawValue), nil)
      return
    }

    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addBarcode(
        data,
        type: type.int32Value,
        hri: hri.int32Value,
        font: font.int32Value,
        width: width.intValue,
        height: height.intValue
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addSymbol(
    _ printerId: NSNumber,
    withData data: NSString?,
    withType type: NSNumber,
    withLevel level: NSNumber,
    withWidth width: NSNumber,
    withHeight height: NSNumber,
    withSize size: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    guard let data = data as String? else {
      reject(CODE_ERROR, String(EPOS2_ERR_ILLEGAL.rawValue), nil)
      return
    }

    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addSymbol(
        data,
        type: type.int32Value,
        level: level.int32Value,
        width: width.intValue,
        height: height.intValue,
        size: size.intValue
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addHLine(
    _ printerId: NSNumber,
    from x1: NSNumber,
    to x2: NSNumber,
    withStyle lineStyle: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addHLine(
        x1.intValue,
        x2: x2.intValue,
        style: lineStyle.int32Value
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addVLineBegin(
    _ printerId: NSNumber,
    from x: NSNumber,
    withStyle lineStyle: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let lineId: UnsafeMutablePointer<Int32> =
        UnsafeMutablePointer<Int32>.allocate(capacity: 1)

      let result = printer.addVLineBegin(
        x.intValue,
        style: lineStyle.int32Value,
        lineId: lineId
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(lineId.pointee)
    }
  }

  @objc
  func addVLineEnd(
    _ printerId: NSNumber,
    withLineId lineId: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addVLineEnd(lineId.int32Value)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addPageBegin(
    _ printerId: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addPageBegin()
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addPageEnd(
    _ printerId: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addPageEnd()
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addPageArea(
    _ printerId: NSNumber,
    fromLeft x: NSNumber,
    fromTop y: NSNumber,
    withWidth width: NSNumber,
    withHeight height: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addPageArea(
        x.intValue,
        y: y.intValue,
        width: width.intValue,
        height: height.intValue
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addPageDirection(
    _ printerId: NSNumber,
    withDirection direction: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addPageDirection(direction.int32Value)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addPagePosition(
    _ printerId: NSNumber,
    fromLeft x: NSNumber,
    fromTop y: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addPagePosition(
        x.intValue,
        y: y.intValue
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addPageLine(
    _ printerId: NSNumber,
    left x1: NSNumber,
    top y1: NSNumber,
    right x2: NSNumber,
    bottom y2: NSNumber,
    withStyle lineStyle: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addPageLine(
        x1.intValue,
        y1: y1.intValue,
        x2: x2.intValue,
        y2: y2.intValue,
        style: lineStyle.int32Value
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addPageRectangle(
    _ printerId: NSNumber,
    left x1: NSNumber,
    top y1: NSNumber,
    right x2: NSNumber,
    bottom y2: NSNumber,
    withStyle lineStyle: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addPageRectangle(
        x1.intValue,
        y1: y1.intValue,
        x2: x2.intValue,
        y2: y2.intValue,
        style: lineStyle.int32Value
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addRotateBegin(
    _ printerId: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addRotateBegin()
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addRotateEnd(
    _ printerId: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addRotateEnd()
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addCut(
    _ printerId: NSNumber,
    withType type: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addCut(type.int32Value)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addPulse(
    _ printerId: NSNumber,
    withDrawer drawer: NSNumber,
    withTime time: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addPulse(drawer.int32Value, time: time.int32Value)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addSound(
    _ printerId: NSNumber,
    withPattern pattern: NSNumber,
    withRepeat count: NSNumber,
    withCycle cycle: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addSound(
        pattern.int32Value,
        repeat: count.intValue,
        cycle: cycle.intValue
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addFeedPosition(
    _ printerId: NSNumber,
    to position: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addFeedPosition(position.int32Value)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addLayout(
    _ printerId: NSNumber,
    withType type: NSNumber,
    withWidth width: NSNumber,
    withHeight height: NSNumber,
    withMarginTop marginTop: NSNumber,
    withMarginBottom marginBottom: NSNumber,
    withOffsetCut offsetCut: NSNumber,
    withOffsetLabel offsetLabel: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.addLayout(
        type.int32Value,
        width: width.intValue,
        height: height.intValue,
        marginTop: marginTop.intValue,
        marginBottom: marginBottom.intValue,
        offsetCut: offsetCut.intValue,
        offsetLabel: offsetLabel.intValue
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func addCommand(
    _ printerId: NSNumber,
    withData data: NSString?,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      guard
        let bytes = Data(
          base64Encoded: data! as String,
          options: .ignoreUnknownCharacters
        )
      else {
        reject(CODE_ERROR, "Expected raw data.", nil)
        return
      }

      let result = printer.addCommand(bytes)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)

      // bytes.withUnsafeMutableBytes({ (bytes) -> Void in
      //   guard
      //     let byteAddress = bytes.bindMemory(to: Int8.self).baseAddress
      //   else {
      //     reject(CODE_ERROR, String(EPOS2_ERR_ILLEGAL.rawValue), nil)
      //   }
      // })
    }
  }

  @objc
  func getMaintenanceCounter(
    _ printerId: NSNumber,
    waitFor timeout: NSNumber,
    withType type: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.getMaintenanceCounter(
        timeout.intValue,
        type: type.int32Value,
        delegate: EpsonPrinterDelegate(resolve: resolve, reject: reject)
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func resetMaintenanceCounter(
    _ printerId: NSNumber,
    waitFor timeout: NSNumber,
    withType type: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.resetMaintenanceCounter(
        timeout.intValue,
        type: type.int32Value,
        delegate: EpsonPrinterDelegate(resolve: resolve, reject: reject)
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func getPrinterSetting(
    _ printerId: NSNumber,
    waitFor timeout: NSNumber,
    withType type: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.getSetting(
        timeout.intValue,
        type: type.int32Value,
        delegate: EpsonPrinterDelegate(resolve: resolve, reject: reject)
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func setPrinterSetting(
    _ printerId: NSNumber,
    waitFor timeout: NSNumber,
    withSettings settingList: NSDictionary,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      var settings: [NSNumber: NSNumber] = [:]

      for (key, val) in settingList {
        if let key = key as? NSNumber,
          let val = val as? NSNumber
        {
          settings[key] = val
        }
      }

      // let settings = settingList.reduce(into: [NSNumber: NSNumber]) {
      //   if let key = ($1.key as? NSNumber)?.int32Value,
      //     let val = ($1.value as? NSNumber)?.int32Value
      //   {
      //     $0[key] = val
      //   }
      // }

      let result = printer.setPrinterSetting(
        timeout.intValue,
        setttingList: settings,
        delegate: EpsonPrinterDelegate(resolve: resolve, reject: reject)
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func getPrinterSettingEx(
    _ printerId: NSNumber,
    waitFor timeout: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queueEx.async {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      printer.setGet(
        EpsonPrinterDelegate(resolve: resolve, reject: reject)
      )

      let result = printer.getSettingEx(timeout.intValue)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func setPrinterSettingEx(
    _ printerId: NSNumber,
    waitFor timeout: NSNumber,
    withSettings jsonString: NSString,
    withPassword administratorPassword: NSString,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    guard
      let jsonString = jsonString as String?,
      let administratorPassword = administratorPassword as String?
    else {
      reject(CODE_ERROR, String(EPOS2_ERR_ILLEGAL.rawValue), nil)
      return
    }

    queueEx.async {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      printer.setSetPrinterSettingExDelegate(
        EpsonPrinterDelegate(resolve: resolve, reject: reject)
      )

      let result = printer.setPrinterSettingEx(
        timeout.intValue,
        jsonString: jsonString,
        administratorPassword: administratorPassword
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func verifyPassword(
    _ printerId: NSNumber,
    waitFor timeout: NSNumber,
    withPassword administratorPassword: NSString,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    guard let administratorPassword = administratorPassword as String? else {
      reject(CODE_ERROR, String(EPOS2_ERR_ILLEGAL.rawValue), nil)
      return
    }

    queueEx.async {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      printer.setVerifyPasswordDelegate(
        EpsonPrinterDelegate(resolve: resolve, reject: reject)
      )

      let result = printer.verifyPassword(
        timeout.intValue,
        administratorPassword: administratorPassword
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func getPrinterInformation(
    _ printerId: NSNumber,
    waitFor timeout: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.getInformation(
        timeout.intValue,
        delegate: EpsonPrinterDelegate(resolve: resolve, reject: reject)
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func downloadFirmwareList(
    _ printerId: NSNumber,
    forModel printerModel: NSString,
    withOptions option: NSString,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.downloadFirmwareList(
        printerModel as String,
        option: option as String,
        delegate: EpsonPrinterDelegate(resolve: resolve, reject: reject)
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func getPrinterFirmwareInfo(
    _ printerId: NSNumber,
    waitFor timeout: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.getFirmwareInfo(
        timeout.intValue,
        delegate: EpsonPrinterDelegate(resolve: resolve, reject: reject)
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func verifyUpdate(
    _ printerId: NSNumber,
    against firmware: NSDictionary,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    reject(
      CODE_ERROR,
      "Not implemented for Epos2FirmwareInfo.versin being read-only",
      nil
    )

    // queue.async(flags: .barrier) {
    //   guard let printer = self.printers[printerId.intValue] else {
    //     reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
    //     return
    //   }
    //
    //   guard let version = firmware["version"] as? String else {
    //     reject(CODE_ERROR, String(EPOS2_ERR_ILLEGAL.rawValue), nil)
    //     return
    //   }
    //
    //   let firmwareInfo = Epos2FirmwareInfo()
    //
    //   firmwareInfo.version = version
    //
    //   let result = printer.verifyUpdate(
    //     firmwareInfo,
    //     delegate: EpsonPrinterDelegate(resolve: resolve, reject: reject)
    //   )
    //   guard result == EPOS2_SUCCESS.rawValue else {
    //     reject(CODE_ERROR, String(result), nil)
    //     return
    //   }
    //
    //   resolve(nil)
    // }
  }

  @objc
  func updateFirmware(
    _ printerId: NSNumber,
    to firmware: NSDictionary,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    reject(
      CODE_ERROR,
      "Not implemented for Epos2FirmwareInfo.versin being read-only",
      nil
    )

    // queue.async(flags: .barrier) {
    //   guard let printer = self.printers[printerId.intValue] else {
    //     reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
    //     return
    //   }
    //
    //   guard let version = firmware["version"] as? String else {
    //     reject(CODE_ERROR, String(EPOS2_ERR_ILLEGAL.rawValue), nil)
    //     return
    //   }
    //
    //   let firmwareInfo = Epos2FirmwareInfo()
    //
    //   firmwareInfo.version = version
    //
    //   let result = printer.updateFirmware(
    //     firmwareInfo,
    //     delegate: EpsonPrinterDelegate(resolve: resolve, reject: reject)
    //   )
    //   guard result == EPOS2_SUCCESS.rawValue else {
    //     reject(CODE_ERROR, String(result), nil)
    //     return
    //   }

    //   resolve(nil)
    // }
  }

  @objc
  func forceRecover(
    _ printerId: NSNumber,
    waitFor timeout: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.forceRecover(timeout.intValue)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func forcePulse(
    _ printerId: NSNumber,
    withDrawer drawer: NSNumber,
    withPulseTime time: NSNumber,
    waitFor timeout: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.forcePulse(
        drawer.int32Value,
        pulseTime: time.int32Value,
        timeout: timeout.intValue
      )
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func forceStopSound(
    _ printerId: NSNumber,
    waitFor timeout: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.forceStopSound(timeout.intValue)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func forceCommand(
    _ printerId: NSNumber,
    withData data: NSString?,
    waitFor timeout: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      guard
        let bytes = Data(
          base64Encoded: data! as String,
          options: .ignoreUnknownCharacters
        )
      else {
        reject(CODE_ERROR, "Expected raw data.", nil)
        return
      }

      let result = printer.forceCommand(bytes, timeout: timeout.intValue)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }

  @objc
  func forceReset(
    _ printerId: NSNumber,
    waitFor timeout: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      guard let printer = self.printers[printerId.intValue] else {
        reject(CODE_ERROR, String(EPOS2_ERR_NOT_FOUND.rawValue), nil)
        return
      }

      let result = printer.forceReset(timeout.intValue)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func discoveryStart(
    _ filter: NSDictionary,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      let filterOption = Epos2FilterOption()

      if let deviceType = filter["deviceType"] as? NSNumber {
        filterOption.deviceType = deviceType.int32Value
      }

      if let deviceModel = filter["deviceModel"] as? NSNumber {
        filterOption.deviceModel = deviceModel.int32Value
      }

      if let broadcast = filter["broadcast"] as? String {
        filterOption.broadcast = broadcast
      }

      if let portType = filter["portType"] as? NSNumber {
        filterOption.portType = portType.int32Value
      }

      let result = Epos2Discovery.start(filterOption, delegate: self)
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }
    }
  }

  @objc
  func discoveryStop(
    _ resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    queue.async(flags: .barrier) {
      let result = Epos2Discovery.stop()
      guard result == EPOS2_SUCCESS.rawValue else {
        reject(CODE_ERROR, String(result), nil)
        return
      }

      resolve(nil)
    }
  }
}

class EpsonPrinterDelegate: NSObject,
  Epos2MaintenanceCounterDelegate,
  Epos2PrinterSettingDelegate,
  Epos2PrinterGetPrinterSettingExDelegate,
  Epos2PrinterSetPrinterSettingExDelegate,
  Epos2PrinterVerifyPasswordDelegate,
  Epos2PrinterInformationDelegate,
  Epos2FirmwareListDownloadDelegate,
  Epos2FirmwareInformationDelegate,
  Epos2VerifyeUpdateDelegate,
  Epos2FirmwareUpdateDelegate
{
  let resolve: RCTPromiseResolveBlock
  let reject: RCTPromiseRejectBlock

  init(
    resolve: @escaping RCTPromiseResolveBlock,
    reject: @escaping RCTPromiseRejectBlock
  ) {
    self.resolve = resolve
    self.reject = reject
  }

  func onGetMaintenanceCounter(_ code: Int32, type: Int32, value: Int32) {
    guard code == EPOS2_CODE_SUCCESS.rawValue else {
      reject(CODE_CALLBACK, String(code), nil)
      return
    }

    resolve(value)
  }

  func onResetMaintenanceCounter(_ code: Int32, type: Int32) {
    guard code == EPOS2_CODE_SUCCESS.rawValue else {
      reject(CODE_CALLBACK, String(code), nil)
      return
    }

    resolve(nil)
  }

  func onGetPrinterSetting(_ code: Int32, type: Int32, value: Int32) {
    guard code == EPOS2_CODE_SUCCESS.rawValue else {
      reject(CODE_CALLBACK, String(code), nil)
      return
    }

    resolve(value)
  }

  func onSetPrinterSetting(_ code: Int32) {
    guard code == EPOS2_CODE_SUCCESS.rawValue else {
      reject(CODE_CALLBACK, String(code), nil)
      return
    }

    resolve(nil)
  }

  func onGetPrinterSettingEx(
    _ printer: Epos2Printer?,
    code: Int32,
    jsonString: String!
  ) {
    guard code == EPOS2_CODE_SUCCESS.rawValue else {
      reject(CODE_CALLBACK, String(code), nil)
      return
    }

    // Convert json string into NSDictionary
    guard
      let jsonData = jsonString.data(using: .utf8),
      let json = try? JSONSerialization.jsonObject(
        with: jsonData,
        options: []
      ) as? NSDictionary
    else {
      reject(CODE_CALLBACK, "Expected JSON object.", nil)
      return
    }

    resolve(json)
  }

  func onSetPrinterSettingEx(_ printer: Epos2Printer, code: Int32) {
    guard code == EPOS2_CODE_SUCCESS.rawValue else {
      reject(CODE_CALLBACK, String(code), nil)
      return
    }

    resolve(nil)
  }

  func onVerifyPassword(_ printer: Epos2Printer, code: Int32) {
    guard code == EPOS2_CODE_SUCCESS.rawValue else {
      reject(CODE_CALLBACK, String(code), nil)
      return
    }

    resolve(nil)
  }

  func onGetPrinterInformation(_ code: Int32, jsonString: String!) {
    guard code == EPOS2_CODE_SUCCESS.rawValue else {
      reject(CODE_CALLBACK, String(code), nil)
      return
    }

    // Convert json string into NSDictionary
    guard
      let jsonData = jsonString.data(using: .utf8),
      let json = try? JSONSerialization.jsonObject(
        with: jsonData,
        options: []
      ) as? NSDictionary
    else {
      reject(CODE_CALLBACK, "Expected JSON object.", nil)
      return
    }

    resolve(json)
  }

  func onFirmwareListDownload(_ code: Int32, firmwareList: NSMutableArray) {
    guard code == EPOS2_CODE_SUCCESS.rawValue else {
      reject(CODE_CALLBACK, String(code), nil)
      return
    }

    // Convert firmware list into array of NSDictionary
    let list = firmwareList.map { (item) -> NSDictionary in
      guard
        let firmware = item as? Epos2FirmwareInfo,
        let version = firmware.version
      else {
        return [:]
      }

      return ["version": version]
    }

    resolve(list)
  }

  func onFirmwareInformationReceive(
    _ code: Int32,
    firmwareInfo: Epos2FirmwareInfo
  ) {
    guard code == EPOS2_CODE_SUCCESS.rawValue else {
      reject(CODE_CALLBACK, String(code), nil)
      return
    }

    // guard let info = firmwareInfo else {
    //   reject(CODE_CALLBACK, String(EPOS2_ERR_ILLEGAL), nil)
    //   return
    // }

    resolve(["version": firmwareInfo.version])
  }

  func onUpdateVerify(_ code: Int32) {
    guard code == EPOS2_CODE_SUCCESS.rawValue else {
      reject(CODE_CALLBACK, String(code), nil)
      return
    }

    resolve(nil)
  }

  func onFirmwareUpdateProgress(_ task: String?, progress: Float) {
    if let task = task {
      resolve(["task": task, "progress": progress])
    }
  }

  func onFirmwareUpdate(_ code: Int32, maxWaitTime: Int32) {
    guard code == EPOS2_CODE_SUCCESS.rawValue else {
      reject(CODE_CALLBACK, String(code), nil)
      return
    }

    resolve(maxWaitTime)
  }
}

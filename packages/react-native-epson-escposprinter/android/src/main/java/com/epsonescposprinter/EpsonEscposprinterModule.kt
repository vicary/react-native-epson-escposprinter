package com.epsonescposprinter

import android.util.Base64
import androidx.lifecycle.ViewTreeLifecycleOwner
import androidx.lifecycle.lifecycleScope
import com.epson.epos2.discovery.DeviceInfo;
import com.epson.epos2.discovery.Discovery;
import com.epson.epos2.discovery.DiscoveryListener;
import com.epson.epos2.discovery.FilterOption;
import com.epson.epos2.Epos2CallbackCode
import com.epson.epos2.Epos2Exception
import com.epson.epos2.printer.FirmwareInfo
import com.epson.epos2.printer.FirmwareUpdateListener
import com.epson.epos2.printer.GetPrinterSettingExListener
import com.epson.epos2.printer.MaintenanceCounterListener
import com.epson.epos2.printer.Printer
import com.epson.epos2.printer.PrinterInformationListener
import com.epson.epos2.printer.PrinterSettingListener
import com.epson.epos2.printer.PrinterStatusInfo
import com.epson.epos2.printer.ReceiveListener
import com.epson.epos2.printer.SetPrinterSettingExListener
import com.epson.epos2.printer.StatusChangeEventListener
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.JavaScriptModule
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule
import java.util.concurrent.atomic.AtomicInteger
import java.util.concurrent.ConcurrentHashMap
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import org.json.JSONArray
import org.json.JSONObject

class EpsonEscposprinterModule internal constructor(val context: ReactApplicationContext) :
  EpsonEscposprinterSpec(context) {

  companion object {
    const val NAME = "EpsonEscposprinter"
    private val CODE_ERROR = "EpsonPrinterError"
    private val CODE_CALLBACK = "EpsonPrinterCallback"

    private fun ipToNumber(ip: String): Long =
      ip.split(".").fold(0L) { acc, s -> (acc shl 8) + s.toLong() }

    private fun statusToObject(it: PrinterStatusInfo) =
      Arguments.createMap().apply {
        putBoolean("connection", it.connection == Printer.TRUE)

        it.online
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putBoolean("online", it == Printer.TRUE) }

        it.coverOpen
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putBoolean("coverOpen", it == Printer.TRUE) }

        it.paper
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putInt("paper", it) }

        it.paperFeed
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putBoolean("paperFeed", it == Printer.TRUE) }

        it.panelSwitch
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putBoolean("panelSwitch", it == Printer.TRUE) }

        it.drawer
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putInt("drawer", it) }

        it.errorStatus
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putInt("errorStatus", it) }

        it.autoRecoverError
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putInt("autoRecoverError", it) }

        it.buzzer
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putBoolean("buzzer", it == Printer.TRUE) }

        it.adapter
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putBoolean("adapter", it == Printer.TRUE) }

        it.batteryLevel
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putInt("batteryLevel", it) }

        it.removalWaiting
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putBoolean("removalWaiting", it == Printer.REMOVAL_WAIT_PAPER) }

        it.paperTakenSensor
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putInt("paperTakenSensor", it) }

        it.unrecoverError
          .takeIf { it != Printer.UNKNOWN }
          ?.let { putInt("unrecoverError", it) }
      }

    private fun jsonToObject(json: String): WritableMap {
      fun objToMap(obj: JSONObject): WritableMap {
        Arguments.createMap().apply {
          obj.keys().forEach {
            when (val value = obj.get(it)) {
              is Boolean -> putBoolean(it, value)
              is Int -> putInt(it, value)
              is Double -> putDouble(it, value)
              is String -> putString(it, value)
              is JSONObject -> putMap(it, objToMap(value))
              is JSONArray -> putArray(it, arrToMap(value))
              // else -> putNull(it)
            }
          }
        }
      }

      fun arrToMap(arr: JSONArray): WritableArray {
        Arguments.createArray().apply {
          arr.map {
            when (it) {
              is Boolean -> pushBoolean(it)
              is Int -> pushInt(it)
              is Double -> pushDouble(it)
              is String -> pushString(it)
              is JSONObject -> pushMap(objToMap(it))
              is JSONArray -> pushArray(arrToMap(it))
              else -> pushNull()
            }
          }
        }
      }

      JSONObject(json).apply(::objToMap)
    }
  }

  private val mutex = Mutex()
  private val printers = ConcurrentHashMap<Int, Printer>()
  private val printersId = AtomicInteger(0)

  override fun getName(): String = NAME

  protected val coroutineScope: CoroutineScope
    get() = getCurrentActivity()
      ?.getCurrentFocus()
      ?.let { ViewTreeLifecycleOwner.get(it) }
      ?.lifecycleScope
      ?: GlobalScope

  protected fun getPrinter(id: Double, promise: Promise): ESCPOSPrinter? =
    printers.get(id.toInt())
      ?: run {
        promise.reject(
          CODE_ERROR,
          ESCPOSConst.CMP_EX_DEV_NO_PRINTER.toString()
        )
        null
      }

  private var listenersCount = 0

  private fun emitEvent(event: String, parameters: WritableMap) =
    context.takeIf { listenersCount > 0}
      ?.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit(event, parameters)

  @ReactMethod
  fun addListener(eventName: String) {
    listenersCount += 1
  }

  @ReactMethod
  fun removeListeners(count: Int) {
    listenersCount = (listenersCount - count).coerceAtLeast(0)
  }

  @ReactMethod
  override fun connect(
    printerSeries: Double,
    lang: Double,
    target: String,
    timeout: Double,
    promise: Promise
  ) {
    runCatching {
      Printer(series, lang, context).apply {
        connect(
          target,
          timeout.takeIf { it > 0 }?.toInt()
            ?: Printer.PARAM_DEFAULT
        )
      }
    }
      .onFailure { it: Epos2Exception ->
        promise.reject(CODE_ERROR, it.getErrorStatus())
      }
      .onSuccess {
        val printerId = printersId.incrementAndGet()

        it.setStatusChangeEventListener(
          object : StatusChangeEventListener {
            override fun onPtrStatusChange(
              printer: Printer,
              event: Int
            ) {
              emitEvent(
                "statusChange",
                Arguments.createMap().apply {
                  putInt("printerId", printerId)
                  putInt("status", event)
                }
              )
            }
          }
        )

        it.setReceiveEventListener(
          object : ReceiveListener {
            override fun onPtrReceive(
              printer: Printer,
              code: Int,
              status: PrinterStatusInfo,
              printJobId: String?
            ) {
              emitEvent(
                "printStatusChange",
                Arguments.createMap().apply {
                  putInt("printerId", printerId)
                  putInt("code", code)
                  putMap("status", statusToObject(status))
                  printJobId?.let { putString("printJobId", it) }
                }
              )
            }
          }
        )

        it.startMonitor()

        printers.set(printerId, it)
        promise.resolve(printerId)
      }
  }

  @ReactMethod
  override fun disconnect(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.apply {
          stopMonitor()
          setStatusChangeEventListener(null)
          setReceiveEventListener(null)
          disconnect()
        }
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess {
          printers.remove(id.toInt())
          promise.resolve(null)
        }
    }
  }

  @ReactMethod
  override fun getStatus(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.apply {
          getStatus().let { it: PrinterStatusInfo ->
            Arguments.createMap().apply {
              putBoolean("connection", it.connection == Printer.TRUE)

              it.online
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putBoolean("online", it == Printer.TRUE) }

              it.coverOpen
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putBoolean("coverOpen", it == Printer.TRUE) }

              it.paper
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putInt("paper", it) }

              it.paperFeed
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putBoolean("paperFeed", it == Printer.TRUE) }

              it.panelSwitch
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putBoolean("panelSwitch", it == Printer.TRUE) }

              it.drawer
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putInt("drawer", it) }

              it.errorStatus
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putInt("errorStatus", it) }

              it.autoRecoverError
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putInt("autoRecoverError", it) }

              it.buzzer
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putBoolean("buzzer", it == Printer.TRUE) }

              it.adapter
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putBoolean("adapter", it == Printer.TRUE) }

              it.batteryLevel
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putInt("batteryLevel", it) }

              it.removalWaiting
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putBoolean("removalWaiting", it == Printer.REMOVAL_WAIT_PAPER) }

              it.paperTakenSensor
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putInt("paperTakenSensor", it) }

              it.unrecoverError
                .takeIf { it != Printer.UNKNOWN }
                ?.let { putInt("unrecoverError", it) }
            }
          }
        }
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(it) }
    }
  }

  @ReactMethod
  override fun sendData(id: Double, timeout: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.apply { sendData(timeout.toInt()) }
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun beginTransaction(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.beginTransaction() }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun endTransaction(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.endTransaction() }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun requestPrintJobStatus(
    id: Double,
    printJobId: String,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.apply { requestPrintJobStatus(printJobId) }
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun clearCommandBuffer(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.clearCommandBuffer() }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextAlign(id: Double, align: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addTextAlign(align.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addLineSpace(id: Double, lineSpace: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addLineSpace(lineSpace.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextRotate(id: Double, rotate: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addTextRotate(rotate.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addText(id: Double, text: String, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addText(text) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextLang(id: Double, lang: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addTextLang(lang.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextFont(id: Double, font: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addTextFont(font.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextSmooth(id: Double, smooth: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addTextSmooth(smooth.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextSize(
    id: Double,
    width: Double,
    height: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.addTextSize(width.toInt(), height.toInt())
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextStyle(
    id: Double,
    reverse: Double,
    ul: Double,
    em: Double,
    color: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)
          ?.addTextStyle(reverse.toInt(), ul.toInt(), em.toInt(), color.toInt())
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addHPosition(id: Double, x: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addHPosition(x.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addFeedUnit(id: Double, unit: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addFeedUnit(unit.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addFeedLine(id: Double, line: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addFeedLine(line.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addImage(
    id: Double,
    data: String,
    x: Double,
    y: Double,
    width: Double,
    heigh: Double,
    color: Double,
    mode: Double,
    halftone: Double,
    brightness: Double,
    compress: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching { Base64.decode(data, Base64.DEFAULT) }
        .onFailure { promise.reject(CODE_ERROR, it) }
        .onSuccess { bytes ->
          runCatching {
            getPrinter(id, promise)
              ?.addImage(
                bytes,
                x.toInt(),
                y.toInt(),
                width.toInt(),
                heigh.toInt(),
                color.toInt(),
                mode.toInt(),
                halftone.toInt(),
                brightness.toInt(),
                compress.toInt()
              )
          }
          .onFailure { it: Epos2Exception ->
            promise.reject(CODE_ERROR, it.getErrorStatus())
          }
          .onSuccess { promise.resolve(null) }
        }
    }
  }

  @ReactMethod
  override fun addLogo(
    id: Double,
    key1: Double,
    key2: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.addLogo(key1.toInt(), key2.toInt())
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addBarcode(
    id: Double,
    data: String,
    type: Double,
    hri: Double,
    font: Double,
    width: Double,
    height: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)
          ?.addBarcode(
            data,
            type.toInt(),
            hri.toInt(),
            font.toInt(),
            width.toInt(),
            height.toInt()
          )
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addSymbol(
    id: Double,
    data: String,
    type: Double,
    level: Double,
    width: Double,
    height: Double,
    size: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)
          ?.addSymbol(
            data,
            type.toInt(),
            level.toInt(),
            width.toInt(),
            height.toInt(),
            size.toInt()
          )
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addHLine(
    id: Double,
    x1: Double,
    x2: Double,
    lineStyle: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.addHLine(
          x1.toInt(),
          x2.toInt(),
          lineStyle.toInt()
        )
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addVLineBegin(
    id: Double,
    x: Double,
    lineStyle: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      val lineId = IntArray(1)

      runCatching {
        getPrinter(id, promise)?.addVLineBegin(x.toInt(), lineStyle.toInt(), lineId)
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(lineId[0]) }
    }
  }

  @ReactMethod
  override fun addVLineEnd(id: Double, lineId: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addVLineEnd(lineId.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addPageBegin(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addPageBegin() }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addPageEnd(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addPageEnd() }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addPageArea(
    id: Double,
    x: Double,
    y: Double,
    width: Double,
    height: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.addPageArea(
          x.toInt(),
          y.toInt(),
          width.toInt(),
          height.toInt()
        )
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addPageDirection(
    id: Double,
    direction: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.addPageDirection(direction.toInt())
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addPagePosition(
    id: Double,
    x: Double,
    y: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.addPagePosition(x.toInt(), y.toInt())
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addPageLine(
    id: Double,
    x1: Double,
    y1: Double,
    x2: Double,
    y2: Double,
    lineStyle: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)
          ?.addPageLine(
            x1.toInt(),
            y1.toInt(),
            x2.toInt(),
            y2.toInt(),
            lineStyle.toInt()
          )
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addPageRectangle(
    id: Double,
    x1: Double,
    y1: Double,
    x2: Double,
    y2: Double,
    lineStyle: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)
          ?.addPageRectangle(
            x1.toInt(),
            y1.toInt(),
            x2.toInt(),
            y2.toInt(),
            lineStyle.toInt()
          )
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addRotateBegin(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addRotateBegin() }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addRotateEnd(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addRotateEnd() }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addCut(
    id: Double,
    type: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addCut(type.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addPulse(
    id: Double,
    drawer: Double,
    time: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.addPulse(drawer.toInt(), time.toInt())
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addSound(
    id: Double,
    pattern: Double,
    repeat: Double,
    cycle: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.addSound(
          pattern.toInt(),
          repeat.toInt(),
          cycle.toInt()
        )
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addFeedPosition(
    id: Double,
    position: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.addFeedPosition(position.toInt())
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addLayout(
    id: Double,
    type: Double,
    width: Double,
    height: Double,
    marginTop: Double,
    marginBottom: Double,
    offsetCut: Double
    offsetLabel: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.addLayout(
          type.toInt(),
          width.toInt(),
          height.toInt(),
          marginTop.toInt(),
          marginBottom.toInt(),
          offsetCut.toInt(),
          offsetLabel.toInt()
        )
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addCommand(
    id: Double,
    command: String,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        Base64.decode(command, Base64.DEFAULT)
      }
        .onFailure { promise.reject(CODE_ERROR, it) }
        .onSuccess { bytes ->
          runCatching {
            getPrinter(id, promise)?.addCommand(bytes)
          }
          .onFailure { it: Epos2Exception ->
            promise.reject(CODE_ERROR, it.getErrorStatus())
          }
          .onSuccess { promise.resolve(null) }
        }
    }
  }

  @ReactMethod
  override fun getMaintenanceCounter(
    id: Double,
    timeout: Double,
    type: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.getMaintenanceCounter(
          timeout.toInt(),
          type.toInt(),
          object : MaintenanceCounterListener {
            override fun onGetMaintenanceCounter(
              code: Int,
              type: Int,
              value: Int
            ) {
              code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                ?: promise.resolve(value)
            }
          }
        )
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
    }
  }

  @ReactMethod
  override fun resetMaintenanceCounter(
    id: Double,
    timeout: Double,
    type: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.resetMaintenanceCounter(
          timeout.toInt(),
          type.toInt(),
          object : MaintenanceCounterListener {
            override fun onResetMaintenanceCounter(code: Int, type: Int) {
              code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                ?: promise.resolve(null)
            }
          }
        )
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
    }
  }

  @ReactMethod
  override fun getPrinterSetting(
    id: Double,
    timeout: Double,
    type: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.getPrinterSetting(
          timeout.toInt(),
          type.toInt(),
          object : PrinterSettingListener {
            override fun onGetPrinterSetting(
              code: Int,
              type: Int,
              value: Int
            ) {
              code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                ?: promise.resolve(value)
            }
          }
        )
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
    }
  }

  @ReactMethod
  override fun setPrinterSetting(
    id: Double,
    timeout: Double,
    list: ReadableMap,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.setPrinterSetting(
          timeout.toInt(),
          list.map { it.key.toInt() to it.value.toInt() }.toMap(),
          object : PrinterSettingListener {
            override fun onSetPrinterSetting(code: Int) {
              code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                ?: promise.resolve(null)
            }
          }
        )
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
    }
  }

  @ReactMethod
  override fun getPrinterSettingEx(
    id: Double,
    timeout: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      mutex.withLock {
        runCatching {
          getPrinter(id, promise)?.apply {
            setGetPrinterSettingExListener(
              object : GetPrinterSettingExListener {
                override fun onGetPrinterSettingEx(
                  printer: Printer,
                  code: Int,
                  json: String
                ) {
                  code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                    ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                    ?: promise.resolve(jsonToObject(json))

                    setGetPrinterSettingExListener(null)
                }
              }
            )
            getPrinterSettingEx(timeout.toInt())
          }
        }
          .onFailure { it: Epos2Exception ->
            promise.reject(CODE_ERROR, it.getErrorStatus())
          }
      }
    }
  }

  @ReactMethod
  override fun setPrinterSettingEx(
    id: Double,
    timeout: Double,
    jsonString: String,
    administratorPassword: String,
    promise: Promise
  ) {
    coroutineScope.launch {
      mutex.withLock {
        runCatching {
          getPrinter(id, promise)?.apply {
            setSetPrinterSettingExListener(
              object : SetPrinterSettingExListener {
                override fun onSetPrinterSettingEx(
                  printer: Printer,
                  code: Int
                ) {
                  code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                    ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                    ?: promise.resolve(null)

                  setSetPrinterSettingExListener(null)
                }
              }
            )
            setPrinterSettingEx(timeout.toInt(), jsonString, administratorPassword)
          }
        }
          .onFailure { it: Epos2Exception ->
            promise.reject(CODE_ERROR, it.getErrorStatus())
          }
      }
    }
  }

  @ReactMethod
  override fun verifyPassword(
    id: Double,
    timeout: Double,
    administratorPassword: String,
    promise: Promise
  ) {
    coroutineScope.launch {
      mutex.withLock {
        runCatching {
          getPrinter(id, promise)?.apply {
            setVerifyPasswordListener(
              object : VerifyPasswordListener {
                override fun onVerifyPassword(
                  printer: Printer,
                  code: Int
                ) {
                  code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                    ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                    ?: promise.resolve(null)

                  setVerifyPasswordListener(null)
                }
              }
            )

            verifyPassword(timeout.toInt(), administratorPassword)
          }
        }
          .onFailure { it: Epos2Exception ->
            promise.reject(CODE_ERROR, it.getErrorStatus())
          }
      }
    }
  }

  @ReactMethod
  override fun getPrinterInformation(
    id: Double,
    timeout: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      mutex.withLock {
        runCatching {
          getPrinter(id, promise)?.apply {
            setGetPrinterInformationListener(
              object : PrinterInformationListener {
                override fun onGetPrinterInformation(
                  code: Int,
                  json: String
                ) {
                  code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                    ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                    ?: promise.resolve(jsonToObject(json))
                }
              }
            )

            getPrinterInformation(timeout.toInt())
          }
        }
          .onFailure { it: Epos2Exception ->
            promise.reject(CODE_ERROR, it.getErrorStatus())
          }
      }
    }
  }

  @ReactMethod
  override fun downloadFirmwareList(
    id: Double,
    printerModel: String,
    option: String,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.apply {
          downloadFirmwareList(
            printerModel,
            option,
            object : FirmwareUpdateListener {
              override fun onDownloadFirmwareList(
                code: Int,
                firmwareList: FirmwareInfo[]
              ) {
                code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                  ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                  ?: promise.resolve(
                    Arguments.createArray().apply {
                      firmwareList.forEach {
                        pushMap(
                          Arguments.createMap().apply {
                            putString("model", it.model)
                            putString("version", it.version)
                          }
                        )
                      }
                    }
                  )
              }
            }
          )
        }
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
    }
  }

  @ReactMethod
  override fun getPrinterFirmwareInfo(
    id: Double,
    timeout: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.apply {
          getPrinterFirmwareInfo(
            timeout.toInt(),
            object : FirmwareUpdateListener {
              override fun onReceiveFirmwareInformation(
                firmwareInfo: FirmwareInfo
              ) {
                code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                  ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                  ?: promise.resolve(
                    Arguments.createMap().apply {
                      putString("model", firmwareInfo.model)
                      putString("version", firmwareInfo.version)
                    }
                  )
              }
            }
          )
        }
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
    }
  }

  @ReactMethod
  override fun verifyUpdate(
    id: Double,
    targetFirmwareInfo: ReadableMap,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.apply {
          verifyUpdate(
            object : FirmwareInfo {
              override val model: String = targetFirmwareInfo.getString("model")
              override val version: String = targetFirmwareInfo.getString("version")
            },
            object : FirmwareUpdateListener {
              override fun onVerifyUpdate(
                code: Int,
                result: Int
              ) {
                code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                  ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                  ?: promise.resolve(result)
              }
            }
          )
        }
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
    }
  }

  @ReactMethod
  override fun updateFirmware(
    id: Double,
    targetFirmwareInfo: ReadableMap,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.apply {
          updateFirmware(
            object : FirmwareInfo {
              override val model: String = targetFirmwareInfo.getString("model")
              override val version: String = targetFirmwareInfo.getString("version")
            },
            object : FirmwareUpdateListener {
              override fun onFirmwareUpdateProgress(
                task: String,
                progress: Float
              ) {
                emitEvent(
                  "updateProgress",
                  Arguments.createMap().apply {
                    putString("task", task)
                    putDouble("progress", progress.toDouble())
                  }
                )
              }

              override fun onUpdateFirmware(
                code: Int,
                maxWaitTime: Int
              ) {
                code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                  ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                  ?: promise.resolve(maxWaitTime)
              }
            },
            context
          )
        }
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
    }
  }

  @ReactMethod
  override fun forceRecover(
    id: Double,
    timeout: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.forceRecover(timeout.toInt())
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun forcePulse(
    id: Double,
    drawer: Double,
    pulseTime: Double,
    timeout: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.forcePulse(
          drawer.toInt(),
          pulseTime.toInt(),
          timeout.toInt()
        )
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun forceStopSound(
    id: Double,
    timeout: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.forceStopSound(timeout.toInt())
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun forceCommand(
    id: Double,
    command: String,
    timeout: Double,
  ) {
    coroutineScope.launch {
      runCatching {
        Base64.decode(command, Base64.DEFAULT)
      }
        .onFailure { promise.reject(CODE_ERROR, it) }
        .onSuccess { bytes ->
          runCatching {
            getPrinter(id, promise)?.forceCommand(bytes, timeout.toInt())
          }
          .onFailure { it: Epos2Exception ->
            promise.reject(CODE_ERROR, it.getErrorStatus())
          }
          .onSuccess { promise.resolve(null) }
        }
    }
  }

  @ReactMethod
  override fun forceReset(
    id: Double,
    timeout: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.forceReset(timeout.toInt())
      }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun discoveryStart(filter: ReadableMap, promise: Promise) {
    runCatching {
      Discovery.start(
        context,
        new FilterOption().apply {
          filter.getInt("portType")?.let { setPortType(it) }
          filter.getString("broadcast")?.let { setBroadcast(it) }
          filter.getInt("deviceModel")?.let { setDeviceModel(it) }
          filter.getInt("epsonFilter")?.let { setEpsonFilter(it) }
          filter.getInt("deviceType")?.let { setDeviceType(it) }
          filter.getBoolean("bondedDevices")?.let {
            setBondedDevices(
              if (it) Discovery.TRUE else Discovery.FALSE
            )
          }
          filter.getBoolean("usbDeviceName")?.let {
            setUsbDeviceName(
              if (it) Discovery.TRUE else Discovery.FALSE
            )
          }
        },
        object : DiscoveryListener {
          override fun onDiscovery(deviceInfo: DeviceInfo) {
            emitEvent(
              "deviceFound",
              Arguments.createMap().apply {
                putInt("deviceType", deviceInfo.deviceType)
                putString("deviceName", deviceInfo.deviceName)
                putString("target", deviceInfo.target)
                deviceInfo.ipAddress.takeIf { it.isNotEmpty() }?.let {
                  putString("ipAddress", it)
                }
                deviceInfo.macAddress.takeIf { it.isNotEmpty() }?.let {
                  putString("macAddress", it)
                }
                deviceInfo.bdAddress.takeIf { it.isNotEmpty() }?.let {
                  putString("bdAddress", it)
                }
              }
            )
          }
        }
      )
    }
      .onFailure { it: Epos2Exception ->
        promise.reject(CODE_ERROR, it.getErrorStatus())
      }
      .onSuccess { promise.resolve(null) }
  }

  @ReactMethod
  override fun discoveryStop(promise: Promise) {
    runCatching { Discovery.stop() }
      .onFailure { it: Epos2Exception ->
        promise.reject(CODE_ERROR, it.getErrorStatus())
      }
      .onSuccess { promise.resolve(null) }
  }
}

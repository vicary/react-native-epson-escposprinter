package com.epsonescposprinter

import android.util.Base64
import androidx.lifecycle.ViewTreeLifecycleOwner
import androidx.lifecycle.lifecycleScope
import com.epson.epos2.Epos2CallbackCode
import com.epson.epos2.Epos2Exception
import com.epson.epos2.printer.GetPrinterSettingExListener
import com.epson.epos2.printer.MaintenanceCounterListener
import com.epson.epos2.printer.Printer
import com.epson.epos2.printer.PrinterStatusInfo
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.atomic.AtomicInteger
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

class EpsonEscposprinterModule internal constructor(val context: ReactApplicationContext) :
  EpsonEscposprinterSpec(context) {

  private val CODE_ERROR = "EpsonPrinterError"
  private val CODE_CALLBACK = "EpsonPrinterCallback"
  private val printersId = AtomicInteger(0)
  private val printers = ConcurrentHashMap<Int, Printer>()

  companion object {
    const val NAME = "EpsonEscposprinter"
  }

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

  protected fun ipToNumber(ip: String): Long =
    ip.split(".").fold(0L) { acc, s -> (acc shl 8) + s.toLong() }

  @ReactMethod
  override fun connect(
    printerSeries: Double,
    lang: Double,
    target: String,
    timeout: Double,
  ) {
    runCatching {
      Printer(series, lang, context).apply {
        connect(
          target,
          timeout.takeIf { it > 0 }?.toInt()
            ?: Printer.PARAM_DEFAULT
        )

        // [ ] `setStatusChangeEventListener`
        // [ ] `setReceiveEventListener`

        startMonitor()
      }
    }
      .onFailure { it: Epos2Exception ->
        promise.reject(CODE_ERROR, it.getErrorStatus())
      }
      .onSuccess {
        val printerId = printersId.incrementAndGet()
        printers.set(printerId, it)
        promise.resolve(printerId)
      }
  }

  @ReactMethod
  override fun disconnect(id: Double) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.apply {
          stopMonitor()
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
  override fun getStatus(id: Double) {
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
  override fun sendData(id: Double, timeout: Double) {
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
  override fun beginTransaction(id: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.beginTransaction() }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun endTransaction(id: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.endTransaction() }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun requestPrintJobStatus(id: Double, printJobId: String) {
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
  override fun clearCommandBuffer(id: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.clearCommandBuffer() }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextAlign(id: Double, align: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addTextAlign(align.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addLineSpace(id: Double, lineSpace: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addLineSpace(lineSpace.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextRotate(id: Double, rotate: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addTextRotate(rotate.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addText(id: Double, data: String) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addText(data) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextLang(id: Double, lang: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addTextLang(lang.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextFont(id: Double, font: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addTextFont(font.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextSmooth(id: Double, smooth: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addTextSmooth(smooth.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextSize(id: Double, width: Double, height: Double) {
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
    compress: Double
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
  override fun addLogo(id: Double, key1: Double, key2: Double) {
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
          height: Double
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
          size: Double
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
  override fun addHLine(id: Double, x1: Double, x2: Double, lineStyle: Double) {
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
  override fun addVLineBegin(id: Double, x: Double, lineStyle: Double) {
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
  override fun addPageBegin(id: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addPageBegin() }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addPageEnd(id: Double) {
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
    height: Double
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
  override fun addPageDirection(id: Double, direction: Double) {
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
  override fun addPagePosition(id: Double, x: Double, y: Double) {
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
    lineStyle: Double
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
    lineStyle: Double
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
  override fun addRotateBegin(id: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addRotateBegin() }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addRotateEnd(id: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addRotateEnd() }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addCut(id: Double, type: Double) {
    coroutineScope.launch {
      runCatching { getPrinter(id, promise)?.addCut(type.toInt()) }
        .onFailure { it: Epos2Exception ->
          promise.reject(CODE_ERROR, it.getErrorStatus())
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addPulse(id: Double, drawer: Double, time: Double) {
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
    cycle: Double
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
  override fun addFeedPosition(id: Double, position: Double) {
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
    offsetLabel: Double
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
  override fun addCommand(id: Double, data: String) {
    coroutineScope.launch {
      runCatching {
        Base64.decode(data, Base64.DEFAULT)
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
    type: Double
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
    type: Double
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
    type: Double
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
    list: ReadableMap
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
  override fun getPrinterSettingEx(id: Double, timeout: Double) {
    coroutineScope.launch {
      runCatching {
        getPrinter(id, promise)?.apply {
          // [ ] Handle racing condition
          setGetPrinterSettingExListener(
            object : GetPrinterSettingExListener {
              override fun onGetPrinterSettingEx(
                printer: Printer
                code: Int,
                json: String
              ) {
                code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                  ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                  ?: run {
                    // [ ] Parse JSON onto ReadableMap
                    promise.resolve(json)
                  }
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

/*
  @ReactMethod
  override fun searchEpsonPrinter(connectType: Double, timeout: Double, promise: Promise) {
    coroutineScope.launch {
      val outErrors = IntArray(1)

      ESCPOSPrinter().apply {
        setContext(context)

        searchEpsonPrinter(connectType.toInt(), timeout.toInt(), outErrors)
          .sortedWith(
            compareBy { it: EpsonPrinterInfo -> ipToNumber(it.ipAddress) }
              .thenBy(String.CASE_INSENSITIVE_ORDER) { it.macAddress }
              .thenBy(String.CASE_INSENSITIVE_ORDER) { it.deviceName }
              .thenBy(String.CASE_INSENSITIVE_ORDER) { it.bdAddress }
          )
          .map {
            Arguments.createMap().apply {
              it.ipAddress
                ?.takeIf { it.isNotEmpty() }
                ?.let { putString("ipAddress", it) }

              it.macAddress
                ?.takeIf { it.isNotEmpty() }
                ?.let { putString("macAddress", it) }

              it.deviceName
                ?.takeIf { it.isNotEmpty() }
                ?.let { putString("deviceName", it) }

              it.bdAddress
                ?.takeIf { it.isNotEmpty() }
                ?.let { putString("bdAddress", it) }
            }
          }
          .takeIf {
            outErrors[0] == ESCPOSConst.CMP_SUCCESS ||
            outErrors[0] == ESCPOSConst.CMP_E_NO_LIST
          }
          ?.let {
            promise.resolve(Arguments.makeNativeArray(it.toList()))
          }
          ?: promise.reject(
            CODE_ERROR,
            getErrorCodeExtended()
              .takeIf { it > 0 }
              ?.toString()
              ?: outErrors[0].toString()
          )
      }
    }
  }

  @ReactMethod
  override fun searchESCPOSPrinter(connectType: Double, timeout: Double, promise: Promise) {
    coroutineScope.launch {
      val outErrors = IntArray(1)

      ESCPOSPrinter().apply {
        setContext(context)

        searchESCPOSPrinter(connectType.toInt(), timeout.toInt(), outErrors)
          .sortedBy { ipToNumber(it) }
          .takeIf {
            outErrors[0] == ESCPOSConst.CMP_SUCCESS ||
            outErrors[0] == ESCPOSConst.CMP_E_NO_LIST
          }
          ?.let {
            promise.resolve(Arguments.makeNativeArray(it.toList()))
          }
          ?: promise.reject(
            CODE_ERROR,
            getErrorCodeExtended()
              .takeIf { it > 0 }
              ?.toString()
              ?: outErrors[0].toString()
          )
      }
    }
  }

  @ReactMethod
  override fun printerCheckEx(
    connectType: Double,
    address: String,
    port: Double,
    timeout: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      ESCPOSPrinter().apply {
        val outStatus = IntArray(1)

        setContext(context)

        connectType.toInt()
          .let { type ->
            when (type) {
              ESCPOSConst.CMP_PORT_WiFi -> {
                port.toInt().takeIf { it > 0 }
                  ?.let { port ->
                    timeout.toInt().takeIf { it > 0 }
                      ?.let { timeout ->
                        printerCheckEx(outStatus, type, address, port, timeout)
                      }
                      ?: printerCheckEx(outStatus, type, address, port)
                  }
                  ?: printerCheckEx(outStatus, type, address)
              }
              ESCPOSConst.CMP_PORT_Bluetooth,
              ESCPOSConst.CMP_PORT_Bluetooth_Insecure ->
                printerCheckEx(outStatus, type, address)
              ESCPOSConst.CMP_PORT_USB -> {
                val device: UsbDevice? = null
                printerCheckEx(outStatus, type, device)
              }
              else -> ESCPOSConst.CMP_E_ILLEGAL
            }
          }
          .takeIf { it != ESCPOSConst.CMP_SUCCESS }
          ?.let {
            promise.reject(
              CODE_ERROR,
              getErrorCodeExtended()
                .takeIf { it > 0 }
                ?.toString()
                ?: it.toString()
            )
          }
          ?: promise.resolve(outStatus[0])
      }
    }
  }

  @ReactMethod
  override fun openDrawerEx(
    drawer: Double,
    pulseLen: Double,
    connectType: Double,
    address: String,
    port: Double,
    timeout: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      ESCPOSPrinter().apply {
        val intDrawer = drawer.toInt()
        val intPulseLen = pulseLen.toInt()

        setContext(context)

        connectType.toInt()
          .let { type ->
            when (type) {
              ESCPOSConst.CMP_PORT_WiFi -> {
                port.toInt().takeIf { it > 0 }
                  ?.let { port ->
                    timeout.toInt().takeIf { it > 0 }
                      ?.let { timeout ->
                        openDrawerEx(intDrawer, intPulseLen, type, address, port, timeout)
                      }
                      ?: openDrawerEx(intDrawer, intPulseLen, type, address, port)
                  }
                  ?: openDrawerEx(intDrawer, intPulseLen, type, address)
              }
              ESCPOSConst.CMP_PORT_Bluetooth,
              ESCPOSConst.CMP_PORT_Bluetooth_Insecure ->
                openDrawerEx(intDrawer, intPulseLen, type, address)
              ESCPOSConst.CMP_PORT_USB -> {
                val device: UsbDevice? = null
                openDrawerEx(intDrawer, intPulseLen, type, device)
              }
              else -> ESCPOSConst.CMP_E_ILLEGAL
            }
          }
          .takeIf { it != ESCPOSConst.CMP_SUCCESS }
          ?.let {
            promise.reject(
              CODE_ERROR,
              getErrorCodeExtended()
                .takeIf { it > 0 }
                ?.toString()
                ?: it.toString()
            )
          }
          ?: promise.resolve(null)
      }
    }
  }
*/
}

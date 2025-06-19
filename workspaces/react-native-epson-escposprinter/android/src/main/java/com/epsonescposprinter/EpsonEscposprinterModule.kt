package com.epsonescposprinter

import android.graphics.BitmapFactory
import android.util.Base64
import android.widget.Toast
import androidx.lifecycle.findViewTreeLifecycleOwner
import androidx.lifecycle.lifecycleScope
import com.epson.epos2.discovery.*;
import com.epson.epos2.Epos2CallbackCode
import com.epson.epos2.Epos2Exception
import com.epson.epos2.printer.*
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule
import java.util.concurrent.atomic.AtomicInteger
import java.util.concurrent.ConcurrentHashMap
import kotlinx.coroutines.*
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import org.json.JSONArray
import org.json.JSONObject

class EpsonEscposprinterModule internal constructor(val context: ReactApplicationContext) :
  EpsonEscposprinterSpec(context) {

  companion object {
    const val NAME = "EpsonEscposprinter"
    private val CODE_ERROR = "EpsonPrinterError"
    private val CODE_CALLBACK = "EpsonCallbackError"

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
      lateinit var objToMap: (JSONObject) -> WritableMap
      lateinit var arrToMap: (JSONArray) -> WritableArray

      objToMap = { obj ->
        Arguments.createMap().apply {
          obj.keys().forEach {
            when (val value = obj.get(it)) {
              is Boolean -> putBoolean(it, value)
              is Int -> putInt(it, value)
              is Double -> putDouble(it, value)
              is String -> putString(it, value)
              is JSONObject -> putMap(it, objToMap(value))
              is JSONArray -> putArray(it, arrToMap(value))
              else -> {}
            }
          }
        }
      }

      arrToMap = { arr ->
        Arguments.createArray().apply {
          for (i in 0 until arr.length()) {
            when (val it = arr.get(i)) {
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

      return JSONObject(json).let { objToMap(it) }
    }
  }

  override fun getName(): String = NAME

  protected val coroutineScope = CoroutineScope(Dispatchers.IO + SupervisorJob())

  private val instances = ConcurrentHashMap<Int, Printer>()
  private val instancesId = AtomicInteger(0)
  protected suspend fun runCatchingForInstance(
    id: Double,
    promise: Promise,
    block: suspend (Printer) -> Unit
  ) = runCatching {
    instances.get(id.toInt())?.let { block(it) } ?: run {
      promise.reject(
        CODE_ERROR,
        Epos2Exception.ERR_NOT_FOUND.toString()
      )
      null
    }
  }

  private val mutexes = ConcurrentHashMap<Printer, Mutex>()
  protected suspend fun withInstanceLock(
    printer: Printer,
    block: suspend Printer.() -> Unit
  ) = mutexes.computeIfAbsent(printer) { Mutex() }.withLock { printer.block() }

  private fun emitEvent(event: String, parameters: WritableMap) {
    context
      // [ ] Enable this again when we know how to check RCT_NEW_ARCH_ENABLED
      // .takeIf { listenerCount > 0 }
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      ?.emit(event, parameters)
  }

  private var listenerCount = 0

  @ReactMethod
  override fun addListener(eventName: String) {
    listenerCount++
  }

  @ReactMethod
  override fun removeListeners(count: Double) {
    listenerCount -= count.toInt()
  }

  @ReactMethod
  override fun connect(
    printerSeries: Double,
    lang: Double,
    target: String,
    timeout: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        Printer(printerSeries.toInt(), lang.toInt(), context).apply {
          connect(
            target,
            timeout.takeIf { it > 0 }?.toInt()
              ?: Printer.PARAM_DEFAULT
          )
        }
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess {
          val instanceId = instancesId.incrementAndGet()

          it.setStatusChangeEventListener(
            object : StatusChangeListener {
              override fun onPtrStatusChange(
                printer: Printer,
                event: Int
              ) {
                emitEvent(
                  "statusChange",
                  Arguments.createMap().apply {
                    putInt("printerId", instanceId)
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
                    putInt("printerId", instanceId)
                    putInt("code", code)
                    putMap("status", statusToObject(status))
                    printJobId?.let { putString("printJobId", it) }
                  }
                )
              }
            }
          )

          it.startMonitor()

          instances.set(instanceId, it)
          promise.resolve(instanceId)
        }
    }
  }

  @ReactMethod
  override fun disconnect(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        withInstanceLock(it) {
          it.stopMonitor()

          withTimeout(5000) {
            while (true) {
              try {
                it.disconnect()
                break
              } catch (e: Epos2Exception) {
                when (e.getErrorStatus()) {
                  Epos2Exception.ERR_PROCESSING -> delay(100)
                  // Epos2Exception.ERR_ILLEGAL -> break
                  else -> throw e
                }
              }
            }
          }

          it.setStatusChangeEventListener(null)
          it.setReceiveEventListener(null)
          it.clearCommandBuffer()
        }
      }
        .onFailure {
          instances.get(id.toInt())?.startMonitor()

          promise.reject(
            CODE_ERROR,
            when (it) {
              is Epos2Exception ->
                it.getErrorStatus().toString()
              is TimeoutCancellationException ->
                Epos2Exception.ERR_TIMEOUT.toString()
              else ->
                it.message
            }
          )
        }
        .onSuccess {
          instances.remove(id.toInt())
          mutexes.remove(it)
          promise.resolve(null)
        }
    }
  }

  @ReactMethod
  override fun getStatus(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        withInstanceLock(it) {
          it.getStatus().let { it: PrinterStatusInfo ->
            statusToObject(it)
          }
        }
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(it) }
    }
  }

  @ReactMethod
  override fun sendData(id: Double, timeout: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        withInstanceLock(it) {
          it.sendData(timeout.toInt())
        }
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun beginTransaction(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        withInstanceLock(it) {
          it.beginTransaction()
        }
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun endTransaction(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        withInstanceLock(it) {
          it.endTransaction()
        }
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.requestPrintJobStatus(printJobId)
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun clearCommandBuffer(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        withInstanceLock(it) {
          it.clearCommandBuffer()
        }
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextAlign(id: Double, align: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addTextAlign(align.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addLineSpace(id: Double, lineSpace: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addLineSpace(lineSpace.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextRotate(id: Double, rotate: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addTextRotate(rotate.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addText(id: Double, text: String, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addText(text)
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextLang(id: Double, lang: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addTextLang(lang.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextFont(id: Double, font: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addTextFont(font.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addTextSmooth(id: Double, smooth: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addTextSmooth(smooth.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.addTextSize(width.toInt(), height.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.addTextStyle(reverse.toInt(), ul.toInt(), em.toInt(), color.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addHPosition(id: Double, x: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addHPosition(x.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addFeedUnit(id: Double, unit: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addFeedUnit(unit.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addFeedLine(id: Double, line: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addFeedLine(line.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addImage(
    id: Double,
    image: String,
    x: Double,
    y: Double,
    width: Double,
    height: Double,
    color: Double,
    mode: Double,
    halftone: Double,
    brightness: Double,
    compress: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        val bytes = Base64.decode(image, Base64.DEFAULT)

        BitmapFactory.decodeByteArray(bytes, 0, bytes.size)
          ?: throw IllegalArgumentException("Invalid image data")
      }
        .onFailure { promise.reject(CODE_ERROR, it) }
        .onSuccess { image ->
          runCatchingForInstance(id, promise) {
            it.addImage(
              image,
              x.toInt(),
              y.toInt(),
              width.toInt(),
              height.toInt(),
              color.toInt(),
              mode.toInt(),
              halftone.toInt(),
              brightness,
              compress.toInt()
            )
          }
          .onFailure {
            promise.reject(
              CODE_ERROR,
              if (it is Epos2Exception)
                it.getErrorStatus().toString()
              else
                it.message
            )
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
      runCatchingForInstance(id, promise) {
        it.addLogo(key1.toInt(), key2.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addBarcode(
    id: Double,
    barcode: String,
    type: Double,
    hri: Double,
    font: Double,
    width: Double,
    height: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addBarcode(
          barcode,
          type.toInt(),
          hri.toInt(),
          font.toInt(),
          width.toInt(),
          height.toInt()
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addSymbol(
    id: Double,
    symbol: String,
    type: Double,
    level: Double,
    width: Double,
    height: Double,
    size: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addSymbol(
          symbol,
          type.toInt(),
          level.toInt(),
          width.toInt(),
          height.toInt(),
          size.toInt()
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.addHLine(
          x1.toInt(),
          x2.toInt(),
          lineStyle.toInt()
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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

      runCatchingForInstance(id, promise) {
        it.addVLineBegin(
          x.toInt(),
          lineStyle.toInt(),
          lineId
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(lineId[0]) }
    }
  }

  @ReactMethod
  override fun addVLineEnd(id: Double, lineId: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addVLineEnd(lineId.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addPageBegin(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addPageBegin()
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addPageEnd(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addPageEnd()
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.addPageArea(
          x.toInt(),
          y.toInt(),
          width.toInt(),
          height.toInt()
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.addPageDirection(direction.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.addPagePosition(x.toInt(), y.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.addPageLine(
          x1.toInt(),
          y1.toInt(),
          x2.toInt(),
          y2.toInt(),
          lineStyle.toInt()
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.addPageRectangle(
          x1.toInt(),
          y1.toInt(),
          x2.toInt(),
          y2.toInt(),
          lineStyle.toInt()
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addRotateBegin(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addRotateBegin()
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun addRotateEnd(id: Double, promise: Promise) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addRotateEnd()
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.addCut(type.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.addPulse(drawer.toInt(), time.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.addSound(
          pattern.toInt(),
          repeat.toInt(),
          cycle.toInt()
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.addFeedPosition(position.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
    offsetCut: Double,
    offsetLabel: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.addLayout(
          type.toInt(),
          width.toInt(),
          height.toInt(),
          marginTop.toInt(),
          marginBottom.toInt(),
          offsetCut.toInt(),
          offsetLabel.toInt()
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
          runCatchingForInstance(id, promise) {
            it.addCommand(bytes)
          }
          .onFailure {
            promise.reject(
              CODE_ERROR,
              if (it is Epos2Exception)
                it.getErrorStatus().toString()
              else
                it.message
            )
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
      runCatchingForInstance(id, promise) {
        it.getMaintenanceCounter(
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

            override fun onResetMaintenanceCounter(
              code: Int,
              type: Int
            ) {}
          }
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.resetMaintenanceCounter(
          timeout.toInt(),
          type.toInt(),
          object : MaintenanceCounterListener {
            override fun onGetMaintenanceCounter(
              code: Int,
              type: Int,
              value: Int
            ) {}

            override fun onResetMaintenanceCounter(code: Int, type: Int) {
              code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                ?: promise.resolve(null)
            }
          }
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.getPrinterSetting(
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

            override fun onSetPrinterSetting(code: Int) {}
          }
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.setPrinterSetting(
          timeout.toInt(),
          list.let { list ->
            val result = mutableMapOf<Int, Int>()
            val iterator = list.keySetIterator()

            while (iterator.hasNextKey()) {
              val key = iterator.nextKey()

              key.toIntOrNull()?.let { it ->
                result[it] = list.getInt(key)
              }
            }

            result
          },
          object : PrinterSettingListener {
            override fun onGetPrinterSetting(
              code: Int,
              type: Int,
              value: Int
            ) {}

            override fun onSetPrinterSetting(code: Int) {
              code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                ?: promise.resolve(null)
            }
          }
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        withInstanceLock(it) {
          it.setGetPrinterSettingExListener(
            object : GetPrinterSettingExListener {
              override fun onGetPrinterSettingEx(
                printer: Printer,
                code: Int,
                json: String
              ) {
                code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                  ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                  ?: promise.resolve(jsonToObject(json))

                it.setGetPrinterSettingExListener(null)
              }
            }
          )

          it.getPrinterSettingEx(timeout.toInt())
        }
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        withInstanceLock(it) {
          it.setSetPrinterSettingExListener(
            object : SetPrinterSettingExListener {
              override fun onSetPrinterSettingEx(
                printer: Printer,
                code: Int
              ) {
                code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                  ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                  ?: promise.resolve(null)

                it.setSetPrinterSettingExListener(null)
              }
            }
          )

          it.setPrinterSettingEx(
            timeout.toInt(),
            jsonString,
            administratorPassword
          )
        }
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        withInstanceLock(it) {
          it.setVerifyPasswordListener(
            object : VerifyPasswordListener {
              override fun onVerifyPassword(
                printer: Printer,
                code: Int
              ) {
                code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                  ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                  ?: promise.resolve(null)

                it.setVerifyPasswordListener(null)
              }
            }
          )

          it.verifyPassword(timeout.toInt(), administratorPassword)
        }
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.getPrinterInformation(
          timeout.toInt(),
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
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.downloadFirmwareList(
          printerModel,
          option,
          object : FirmwareUpdateListener {
            override fun onReceiveFirmwareInformation(it: FirmwareInfo) {}
            override fun onUpdateFirmware(code: Int, maxWaitTime: Int) {}
            override fun onFirmwareUpdateProgress(task: String, progress: Float) {}
            override fun onUpdateVerify(code: Int) {}
            override fun onDownloadFirmwareList(code: Int, list: Array<FirmwareInfo>) {
              code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
                ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
                ?: promise.resolve(
                  Arguments.createArray().apply {
                    list.forEach {
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
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.getPrinterFirmwareInfo(
          timeout.toInt(),
          object : FirmwareUpdateListener {
            override fun onDownloadFirmwareList(code: Int, list: Array<FirmwareInfo>) {}
            override fun onUpdateFirmware(code: Int, maxWaitTime: Int) {}
            override fun onFirmwareUpdateProgress(task: String, progress: Float) {}
            override fun onUpdateVerify(code: Int) {}
            override fun onReceiveFirmwareInformation(it: FirmwareInfo) {
              promise.resolve(
                Arguments.createMap().apply {
                  putString("model", it.model)
                  putString("version", it.version)
                }
              )
            }
          }
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
    }
  }

  @ReactMethod
  override fun verifyUpdate(
    id: Double,
    targetFirmwareInfo: ReadableMap,
    promise: Promise
  ) {
    promise.reject(
      CODE_ERROR,
      "Not implemented because constructor of FirmwareInfo is protected."
    )
    // coroutineScope.launch {
    //   runCatchingForInstance(id, promise) {
    //     it.verifyUpdate(
    //       targetFirmwareInfo.let {
    //         FirmwareInfo(
    //           it.getString("model"),
    //           it.getString("version"),
    //           it.getString("requestModel")
    //         )
    //       },
    //       object : FirmwareUpdateListener {
    //         override fun onReceiveFirmwareInformation(it: FirmwareInfo) {}
    //         override fun onDownloadFirmwareList(code: Int, list: Array<FirmwareInfo>) {}
    //         override fun onUpdateFirmware(code: Int, maxWaitTime: Int) {}
    //         override fun onFirmwareUpdateProgress(task: String, progress: Float) {}
    //         override fun onUpdateVerify(code: Int) {
    //           code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
    //             ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
    //             ?: promise.resolve(null)
    //         }
    //       }
    //     )
    //   }
    //     .onFailure {
    //       promise.reject(
    //         CODE_ERROR,
    //         if (it is Epos2Exception)
    //           it.getErrorStatus().toString()
    //         else
    //           it.message
    //       )
    //     }
    // }
  }

  @ReactMethod
  override fun updateFirmware(
    id: Double,
    targetFirmwareInfo: ReadableMap,
    promise: Promise
  ) {
    promise.reject(
      CODE_ERROR,
      "Not implemented because constructor of FirmwareInfo is protected."
    )
    // coroutineScope.launch {
    //   runCatchingForInstance(id, promise) {
    //     it.updateFirmware(
    //       targetFirmwareInfo.let {
    //         FirmwareInfo(
    //           it.getString("model"),
    //           it.getString("version"),
    //           it.getString("requestModel")
    //         )
    //       },
    //       object : FirmwareUpdateListener {
    //         override fun onReceiveFirmwareInformation(it: FirmwareInfo) {}
    //         override fun onDownloadFirmwareList(code: Int, list: Array<FirmwareInfo>) {}
    //         override fun onUpdateVerify(code: Int) {}
    //         override fun onFirmwareUpdateProgress(
    //           task: String,
    //           progress: Float
    //         ) {
    //           emitEvent(
    //             "updateProgress",
    //             Arguments.createMap().apply {
    //               putString("task", task)
    //               putDouble("progress", progress.toDouble())
    //             }
    //           )
    //         }
    //         override fun onUpdateFirmware(
    //           code: Int,
    //           maxWaitTime: Int
    //         ) {
    //           code.takeIf { it != Epos2CallbackCode.CODE_SUCCESS }
    //             ?.let { promise.reject(CODE_CALLBACK, it.toString()) }
    //             ?: promise.resolve(maxWaitTime)
    //         }
    //       },
    //       context
    //     )
    //   }
    //     .onFailure {
    //       promise.reject(
    //         CODE_ERROR,
    //         if (it is Epos2Exception)
    //           it.getErrorStatus().toString()
    //         else
    //           it.message
    //       )
    //     }
    // }
  }

  @ReactMethod
  override fun forceRecover(
    id: Double,
    timeout: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatchingForInstance(id, promise) {
        it.forceRecover(timeout.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.forcePulse(
          drawer.toInt(),
          pulseTime.toInt(),
          timeout.toInt()
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
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
      runCatchingForInstance(id, promise) {
        it.forceStopSound(timeout.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun forceCommand(
    id: Double,
    command: String,
    timeout: Double,
    promise: Promise
  ) {
    coroutineScope.launch {
      runCatching {
        Base64.decode(command, Base64.DEFAULT)
      }
        .onFailure { promise.reject(CODE_ERROR, it) }
        .onSuccess { bytes ->
          runCatchingForInstance(id, promise) {
            it.forceCommand(
              bytes,
              timeout.toInt()
            )
          }
          .onFailure {
            promise.reject(
              CODE_ERROR,
              if (it is Epos2Exception)
                it.getErrorStatus().toString()
              else
                it.message
            )
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
      runCatchingForInstance(id, promise) {
        it.forceReset(timeout.toInt())
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun discoveryStart(filter: ReadableMap, promise: Promise) {
    coroutineScope.launch {
      runCatching {
        Discovery.start(
          context,
          FilterOption().apply {
            filter.takeIf { it.hasKey("portType") }
              ?.let { it.getInt("portType") }
              ?.let { setPortType(it) }

            filter.takeIf { it.hasKey("broadcast") }
              ?.let { it.getString("broadcast") }
              ?.let { setBroadcast(it) }

            filter.takeIf { it.hasKey("deviceModel") }
              ?.let { it.getInt("deviceModel") }
              ?.let { setDeviceModel(it) }

            filter.takeIf { it.hasKey("epsonFilter") }
              ?.let { it.getInt("epsonFilter") }
              ?.let { setEpsonFilter(it) }

            filter.takeIf { it.hasKey("deviceType") }
              ?.let { it.getInt("deviceType") }
              ?.let { setDeviceType(it) }

            filter.takeIf { it.hasKey("bondedDevices") }
              ?.let { it.getBoolean("bondedDevices") }
              ?.let { if (it) Discovery.TRUE else Discovery.FALSE }
              ?.let { setBondedDevices(it) }

            filter.takeIf { it.hasKey("usbDeviceName") }
              ?.let { it.getBoolean("usbDeviceName") }
              ?.let { if (it) Discovery.TRUE else Discovery.FALSE }
              ?.let { setUsbDeviceName(it) }
          },
          object : DiscoveryListener {
            override fun onDiscovery(deviceInfo: DeviceInfo) {
              emitEvent(
                "deviceFound",
                Arguments.createMap().apply {
                  putInt("deviceType", deviceInfo.deviceType)
                  putString("deviceName", deviceInfo.deviceName)
                  putString("target", deviceInfo.target)
                  deviceInfo.ipAddress
                    .takeIf { it.isNotEmpty() }
                    ?.let { putString("ipAddress", it) }

                  deviceInfo.macAddress
                    .takeIf { it.isNotEmpty() }
                    ?.let { putString("macAddress", it) }

                  deviceInfo.bdAddress
                    .takeIf { it.isNotEmpty() }
                    ?.let { putString("bdAddress", it) }
                }
              )
            }
          }
        )
      }
        .onFailure {
          promise.reject(
            CODE_ERROR,
            if (it is Epos2Exception)
              it.getErrorStatus().toString()
            else
              it.message
          )
        }
        .onSuccess { promise.resolve(null) }
    }
  }

  @ReactMethod
  override fun discoveryStop(promise: Promise) {
    runCatching { Discovery.stop() }
      .onFailure {
        promise.reject(
          CODE_ERROR,
          if (it is Epos2Exception)
            it.getErrorStatus().toString()
          else
            it.message
        )
      }
      .onSuccess { promise.resolve(null) }
  }
}

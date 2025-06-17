import { type TurboModule, TurboModuleRegistry } from "react-native";
import type {
  PrinterFirmwareInformation,
  PrinterInformation,
  PrinterSettings,
  PrinterStatus,
} from "./PrinterConst";

export interface Spec extends TurboModule {
  addListener(eventType: string): void;

  removeListeners(count: number): void;

  connect(
    /** @type import("./PrinterConst").PrinterSeries */
    series: number,
    /** @type import("./PrinterConst").PrinterLocale */
    lang: number,
    target: string,
    timeout: number,
  ): Promise<number>;

  disconnect(id: number): Promise<void>;

  getStatus(id: number): Promise<PrinterStatus>;

  sendData(id: number, timeout: number): Promise<void>;

  beginTransaction(id: number): Promise<void>;

  endTransaction(id: number): Promise<void>;

  requestPrintJobStatus(id: number, printJobId: string): Promise<void>;

  clearCommandBuffer(id: number): Promise<void>;

  addTextAlign(
    id: number,
    /** @type import("./PrinterConst").PrinterAlign */
    align: number,
  ): Promise<void>;

  addLineSpace(id: number, linespc: number): Promise<void>;

  addTextRotate(id: number, rotate: number): Promise<void>;

  addText(id: number, text: string): Promise<void>;

  addTextLang(id: number, lang: number): Promise<void>;

  addTextFont(id: number, font: number): Promise<void>;

  addTextSmooth(id: number, smooth: number): Promise<void>;

  addTextSize(id: number, width: number, height: number): Promise<void>;

  addTextStyle(
    id: number,
    reverse: number,
    ul: number,
    em: number,
    color: number,
  ): Promise<void>;

  addHPosition(id: number, x: number): Promise<void>;

  addFeedUnit(id: number, unit: number): Promise<void>;

  addFeedLine(id: number, line: number): Promise<void>;

  addImage(
    id: number,
    data: string,
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
    mode: number,
    halftone: number,
    brightness: number,
    compress: number,
  ): Promise<void>;

  addLogo(id: number, key1: number, key2: number): Promise<void>;

  addBarcode(
    id: number,
    data: string,
    type: number,
    hri: number,
    font: number,
    width: number,
    height: number,
  ): Promise<void>;

  addSymbol(
    id: number,
    data: string,
    type: number,
    level: number,
    width: number,
    height: number,
    size: number,
  ): Promise<void>;

  addHLine(
    id: number,
    x1: number,
    x2: number,
    lineStyle: number,
  ): Promise<void>;

  addVLineBegin(id: number, x: number, lineStyle: number): Promise<number>;

  addVLineEnd(id: number, lineId: number): Promise<void>;

  addPageBegin(id: number): Promise<void>;

  addPageEnd(id: number): Promise<void>;

  addPageArea(
    id: number,
    x: number,
    y: number,
    width: number,
    height: number,
  ): Promise<void>;

  addPageDirection(id: number, direction: number): Promise<void>;

  addPagePosition(id: number, x: number, y: number): Promise<void>;

  addPageLine(
    id: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    lineStyle: number,
  ): Promise<void>;

  addPageRectangle(
    id: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    lineStyle: number,
  ): Promise<void>;

  addRotateBegin(id: number): Promise<void>;

  addRotateEnd(id: number): Promise<void>;

  addCut(id: number, type: number): Promise<void>;

  addPulse(id: number, drawer: number, time: number): Promise<void>;

  addSound(
    id: number,
    pattern: number,
    repeat: number,
    cycle: number,
  ): Promise<void>;

  addFeedPosition(id: number, position: number): Promise<void>;

  addLayout(
    id: number,
    type: number,
    width: number,
    height: number,
    marginTop: number,
    marginBottom: number,
    offsetCut: number,
    offsetLabel: number,
  ): Promise<void>;

  addCommand(id: number, command: string): Promise<void>;

  getMaintenanceCounter(
    id: number,
    timeout: number,
    type: number,
  ): Promise<number>;

  resetMaintenanceCounter(
    id: number,
    timeout: number,
    type: number,
  ): Promise<void>;

  getPrinterSetting(id: number, timeout: number, type: number): Promise<number>;

  setPrinterSetting(id: number, timeout: number, list: Object): Promise<void>;

  getPrinterSettingEx(id: number, timeout: number): Promise<PrinterSettings>;

  setPrinterSettingEx(
    id: number,
    timeout: number,
    json: string,
    administratorPassword: string,
  ): Promise<void>;

  verifyPassword(
    id: number,
    timeout: number,
    administratorPassword: string,
  ): Promise<number>;

  getPrinterInformation(
    id: number,
    timeout: number,
  ): Promise<PrinterInformation>;

  downloadFirmwareList(
    id: number,
    printerModel: string,
    option: string,
  ): Promise<object[]>;

  getPrinterFirmwareInfo(
    id: number,
    timeout: number,
  ): Promise<PrinterFirmwareInformation>;

  verifyUpdate(id: number, targetFirmwareInfo: Object): Promise<number>;

  updateFirmware(id: number, targetFirmwareInfo: Object): Promise<number>;

  forceRecover(id: number, timeout: number): Promise<void>;

  forcePulse(
    id: number,
    drawer: number,
    pulseTime: number,
    timeout: number,
  ): Promise<void>;

  forceStopSound(id: number, timeout: number): Promise<void>;

  forceCommand(id: number, data: string, timeout: number): Promise<void>;

  forceReset(id: number, timeout: number): Promise<void>;

  discoveryStart(filter: Object): Promise<void>;

  discoveryStop(): Promise<void>;
}

export default TurboModuleRegistry.getEnforcing<Spec>("EpsonEscposprinter");

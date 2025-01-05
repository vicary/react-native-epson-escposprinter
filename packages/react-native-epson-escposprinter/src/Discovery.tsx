import { NativeEventEmitter } from "react-native";
import { NativeInterface } from "./NativeInterface";
import { PrinterSeries } from "./PrinterConst";

export const enum DeviceType {
  TYPE_ALL = 0,
  TYPE_PRINTER = 1,
  TYPE_HYBRID_PRINTER = 2,
  TYPE_DISPLAY = 3,
  TYPE_KEYBOARD = 4,
  TYPE_SCANNER = 5,
  TYPE_SERIAL = 6,
  TYPE_CCHANGER = 7,
  TYPE_POS_KEYBOARD = 8,
  TYPE_CAT = 9,
  TYPE_MSR = 10,
  TYPE_OTHER_PERIPHERAL = 11,
  TYPE_GFE = 12,
}

export const enum PortType {
  PORTTYPE_ALL = 0,
  PORTTYPE_TCP = 1,
  PORTTYPE_BLUETOOTH = 2,
  PORTTYPE_USB = 3,
}

export const enum Model {
  MODEL_ALL = 0,
}

export const enum EpsonFilter {
  FILTER_NONE = 1,
  FILTER_NAME = 0,
}

export type FilterOptions = {
  deviceType?: DeviceType;
  portType?: PortType;
  boardcast?: string;
  deviceModel?: Model;
  epsonFilter?: EpsonFilter;
  bondedDevices?: boolean;
  usbDeviceName?: boolean;
};

export type DeviceInfo = {
  deviceType: DeviceType;
  deviceName: string;
  target: string;
  ipAddress?: string;
  macAddress?: string;
  bdAddress?: string;
};

let active = false;
const globalQueue = new Set<DeviceInfo>();
const events = new NativeEventEmitter(NativeInterface);

events.addListener(
  "deviceFound",
  (deviceInfo: DeviceInfo) => globalQueue.add(deviceInfo),
);

export const getPrinterSeriesFromDeviceName = (
  name: string,
): PrinterSeries | undefined => {
  switch (name) {
    case "TM-H6000IV":
    case "TM-H6000V":
    case "TM-H6000IV-DT":
      return PrinterSeries.TM_H6000;
    case "TM-L90":
      return PrinterSeries.TM_L90;
    case "TM-L90 Liner-Free Label Printer Model":
      return PrinterSeries.TM_L90LFC;
    case "TM-L100":
      return PrinterSeries.TM_L100;
    case "TM-m10":
      return PrinterSeries.TM_M10;
    case "TM-m30":
      return PrinterSeries.TM_M30;
    case "TM-m30II":
    case "TM-m30II-H":
    case "TM-m30II-NT":
    case "TM-m30II-S":
    case "TM-m30II-SL":
      return PrinterSeries.TM_M30II;
    case "TM-m30III":
    case "TM-m30III-H":
      return PrinterSeries.TM_M30III;
    case "TM-m50":
      return PrinterSeries.TM_M50;
    case "TM-m50II":
    case "TM-m50II-H":
      return PrinterSeries.TM_M50II;
    case "TM-M55":
      return PrinterSeries.TM_M55;
    case "TM-P20":
      return PrinterSeries.TM_P20;
    case "TM-P20II":
      return PrinterSeries.TM_P20II;
    case "TM-P60":
    case "TM-P60 (Receipt/Peeler)":
      return PrinterSeries.TM_P60;
    case "TM-P60II":
    case "TM-P60II (Receipt/Peeler)":
      return PrinterSeries.TM_P60II;
    case "TM-P80":
      return PrinterSeries.TM_P80;
    case "TM-P80II":
      return PrinterSeries.TM_P80II;
    case "TM-T20":
    case "TM-T20II":
    case "TM-T20II-i":
    case "TM-T20III":
    case "TM-T20IIIL":
    case "TM-T20IV-L":
    case "TM-T20X":
    case "TM-T20X-II":
      return PrinterSeries.TM_T20;
    case "TM-T60":
      return PrinterSeries.TM_T60;
    case "TM-T70":
    case "TM-T70-i":
    case "TM-T70II":
    case "TM-T70II-DT":
    case "TM-T70II-DT2":
      return PrinterSeries.TM_T70;
    case "TM-T81II":
    case "TM-T81III":
      return PrinterSeries.TM_T81;
    case "TM-T82":
    case "TM-T82II":
    case "TM-T82II-i":
    case "TM-T82III":
    case "TM-T82IIIL":
    case "TM-T82IV-L":
    case "TM-T82X":
    case "TM-T82X-II":
      return PrinterSeries.TM_T82;
    case "TM-T83II":
    case "TM-T83II-i":
      return PrinterSeries.TM_T83;
    case "TM-T83III":
    case "TM-T83IV":
      return PrinterSeries.TM_T83III;
    case "TM-T88IV":
    case "TM-T88V":
    case "TM-T88VI":
    case "TM-T88V-i":
    case "TM-T88VI-iHUB":
    case "TM-T88V-DT":
    case "TM-T88VI-DT2":
      return PrinterSeries.TM_T88;
    case "TM-T88VII":
      return PrinterSeries.TM_T88VII;
    case "TM-T90":
      return PrinterSeries.TM_T90;
    case "TM-T90KP":
      return PrinterSeries.TM_T90KP;
    case "TM-T100":
      return PrinterSeries.TM_T100;
    case "TM-U220":
    case "TM-U220-i":
      return PrinterSeries.TM_U220;
    case "TM-U220II":
    case "TM-U220IIB-i":
      return PrinterSeries.TM_U220II;
    case "TM-U330":
      return PrinterSeries.TM_U330;
    case "TS-100":
      return PrinterSeries.TS_100;
    case "EU-m30":
      return PrinterSeries.EU_M30;
    default:
      return undefined;
  }
};

export async function* discoverPrinters(filter: FilterOptions = {}) {
  const hasLock = !active;
  const localQueue: DeviceInfo[] = [];
  const subscription = events.addListener(
    "deviceFound",
    (deviceInfo: DeviceInfo) => localQueue.push(deviceInfo),
  );

  try {
    if (hasLock) {
      active = true;

      await NativeInterface.discoveryStart(filter);
    }

    yield* globalQueue;

    while (true) {
      const deviceInfo = localQueue.shift();

      if (deviceInfo !== undefined && !globalQueue.has(deviceInfo)) {
        yield deviceInfo;
      }

      await new Promise((r) => setTimeout(r, 300));
    }
  } finally {
    subscription.remove();

    if (hasLock) {
      await NativeInterface.discoveryStop();

      globalQueue.clear();

      active = false;
    }
  }
}

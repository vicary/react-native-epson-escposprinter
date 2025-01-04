import { NativeEventEmitter } from "react-native";
import { NativeInterface } from "./NativeInterface";

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

export async function* discoverPrinters(filter: FilterOptions) {
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

      await new Promise((r) => setTimeout(r, 100));
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

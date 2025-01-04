/* eslint-disable @typescript-eslint/no-duplicate-enum-values */

export const enum PrinterSeries {
  /** TM-H6000IV, TM-H6000V, TM-H6000IV-DT */
  TM_H6000 = 18,
  /** TM-L90 */
  TM_L90 = 17,
  /** TM-L90 Liner-Free Label Printer Model */
  TM_L90LFC = 26,
  /** TM-L100 */
  TM_L100 = 28,
  /** TM-m10 */
  TM_M10 = 0,
  /** TM-m30 */
  TM_M30 = 1,
  /** TM-m30II, TM-m30II-H, TM-m30II-NT, TM-m30II-S, TM-m30II-SL */
  TM_M30II = 22,
  /** TM-m30III, TM-m30III-H */
  TM_M30III = 32,
  /** TM-m50 */
  TM_M50 = 24,
  /** TM-m50II, TM-m50II-H */
  TM_M50II = 33,
  TM_M55 = 34,
  /** TM-P20 */
  TM_P20 = 2,
  /** TM-P20II */
  TM_P20II = 30,
  /** TM-P60 (Receipt/Peeler) */
  TM_P60 = 3,
  /** TM-P60II (Receipt/Peeler) */
  TM_P60II = 4,
  /** TM-P80 */
  TM_P80 = 5,
  /** TM-P80II */
  TM_P80II = 31,
  /** TM-T20, TM-T20II, TM-T20II-i, TM-T20III, TM-T20IIIL, TM-T20IV-L, TM-T20X, TM-T20X-II */
  TM_T20 = 6,
  /** TM-T60 */
  TM_T60 = 7,
  /** TM-T70, TM-T70-i, TM-T70II, TM-T70II-DT, TM-T70II-DT2 */
  TM_T70 = 8,
  /** TM-T81II, TM-T81III */
  TM_T81 = 9,
  /** TM-T82, TM-T82II, TM-T82II-i, TM-T82III, TM-T82IIIL, TM-T82IV-L, TM-T82X, TM-T82X-II */
  TM_T82 = 10,
  /** TM-T83II, TM-T83II-i */
  TM_T83 = 11,
  /** TM-T83III, TM-T83IV */
  TM_T83III = 19,
  /** TM-T88IV, TM-T88V, TM-T88VI, TM-T88V-i, TM-T88VI- iHUB, TM-T88V-DT, TM-T88VI-DT2 */
  TM_T88 = 12,
  /** TM-T88VII */
  TM_T88VII = 25,
  /** TM-T90 */
  TM_T90 = 13,
  TM_T90KP = 14,
  /** TM-T100 */
  TM_T100 = 20,
  /** TM-U220, TM-U220-i */
  TM_U220 = 15,
  /** TM-U220II, TM-U220IIB-i */
  TM_U220II = 35,
  /** TM-U330 */
  TM_U330 = 16,
  TS_100 = 23,
  /** EU-m30 */
  EU_M30 = 27,
}

export const enum PrinterLocale {
  MODEL_ANK = 0,
  MODEL_JAPANESE = 1,
  MODEL_CHINESE = 2,
  MODEL_TAIWAN = 3,
  MODEL_KOREAN = 4,
  MODEL_THAI = 5,
  MODEL_SOUTHASIA = 6,
}

export const enum PrinterPaperStatus {
  PAPER_OK = 0,
  PAPER_NEAR_END = 1,
  PAPER_EMPTY = 2,
}

export const enum PrinterDrawerStatus {
  DRAWER_HIGH = 0,
  DRAWER_LOW = 1,
}

export const enum PrinterErrorStatus {
  NO_ERR = 0,
  MECHANICAL_ERR = 1,
  AUTOCUTTER_ERR = 2,
  UNRECOVER_ERR = 3,
  AUTORECOVER_ERR = 4,
}

export const enum PrinterAutoRecoverErrorStatus {
  HEAD_OVERHEAT = 0,
  MOTOR_OVERHEAT = 1,
  BATTERY_OVERHEAT = 2,
  WRONG_PAPER = 3,
  COVER_OPEN = 4,
}

export const enum PrinterBatteryLevelStatus {
  BATTERY_LEVEL_0 = 0,
  BATTERY_LEVEL_1 = 1,
  BATTERY_LEVEL_2 = 2,
  BATTERY_LEVEL_3 = 3,
  BATTERY_LEVEL_4 = 4,
  BATTERY_LEVEL_5 = 5,
  BATTERY_LEVEL_6 = 6,
}

export const enum PrinterPaperTakenSensorStatus {
  REMOVAL_DETECT_PAPER = 0,
  REMOVAL_DETECT_PAPER_NONE = 1,
  REMOVAL_DETECT_UNKNOWN = 2,
}

export const enum PrinterUnrecoverErrorStatus {
  HIGH_VOLTAGE_ERR = 0,
  LOW_VOLTAGE_ERR = 1,
}

/**
 * Printer status information.
 *
 * Properly is omitted on Printer.UNKNOWN.
 */
export type PrinterStatus = {
  connection: boolean;
  online?: boolean;
  coverOpen?: boolean;
  paper?: PrinterPaperStatus;
  paperFeed?: boolean;
  panelSwitch?: boolean;
  drawer?: PrinterDrawerStatus;
  errorStatus?: PrinterErrorStatus;
  autoRecoverError?: PrinterAutoRecoverErrorStatus;
  buzzer?: boolean;
  adapter?: boolean;
  batteryLevel?: PrinterBatteryLevelStatus;
  removalWaiting?: boolean;
  paperTakenSensor?: PrinterPaperTakenSensorStatus;
  unrecoverError?: PrinterUnrecoverErrorStatus;
};

export type PrinterSettings = {
  FormatName: "TM-Form";
  Rev: 1;
  PrinterSpec: {
    Product: {
      SerialNo: string;
    };
    Spec: {
      Language: string;
      PaperWidth: 40 | 57.5 | 58 | 69.5 | 76 | 80;
      HeadDpi: string;
    };
  };
  Setting: {
    AutoCut: {
      CutAfterRepeat: "Invalid" | "Valid";
    };
    Buzzer: {
      Select: "Invalid" | "Valid";
    };
    Command: {
      AutoCR: "Invalid" | "Valid";
    };
    Interface: {
      USB: {
        NetworkTethering: "Disable" | "iOS" | "Android" | "Windows";
      };
      USB2LAN: {
        Active: "OFF" | "ON";
      };
    };
    Print: {
      Density:
        | "DIPSW"
        | "70%"
        | "75%"
        | "80%"
        | "85%"
        | "90%"
        | "95%"
        | "100%"
        | "105%"
        | "110%"
        | "115%"
        | "120%"
        | "125%"
        | "130%";
      Speed:
        | "Level1"
        | "Level2"
        | "Level3"
        | "Level4"
        | "Level5"
        | "Level6"
        | "Level7"
        | "Level8"
        | "Level9"
        | "Level10"
        | "Level11"
        | "Level12"
        | "Level13"
        | "Level14"
        | "Level15"
        | "Level16"
        | "Level17";
      ColumnEmulation:
        | "Standard"
        | "48/34"
        | "48¥¥/34"
        | "48/36"
        | "48¥¥/36"
        | "46/32"
        | "46¥¥/32"
        | "42/42"
        | "42/32"
        | "42¥¥/32"
        | "48"
        | "42";
      RollPaperWidth: "80mm" | "76mm" | "69.5mm" | "58mm" | "57.5mm";
      NearEndSetting: "Disable" | "Enable";
      PaperWidthWithGuide: "40mm" | "58mm";
    };
    WifiCfg: {
      Ssid: string;
      EncType_Select: "WPA/WPA2-PSK" | "WPA3-SAE(AES)";
      WpaPsk: {
        Key: string;
      };
      WlanChip: {
        ChipMode_Select: "Built-in" | "Option unit";
      };
      TcpIpCfg: {
        IpV4: {
          Acquiring_Select: "Auto" | "Manual";
          Ip: string;
          Sm: string;
          Gw: string;
          IpAddlessPrint_Select: "Disable" | "Enable";
        };
      };
    };
  };
  Maintenance: {
    Counter: {
      RollPaper_FeedLines: string;
      RollPaper_CutterDrives: string;
    };
  };
};

export type PrinterInformation = {
  PrinterSpec: {
    Product: {
      SerialNo: string;
    };
  };
  Maintenance: {
    ThermalHead: {
      NumberOfWarningDot: string;
      PositionOfWarningDot: string;
      NumberOfBrokenDot: string;
      PositionOfBrokenDot: string;
    };
  };
};

export type PrinterFirmwareInfomation = {
  model: string;
  version: string;
};

export const enum PrinterAlign {
  ALIGN_LEFT = 0,
  ALIGN_CENTER = 1,
  ALIGN_RIGHT = 2,
}

export const enum PrinterLanguage {
  LANG_EN = 0,
  LANG_JA = 1,
  LANG_ZH_CN = 2,
  LANG_ZH_TW = 3,
  LANG_KO = 4,
  LANG_TH = 5,
  LANG_VI = 6,
  LANG_MULTI = 7,
}

export const enum PrinterFont {
  FONT_A = 0,
  FONT_B = 1,
  FONT_C = 2,
  FONT_D = 3,
  FONT_E = 4,
}

export const enum PrinterColor {
  COLOR_NONE = 0,
  COLOR_1 = 1,
  COLOR_2 = 2,
  COLOR_3 = 3,
  COLOR_4 = 4,
}

export const enum PrinterColorMode {
  MODE_MONO = 0,
  MODE_GRAY16 = 1,
  MODE_MONO_HIGH_DENSITY = 2,
}

export const enum PrinterHalftone {
  HALFTONE_DITHER = 0,
  HALFTONE_ERROR_DIFFUSION = 1,
  HALFTONE_THRESHOLD = 2,
}

export const enum PrinterCompress {
  COMPRESS_NONE = 0,
  COMPRESS_DEFLATE = 1,
  COMPRESS_AUTO = 2,
}

export const enum PrinterBarcodeType {
  BARCODE_UPC_A = 0,
  BARCODE_UPC_E = 1,
  BARCODE_EAN13 = 2,
  BARCODE_JAN13 = 3,
  BARCODE_EAN8 = 4,
  BARCODE_JAN8 = 5,
  BARCODE_CODE39 = 6,
  BARCODE_ITF = 7,
  BARCODE_CODABAR = 8,
  BARCODE_CODE93 = 9,
  BARCODE_CODE128 = 10,
  BARCODE_GS1_128 = 11,
  BARCODE_GS1_DATABAR_OMNIDIRECTIONAL = 12,
  BARCODE_GS1_DATABAR_TRUNCATED = 13,
  BARCODE_GS1_DATABAR_LIMITED = 14,
  BARCODE_GS1_DATABAR_EXPANDED = 15,
  BARCODE_CODE128_AUTO = 16,
}

export const enum PrinterBarcodeHri {
  HRI_NONE = 0,
  HRI_ABOVE = 1,
  HRI_BELOW = 2,
  HRI_BOTH = 3,
}

export const enum PrinterSymbolTypePdf {
  SYMBOL_PDF417_STANDARD = 0,
  SYMBOL_PDF417_TRUNCATED = 1,
}

export const enum PrinterSymbolLevelPdf {
  LEVEL_0 = 0,
  LEVEL_1 = 1,
  LEVEL_2 = 2,
  LEVEL_3 = 3,
  LEVEL_4 = 4,
  LEVEL_5 = 5,
  LEVEL_6 = 6,
  LEVEL_7 = 7,
  LEVEL_8 = 8,
}

export const enum PrinterSymbolTypeQrcode {
  SYMBOL_QRCODE_MODEL_1 = 2,
  SYMBOL_QRCODE_MODEL_2 = 3,
  SYMBOL_QRCODE_MICRO = 4,
}

export const enum PrinterSymbolLevelQrcode {
  LEVEL_L = 9,
  LEVEL_M = 10,
  LEVEL_Q = 11,
  LEVEL_H = 12,
}

export const enum PrinterSymbolTypeAztecCode {
  SYMBOL_AZTECCODE_STANDARD = 0,
  SYMBOL_AZTECCODE_RUNE = 1,
}

export const enum PrinterSymbolTypeOthers {
  SYMBOL_MAXICODE_MODE_2 = 5,
  SYMBOL_MAXICODE_MODE_3 = 6,
  SYMBOL_MAXICODE_MODE_4 = 7,
  SYMBOL_MAXICODE_MODE_5 = 8,
  SYMBOL_MAXICODE_MODE_6 = 9,
  SYMBOL_GS1_DATABAR_STACKED = 10,
  SYMBOL_GS1_DATABAR_STACKED_OMNIDIRECTIONAL = 11,
  SYMBOL_GS1_DATABAR_EXPANDED_STACKED = 12,
  SYMBOL_DATAMATRIX_SQUARE = 15,
  SYMBOL_DATAMATRIX_RECTANGLE_8 = 16,
  SYMBOL_DATAMATRIX_RECTANGLE_12 = 17,
  SYMBOL_DATAMATRIX_RECTANGLE_16 = 18,
}

export const enum PrinterLineStyle {
  LINE_THIN = 0,
  LINE_MEDIUM = 1,
  LINE_THICK = 2,
  LINE_THIN_DOUBLE = 3,
  LINE_MEDIUM_DOUBLE = 4,
  LINE_THICK_DOUBLE = 5,
}

export const enum PrinterPageDirection {
  DIRECTION_LEFT_TO_RIGHT = 0,
  DIRECTION_BOTTOM_TO_TOP = 1,
  DIRECTION_RIGHT_TO_LEFT = 2,
  DIRECTION_TOP_TO_BOTTOM = 3,
}

export const enum PrinterCutType {
  CUT_NO_FEED = 0,
  CUT_FEED = 1,
  CUT_RESERVE = 2,
  FULL_CUT_FEED = 3,
  FULL_CUT_NO_FEED = 4,
  FULL_CUT_RESERVE = 5,
}

export const enum PrinterPulseDrawer {
  DRAWER_2PIN = 0,
  DRAWER_5PIN = 1,
}

export const enum PrinterPulseTime {
  PULSE_100 = 0,
  PULSE_200 = 1,
  PULSE_300 = 2,
  PULSE_400 = 3,
  PULSE_500 = 4,
}

export const enum PrinterSoundPattern {
  PATTERN_NONE = 0,
  PATTERN_A = 1,
  PATTERN_B = 2,
  PATTERN_C = 3,
  PATTERN_D = 4,
  PATTERN_E = 5,
  PATTERN_ERROR = 6,
  PATTERN_PAPER_EMPTY = 7,
  PATTERN_1 = 8,
  PATTERN_2 = 9,
  PATTERN_3 = 10,
  PATTERN_4 = 11,
  PATTERN_5 = 12,
  PATTERN_6 = 13,
  PATTERN_7 = 14,
  PATTERN_8 = 15,
  PATTERN_9 = 16,
  PATTERN_10 = 17,
}

export const enum PrinterFeedPosition {
  FEED_PEELING = 0,
  FEED_CUTTING = 1,
  FEED_CURRENT_TOF = 2,
  FEED_NEXT_TOF = 3,
}

export const enum PrinterLayoutType {
  LAYOUT_RECEIPT = 0,
  LAYOUT_LABEL = 1,
  LAYOUT_LABEL_BM = 2,
  LAYOUT_RECEIPT_BM = 3,
}

export const enum PrinterMaintainenceCounterType {
  MAINTENANCE_COUNTER_PAPERFEED = 0,
  MAINTENANCE_COUNTER_AUTOCUTTER = 1,
  MAINTENANCE_COUNTER_OTHER = 2,
}

export const enum PrinterSettingType {
  SETTING_PAPERWIDTH = 0,
  SETTING_PRINTDENSITY = 1,
  SETTING_PRINTSPEED = 2,
  SETTING_OTHER = 3,
}

export const enum PrinterSettingValue {
  SETTING_PAPERWIDTH_NOT_SETTING_TARGET = 100000,
  SETTING_PAPERWIDTH_58_0 = 2,
  SETTING_PAPERWIDTH_60_0 = 3,
  SETTING_PAPERWIDTH_70_0 = 4,
  SETTING_PAPERWIDTH_76_0 = 5,
  SETTING_PAPERWIDTH_80_0 = 6,
  SETTING_PRINTDENSITY_NOT_SETTING_TARGET = 100000,
  SETTING_PRINTDENSITY_DIP = 100,
  SETTING_PRINTDENSITY_70 = 65530,
  SETTING_PRINTDENSITY_75 = 65531,
  SETTING_PRINTDENSITY_80 = 65532,
  SETTING_PRINTDENSITY_85 = 65533,
  SETTING_PRINTDENSITY_90 = 65534,
  SETTING_PRINTDENSITY_95 = 65535,
  SETTING_PRINTDENSITY_100 = 0,
  SETTING_PRINTDENSITY_105 = 1,
  SETTING_PRINTDENSITY_110 = 2,
  SETTING_PRINTDENSITY_115 = 3,
  SETTING_PRINTDENSITY_120 = 4,
  SETTING_PRINTDENSITY_125 = 5,
  SETTING_PRINTDENSITY_130 = 6,
  SETTING_PRINTSPEED_NOT_SETTING_TARGET = 100000,
  SETTING_PRINTSPEED_1 = 1,
  SETTING_PRINTSPEED_2 = 2,
  SETTING_PRINTSPEED_3 = 3,
  SETTING_PRINTSPEED_4 = 4,
  SETTING_PRINTSPEED_5 = 5,
  SETTING_PRINTSPEED_6 = 6,
  SETTING_PRINTSPEED_7 = 7,
  SETTING_PRINTSPEED_8 = 8,
  SETTING_PRINTSPEED_9 = 9,
  SETTING_PRINTSPEED_10 = 10,
  SETTING_PRINTSPEED_11 = 11,
  SETTING_PRINTSPEED_12 = 12,
  SETTING_PRINTSPEED_13 = 13,
  SETTING_PRINTSPEED_14 = 14,
  SETTING_PRINTSPEED_15 = 15,
  SETTING_PRINTSPEED_16 = 16,
  SETTING_PRINTSPEED_17 = 17,
}

/**
 * - To get the "EVENT_REMOVAL_DETECT" related status, you need to enable the
 * "Paper Taken Sensor Status" setting using Epson TM Utility
 */
export const enum PrinterStatusChangeEvent {
  EVENT_ONLINE = 0,
  EVENT_OFFLINE = 1,
  EVENT_POWER_OFF = 2,
  EVENT_COVER_CLOSE = 3,
  EVENT_COVER_OPEN = 4,
  EVENT_PAPER_OK = 5,
  EVENT_PAPER_NEAR_END = 6,
  EVENT_PAPER_EMPTY = 7,
  EVENT_DRAWER_HIGH = 8,
  EVENT_DRAWER_LOW = 9,
  EVENT_BATTERY_ENOUGH = 10,
  EVENT_BATTERY_EMPTY = 11,
  EVENT_REMOVAL_WAIT_PAPER = 16,
  EVENT_REMOVAL_WAIT_NONE = 17,
  EVENT_AUTO_RECOVER_ERROR = 20,
  EVENT_AUTO_RECOVER_OK = 21,
  EVENT_UNRECOVERABLE_ERROR = 22,
  EVENT_REMOVAL_DETECT_PAPER = 23,
  EVENT_REMOVAL_DETECT_PAPER_NONE = 24,
  EVENT_REMOVAL_DETECT_UNKNOWN = 25,
}

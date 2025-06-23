#import <React/RCTBridgeModule.h>
#include <sys/wait.h>

/* Argument types cheatsheet
 * | Objective C                                   | JavaScript         |
 * |-----------------------------------------------|--------------------|
 * | NSString                                      | string, ?string    |
 * | BOOL                                          | boolean            |
 * | NSNumber                                      | ?boolean           |
 * | double                                        | number             |
 * | NSNumber                                      | ?number            |
 * | NSArray                                       | Array, ?Array      |
 * | NSDictionary                                  | Object, ?Object    |
 * | RCTResponseSenderBlock                        | Function (success) |
 * | RCTResponseSenderBlock, RCTResponseErrorBlock | Function (failure) |
 * | RCTPromiseResolveBlock, RCTPromiseRejectBlock | Promise            |
 */

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNEpsonEscposprinterSpec.h"
@interface RCT_EXTERN_MODULE(EpsonEscposprinter, NSObject<NativeEpsonEscposprinterSpec>)
#else
@interface RCT_EXTERN_MODULE(EpsonEscposprinter, NSObject<RCTBridgeModule>)
#endif

+ (BOOL)requiresMainQueueSetup { return NO; }

RCT_EXTERN_METHOD(connect
                  :         (double)                 series
                  withLang: (double)                 lang
                  toTarget: (NSString *)             target
                  waitFor:  (double)                 timeout
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(disconnect
                  :         (double)                 printerId
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(getStatus
                  :         (double)                 printerId
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(sendData
                  :         (double)                 printerId
                  waitFor:  (double)                 timeout
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(beginTransaction
                  :         (double)                 printerId
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(endTransaction
                  :         (double)                 printerId
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(requestPrintJobStatus
                  :         (double)                 printerId
                  withJobId: (NSString *)            jobId
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(clearCommandBuffer
                  :         (double)                 printerId
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addTextAlign
                  :         (double)                 printerId
                  withAlign: (double) align
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addLineSpace
                  :         (double)                 printerId
                  withLineSpace: (double)            lineSpace
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addTextRotate
                  :         (double)                 printerId
                  withRotate: (double)               rotate
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addText
                  :         (double)                 printerId
                  withText: (NSString *)             text
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addTextLang
                  :         (double)                 printerId
                  withLang: (double)                 lang
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addTextFont
                  :         (double)                 printerId
                  withFont: (double)                 font
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addTextSmooth
                  :         (double)                 printerId
                  withSmooth: (double)               smooth
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addTextSize
                  :         (double)                 printerId
                  withWidth: (double)                width
                  withHeight: (double)               height
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addTextStyle
                  :         (double)                 printerId
                  withReverse: (double)              reverse
                  withUnderline: (double)            ul
                  withEmphasis: (double)             em
                  withColor: (double)                color
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addHPosition
                  :         (double)                 printerId
                  withPosition: (double) x
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addFeedUnit
                  :         (double)                 printerId
                  withUnit: (double)                 unit
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addFeedLine
                  :         (double)                 printerId
                  withLine: (double)                 line
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addImage
                  :         (double)                 printerId
                  withData: (NSString *)             data
                  fromLeft: (double)                 x
                  fromTop:  (double)                 y
                  withWidth: (double)                width
                  withHeight: (double)               height
                  withColor: (double)                color
                  withMode: (double)                 mode
                  withHalftone: (double)             halftone
                  withBrightness: (double)           brightness
                  withCompress: (double)             compress
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addLogo
                  :         (double)                 printerId
                  withKey1: (double)                 key1
                  withKey2: (double)                 key2
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addBarcode
                  :         (double)                 printerId
                  withData: (NSString *)             data
                  withType: (double)                 type
                  withHri:  (double)                 hri
                  withFont: (double)                 font
                  withWidth: (double) width
                  withHeight: (double) height
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addSymbol
                  :         (double)                 printerId
                  withData: (NSString *)             data
                  withType: (double)                 type
                  withLevel: (double)                level
                  withWidth: (double)                width
                  withHeight: (double)               height
                  withSize: (double)                 size
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addHLine
                  :         (double)                 printerId
                  from: (double)                     x1
                  to: (double)                       x2
                  withStyle: (double)                lineStyle
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addVLineBegin
                  :         (double)                 printerId
                  from:     (double)                 x
                  withStyle: (double)                lineStyle
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addVLineEnd
                  :         (double)                 printerId
                  withLineId: (double)               lineId
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addPageBegin
                  :         (double)                 printerId
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addPageEnd
                  :         (double)                 printerId
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addPageArea
                  :         (double)                 printerId
                  fromLeft: (double)                 x
                  fromTop: (double)                  y
                  withWidth: (double)                width
                  withHeight: (double)               height
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addPageDirection
                  :         (double)                 printerId
                  withDirection: (double)            direction
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addPagePosition
                  :         (double)                 printerId
                  fromLeft: (double)                 x
                  fromTop:  (double)                 y
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addPageLine
                  :         (double)                 printerId
                  left:     (double)                 x1
                  top:      (double)                 y1
                  right:    (double)                 x2
                  bottom:   (double)                 y2
                  withStyle: (double)                lineStyle
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addPageRectangle
                  :         (double)                 printerId
                  left:     (double)                 x1
                  top:      (double)                 y1
                  right:    (double)                 x2
                  bottom:   (double)                 y2
                  withStyle: (double)                lineStyle
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addRotateBegin
                  :         (double)                 printerId
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addRotateEnd
                  :         (double)                 printerId
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addCut
                  :         (double)                 printerId
                  withType: (double)                 type
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addPulse
                  :         (double)                 printerId
                  withDrawer: (double)               drawer
                  withTime: (double)                 time
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addSound
                  :         (double)                 printerId
                  withPattern: (double)              pattern
                  withRepeat: (double)               count
                  withCycle: (double)                cycle
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addFeedPosition
                  :         (double)                 printerId
                  to:       (double)                 position
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addLayout
                  :         (double)                 printerId
                  withType: (double)                 type
                  withWidth: (double)                width
                  withHeight: (double)               height
                  withMarginTop: (double)            marginTop
                  withMarginBottom: (double)         marginBottom
                  withOffsetCut: (double)            offsetCut
                  withOffsetLabel: (double)          offsetLabel
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(addCommand
                  :         (double)                 printerId
                  withData: (NSString *)             data
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(getMaintenanceCounter
                  :         (double)                 printerId
                  waitFor:  (double)                 timeout
                  withType: (double)                 type
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(resetMaintenanceCounter
                  :         (double)                 printerId
                  waitFor:  (double)                 timeout
                  withType: (double)                 type
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(getPrinterSetting
                  :         (double)                 printerId
                  waitFor:  (double)                 timeout
                  withType: (double)                 type
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(setPrinterSetting
                  :         (double)                 printerId
                  waitFor:  (double)                 timeout
                  withSettings: (NSDictionary *) settingList
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(getPrinterSettingEx
                  :         (double)                 printerId
                  waitFor:  (double)                 timeout
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(setPrinterSettingEx
                  :         (double)                 printerId
                  waitFor:  (double)                 timeout
                  withSettings: (NSString *)         jsonString
                  withPassword: (NSString *)         administratorPassword
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(verifyPassword
                  :         (double)                 printerId
                  waitFor:  (double)                 timeout
                  withPassword: (NSString *)         administratorPassword
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(getPrinterInformation
                  :         (double)                 printerId
                  waitFor:  (double)                 timeout
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(downloadFirmwareList
                  :         (double)                 printerId
                  forModel: (NSString *)             printerModel
                  withOptions: (NSString *)          option
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(getPrinterFirmwareInfo
                  :         (double)                 printerId
                  waitFor:  (double)                 timeout
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(verifyUpdate
                  :         (double)                 printerId
                  against:  (NSDictionary *)         firmware
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(updateFirmware
                  :         (double)                 printerId
                  to:       (NSDictionary *)         firmware
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(forceRecover
                  :         (double)                 printerId
                  waitFor:  (double)                 timeout
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(forcePulse
                  :         (double)                 printerId
                  withDrawer: (double)               drawer
                  withPulseTime: (double)            time
                  waitFor:  (double)                 timeout
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(forceStopSound
                  :         (double)                 printerId
                  waitFor:  (double)                 timeout
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(forceCommand
                  :         (double)                 printerId
                  withData: (NSString *)             data
                  waitFor:  (double)                 timeout
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(forceReset
                  :         (double)                 printerId
                  waitFor:  (double)                 timeout
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(discoveryStart
                  :         (NSDictionary *)         filter
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(discoveryStop
                  :         (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(setLogSettings
                  :         (double)                 period
                  to:       (double)                 output
                  ip:       (NSString *)             ipAddress
                  withPort: (double)                 port
                  maxSize:  (double)                 size
                  forLevel: (double)                 level
                  resolver: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

RCT_EXTERN_METHOD(getSdkVersion
                  :         (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock)  reject)

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
    return std::make_shared<facebook::react::NativeEpsonEscposprinterSpecJSI>(params);
}
#endif

@end

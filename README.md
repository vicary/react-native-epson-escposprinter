# react-native-epson-escposprinter

A React Native wrapper of the
[Epson ePOS SDK](https://support.epson.net/setupnavi/?PINF=swlist&MKN=TM-T82),
supporting the
[New Architecture](https://reactnative.dev/docs/the-new-architecture/landing-page)
and classic builds.

The current version embeds these SDKs:

1. [Epson ePOS SDK for Android Version 2.29.0a](https://download3.ebz.epson.net/dsc/f/03/00/16/08/02/21f0a82197a53e72a8deb0253146478c7a19babb/ePOS_SDK_Android_v2.29.0a.zip)
1. [Epson ePOS SDK for iOS Version 2.29.1a](https://download3.ebz.epson.net/dsc/f/03/00/16/08/00/5093ed8b38118fc06ba68bae76770a6cb3cc56e3/ePOS_SDK_iOS_v2.29.1a.zip)

## Usage

Most of the methods are a simple wrapper of the native SDK. For a complete list
of methods and their details, you may refer to the API reference file found in
the Epson SDK archive.

```tsx
import {
  connect,
  discoverPrinters,
  getPrinterSeriesFromDeviceName,
  PrinterLocale,
} from "react-native-epson-escposprinter";
import { ok } from "assert";

for await (const info of discoverPrinters()) {
  const series = getPrinterSeriesFromDeviceName(info.deviceName);
  ok(series, `Unknown device ${info.deviceName}`);

  const printer = await connect(series, PrinterLocale.MODEL_ANK, info.target);

  await printer.transaction(async () => {
    await printer.addText("ABC");
    await printer.sendData();
    await printer.clearCommandBuffer();
  });

  await printer.disconnect();
}
```

## Building the example app

1. `yarn install`
1. `cd examples/testprint-app`
1. Run `yarn arch:new` to initialize New Architecture, otherwise run
   `yarn arch:old`.
1. For Android targets, run `yarn android`
1. For iOS targets, expo has no obvious way to add frameworks in the generated
   XCode project, you have to add them manually each time.
   1. Open `ios/TestPrint.xcodeproj` using XCode
   1. Select `TestPrint` in the `Targets` section
   1. Click the `+` sign in `Frameworks, Libraries and Embedded Content`
   1. Add `ExternalAccessory.framework` and `libxml2.2.tbd`
   1. Run `yarn ios`

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the
repository and the development workflow.

If you use this library at work, consider
[sponsoring](https://github.com/sponsors/vicary) for a first-class technical
support.

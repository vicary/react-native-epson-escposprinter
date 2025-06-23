# react-native-epson-escposprinter

A React Native wrapper of the
[Epson ePOS SDK](https://support.epson.net/setupnavi/?PINF=swlist&MKN=TM-T82),
supporting the
[New Architecture](https://reactnative.dev/docs/the-new-architecture/landing-page)
and classic builds.

The current version embeds these SDKs:

1. [Epson ePOS SDK for Android Version 2.32.0](https://download3.ebz.epson.net/dsc/f/03/00/17/07/34/7de19987ac4424b34b1ee708f254d7b825526beb/ePOS_SDK_Android_v2.32.0.zip)
1. [Epson ePOS SDK for iOS Version 2.32.0](https://download3.ebz.epson.net/dsc/f/03/00/17/07/36/4f68b055a1006360f78c585f3c22089beca7a3b1/ePOS_SDK_iOS_v2.32.0.zip)

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

### Enable SDK Logs

```tsx
import { Log, LogPeriod } from "react-native-epson-escposprinter";

// Store SDK logs locally, you must include relevant file system capabilities.
await Log.enableLocal(LogPeriod.PERIOD_PERMANENT);

// Send SDK logs to a network endpoint, you must include network capabilities.
await Log.enableNetwork("1.2.3.4", 5678);

// Stop recording SDK logs
await Log.disable();
```

## Building the example app

1. `yarn install`
1. `cd examples/testprint-app`
1. Prebuild in New Architecture by running `yarn arch:new`, or run
   `yarn arch:old` to test in legacy environments.
1. Run `yarn android` to test in Android
1. Run `yarn ios` to test in iOS

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the
repository and the development workflow.

If you use this library at work, consider
[sponsoring](https://github.com/sponsors/vicary) for a first-class technical
support.

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
  ESCPOSConst,
  searchEpsonPrinters,
} from "react-native-epson-escposprinter";

const main = async () => {
  // TODO:
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the
repository and the development workflow.

If you use this library at work, consider
[sponsoring](https://github.com/sponsors/vicary) for a first-class technical
support.

## TODO

1. [x] Rename citizen to epson
   1. [x] Android
   2. [x] iOS
2. [ ] Implement SDK methods
   1. [ ] TypeScript
   2. [ ] Android
   3. [ ] iOS
      1. [ ] XCode Project reconfiguration, included libraries... etc.

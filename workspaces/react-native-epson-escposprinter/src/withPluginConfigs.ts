import {
  type ConfigPlugin,
  createRunOncePlugin,
  withXcodeProject,
} from "@expo/config-plugins";

// @ts-expect-error Output directory is lib/commonjs/ instead of src/
import { name, version } from "../../package.json";

const withPluginConfigs: ConfigPlugin = (config) => {
  config = withXcodeProject(config, (xCodeConfig) => {
    const project = xCodeConfig.modResults;
    const target = project.getFirstTarget().uuid;

    // XCode frameworks required by the Epson ePOS SDK
    project.addFramework("CoreBluetooth.framework", { target });
    project.addFramework("ExternalAccessory.framework", { target });
    project.addFramework("libxml2.2.tbd", { target });

    return xCodeConfig;
  });

  return config;
};

export default createRunOncePlugin(withPluginConfigs, name, version);

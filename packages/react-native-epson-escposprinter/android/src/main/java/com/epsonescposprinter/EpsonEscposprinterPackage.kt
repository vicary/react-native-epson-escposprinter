package com.epsonescposprinter

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.NativeModule
import com.facebook.react.module.model.ReactModuleInfoProvider
import com.facebook.react.module.model.ReactModuleInfo
import java.util.HashMap

class EpsonEscposprinterPackage : TurboReactPackage() {
  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
    if (name == EpsonEscposprinterModule.NAME) {
      EpsonEscposprinterModule(reactContext)
    } else {
      null
    }

  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
    mapOf(
      EpsonEscposprinterModule.NAME to ReactModuleInfo(
        EpsonEscposprinterModule.NAME,
        EpsonEscposprinterModule.NAME,
        false,  // canOverrideExistingModule
        false,  // needsEagerInit
        // true,  // hasConstants
        false,  // isCxxModule
        BuildConfig.IS_NEW_ARCHITECTURE_ENABLED  // isTurboModule
      )
    )
  }
}

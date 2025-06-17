package com.epsonescposprinter

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.NativeModule
import com.facebook.react.module.model.ReactModuleInfoProvider
import com.facebook.react.module.model.ReactModuleInfo
import java.util.HashMap

class EpsonEscposprinterPackage : BaseReactPackage() {
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
        true,  // hasConstants - deprecated signature required for RN 0.67
        false,  // isCxxModule
        BuildConfig.IS_NEW_ARCHITECTURE_ENABLED  // isTurboModule
      )
    )
  }
}

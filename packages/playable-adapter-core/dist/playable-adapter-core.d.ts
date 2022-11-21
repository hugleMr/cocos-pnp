type TWebOrientations = 'portrait' | 'landscape' | 'auto'

type TPlatform =
  | 'web-desktop'
  | 'web-mobile'
  | 'wechatgame'
  | 'oppo-mini-game'
  | 'vivo-mini-game'
  | 'huawei-quick-game'
  | 'alipay-mini-game'
  | 'mac'
  | 'ios'
  | 'linux'
  // | 'ios-app-clip'
  | 'android'
  | 'ohos'
  | 'open-harmonyos'
  | 'windows'
  | 'xiaomi-quick-game'
  | 'baidu-mini-game'
  | 'bytedance-mini-game'
  | 'cocos-play'
  | 'huawei-agc'
  | 'link-sure'
  | 'qtt'
  | 'cocos-runtime'
  | 'xr-meta'
  | 'xr-huaweivr'
  | 'xr-pico'
  | 'xr-rokid'
  | 'xr-monado'
  | 'ar-android'
  | 'ar-ios';

type TChannel =
  | 'AppLovin'
  | 'Facebook'
  | 'Google'
  | 'IronSource'
  | 'Liftoff'
  | 'Mintegral'
  | 'Moloco'
  | 'Pangle'
  | 'Rubeex'
  | 'Tiktok'
  | 'Unity'

type TChannelRC = {
  head: string
  body: string
  sdkScript: string
}

type TAdapterRC = {
  buildPlatform: TPlatform
  skipBuild: boolean
  orientation: TWebOrientations
  exportChannels: TChannel[]
  injectOptions: {
    [key in TChannel]: TChannelRC
  }
  tinify?: boolean
  tinifyApiKey?: string
}

declare const mountProjectGlobalVars: (options: {
    projectRootPath: string;
    projectBuildPath?: string;
}) => void;
declare const mountBuildGlobalVars: (options: {
    platform: TPlatform;
    adapterBuildConfig?: TAdapterRC | null;
}) => void;
declare const unmountAllGlobalVars: () => void;

declare type TOptions = {
    orientation: TWebOrientations;
};
declare const exec2xAdapter: (options: TOptions) => Promise<void>;
declare const exec3xAdapter: () => Promise<void>;

export { TPlatform, TWebOrientations, exec2xAdapter, exec3xAdapter, mountBuildGlobalVars, mountProjectGlobalVars, unmountAllGlobalVars };
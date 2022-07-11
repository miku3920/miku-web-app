declare namespace telegram {
  interface WebAppChat {
    id: number,
    type: string,
    title: string,
    username: string | undefined,
    photo_url: string | undefined,
  }

  interface WebAppUser {
    id: number,
    is_bot: boolean | undefined,
    first_name: string,
    last_name: string | undefined,
    username: string | undefined,
    language_code: string | undefined,
    photo_url: string | undefined,
  }

  interface WebAppInitData {
    query_id: string | undefined,
    user: WebAppUser | undefined,
    receiver: WebAppUser | undefined,
    chat: WebAppChat | undefined,
    start_param: string | undefined,
    can_send_after: number | undefined,
    auth_date: number,
    hash: string,
  }

  interface HapticFeedback {
    impactOccurred: (style: string) => object,
    notificationOccurred: (type: string) => object,
    selectionChanged: () => object,
  }

  interface MainButton {
    text: string,
    color: string,
    textColor: string,
    isVisible: boolean,
    isActive: boolean,
    isProgressVisible: boolean,
    setText: (text: string) => MainButton,
    onClick: (callback: object) => MainButton,
    offClick: (callback: object) => MainButton,
    show: () => MainButton,
    hide: () => MainButton,
    enable: () => MainButton,
    disable: () => MainButton,
    showProgress: (leaveActive?: boolean) => MainButton,
    hideProgress: () => MainButton,
    setParams: (params: object) => MainButton,
  }

  interface BackButton {
    isVisible: boolean,
    onClick: (callback: object) => void,
    offClick: (callback: object) => void,
    show: () => void,
    hide: () => void,
  }

  interface ThemeParams {
    bg_color: string | undefined,
    text_color: string | undefined,
    hint_color: string | undefined,
    link_color: string | undefined,
    button_color: string | undefined,
    button_text_color: string | undefined,
    secondary_bg_color: string | undefined,
  }

  interface WebView {
    initParams: object,
    isIframe: boolean,
    onEvent: (eventType: string, callback: object) => void,
    offEvent: (eventType: string, callback: object) => void,
    postEvent: (eventType: string, callback?: object | false, eventData?: object) => void,
    receiveEvent: (eventType: string, eventData: object) => void,
    callEventCallbacks: (eventType: string, func: object) => void,
  }

  interface Utils {
    urlSafeDecode: (urlencoded: string) => string,
    urlParseQueryString: (queryString: string) => object,
    urlParseHashParams: (locationHash: string) => object,
    urlAppendHashParams: (url: string, addHash: string) => string,
    sessionStorageSet: (key: string, value: unknown) => boolean,
    sessionStorageGet: (key: string) => unknown | null,
  }

  interface Game {
    Proxy_receiveEvent: (eventType: string, eventData: object) => void,
    Proxy: {
      receiveEvent: (eventType: string, eventData: object) => void,
    },
  }

  interface WebApp {
    initData: string,
    initDataUnsafe: WebAppInitData,
    version: string,
    colorScheme: string,
    themeParams: ThemeParams,
    isExpanded: boolean,
    viewportHeight: number,
    viewportStableHeight: number,
    headerColor: string,
    backgroundColor: string,
    BackButton: BackButton,
    MainButton: MainButton,
    HapticFeedback: HapticFeedback,
    isVersionAtLeast: (ver: string) => boolean,
    setHeaderColor: (color: string) => void,
    setBackgroundColor: (color: string) => void,
    onEvent: (eventType: string, callback: object) => void,
    offEvent: (eventType: string, callback: object) => void,
    sendData: (data: string) => void,
    openLink: (url: string) => void,
    openTelegramLink: (url: string) => void,
    openInvoice: (url: string, callback: object) => void,
    ready: () => void,
    expand: () => void,
    close: () => void,
  }

  interface Telegram {
    WebView: WebView,
    Utils: Utils,
    Game: Game,
    WebApp: WebApp,
  }

  type WebViewType = WebView
  type UtilsType = Utils
  type GameType = Game
  type WebAppType = WebApp
  type TelegramType = Telegram

  const WebView: WebView
  const Utils: Utils
  const Game: Game
  const WebApp: WebApp
  const Telegram: Telegram
}

export = telegram

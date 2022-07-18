declare namespace Telegram {

  interface WebAppChat {
    id: number,
    type: string,
    title: string,
    username?: string,
    photo_url?: string,
  }

  interface WebAppUser {
    id: number,
    is_bot?: boolean,
    first_name?: string,
    last_name?: string,
    username?: string,
    language_code?: string,
    photo_url?: string,
  }

  interface WebAppInitData {
    query_id?: string,
    user?: WebAppUser,
    receiver?: WebAppUser,
    chat?: WebAppChat,
    start_param?: string,
    can_send_after?: number,
    auth_date: number,
    hash: string,
  }

  interface HapticFeedback {
    impactOccurred: (style: string) => object,
    notificationOccurred: (type: string) => object,
    selectionChanged: () => object,
  }

  interface MainButtonParams {
    text?: string;
    color?: string | false;
    text_color?: string | false;
    is_active?: boolean;
    is_visible?: boolean;
  }

  interface MainButton {
    text: string,
    color: string,
    textColor: string,
    isVisible: boolean,
    isActive: boolean,
    isProgressVisible: boolean,
    setText: (text: string) => MainButton,
    onClick: (callback: () => void) => MainButton,
    offClick: (callback: () => void) => MainButton,
    show: () => MainButton,
    hide: () => MainButton,
    enable: () => MainButton,
    disable: () => MainButton,
    showProgress: (leaveActive?: boolean) => MainButton,
    hideProgress: () => MainButton,
    setParams: (params: MainButtonParams) => MainButton,
  }

  interface BackButton {
    isVisible: boolean,
    onClick: (callback: () => void) => void,
    offClick: (callback: () => void) => void,
    show: () => void,
    hide: () => void,
  }

  interface ThemeParams {
    bg_color?: string,
    text_color?: string,
    hint_color?: string,
    link_color?: string,
    button_color?: string,
    button_text_color?: string,
    secondary_bg_color?: string,
  }

  interface WebView {
    initParams: object,
    isIframe: boolean,
    onEvent: (eventType: string, callback: () => void) => void,
    offEvent: (eventType: string, callback: () => void) => void,
    postEvent: (eventType: string, callback?: (() => void) | false, eventData?: object) => void,
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
    colorScheme: 'light' | 'dark',
    themeParams: ThemeParams,
    isExpanded: boolean,
    viewportHeight: number,
    viewportStableHeight: number,
    headerColor: string,
    backgroundColor: string,
    BackButton: BackButton,
    MainButton: MainButton,
    HapticFeedback: HapticFeedback,
    isVersionAtLeast: (version: string) => boolean,
    setHeaderColor: (color: 'bg_color' | 'secondary_bg_color') => void,
    setBackgroundColor: (color: 'bg_color' | 'secondary_bg_color') => void,
    onEvent(eventType: 'themeChanged' | 'mainButtonClicked' | 'backButtonClicked' | 'settingsButtonClicked', eventHandler: () => void): void;
    onEvent(eventType: 'viewPortChanged', eventHandler: (eventData: { isStateStable: boolean }) => void): void;
    offEvent(eventType: 'themeChanged' | 'mainButtonClicked' | 'backButtonClicked' | 'settingsButtonClicked', eventHandler: () => void): void;
    offEvent(eventType: 'viewPortChanged', eventHandler: (eventData: { isStateStable: boolean }) => void): void;
    sendData: (data: string) => void,
    openLink: (url: string) => void,
    openTelegramLink: (url: string) => void,
    openInvoice: (url: string, callback: () => void) => void,
    ready: () => void,
    expand: () => void,
    close: () => void,
  }

  const WebView: WebView
  const Utils: Utils
  const Game: Game
  const WebApp: WebApp
}

export = Telegram

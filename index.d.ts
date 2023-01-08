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
    first_name: string,
    last_name?: string,
    username?: string,
    language_code?: string,
    is_premium?: true,
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

  interface ScanQrPopupParams {
    text?: string,
  }

  interface PopupButton {
    id?: string,
    type?: string,
    text?: string,
  }

  interface PopupParams {
    title?: string,
    message: string,
    buttons?: PopupButton[],
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
    Proxy: { postEvent: (eventType: string, eventData: string) => void },
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
    platform: string,
    colorScheme: 'light' | 'dark',
    themeParams: ThemeParams,
    isExpanded: boolean,
    viewportHeight: number,
    viewportStableHeight: number,
    headerColor: string,
    backgroundColor: string,
    isClosingConfirmationEnabled: boolean,
    BackButton: BackButton,
    MainButton: MainButton,
    HapticFeedback: HapticFeedback,
    isVersionAtLeast: (version: string) => boolean,
    setHeaderColor: (color: 'bg_color' | 'secondary_bg_color') => void,
    setBackgroundColor: (color: 'bg_color' | 'secondary_bg_color') => void,
    enableClosingConfirmation: () => void,
    disableClosingConfirmation: () => void,
    onEvent(eventType: 'themeChanged' | 'mainButtonClicked' | 'backButtonClicked' | 'settingsButtonClicked', eventHandler: () => void): void;
    onEvent(eventType: 'viewPortChanged', eventHandler: (eventData: { isStateStable: boolean }) => void): void;
    onEvent(eventType: 'invoiceClosed', eventHandler: (eventData: { url: string, status: 'paid' | 'cancelled' | 'failed ' | 'pending' }) => void): void;
    onEvent(eventType: 'popupClosed', eventHandler: (eventData: { button_id?: string }) => void): void;
    onEvent(eventType: 'qrTextReceived', eventHandler: (eventData: { data?: string }) => void): void;
    onEvent(eventType: 'clipboardTextReceived ', eventHandler: (eventData: { data?: string }) => void): void;
    offEvent(eventType: 'themeChanged' | 'mainButtonClicked' | 'backButtonClicked' | 'settingsButtonClicked', eventHandler: () => void): void;
    offEvent(eventType: 'viewPortChanged', eventHandler: (eventData: { isStateStable: boolean }) => void): void;
    offEvent(eventType: 'invoiceClosed', eventHandler: (eventData: { url: string, status: 'paid' | 'cancelled' | 'failed ' | 'pending' }) => void): void;
    offEvent(eventType: 'popupClosed', eventHandler: (eventData: { button_id?: string }) => void): void;
    offEvent(eventType: 'qrTextReceived', eventHandler: (eventData: { data?: string }) => void): void;
    offEvent(eventType: 'clipboardTextReceived ', eventHandler: (eventData: { data?: string }) => void): void;
    sendData: (data: string) => void,
    openLink: (url: string, options?: {try_instant_view: boolean}) => void,
    openTelegramLink: (url: string) => void,
    openInvoice: (url: string, callback: (eventData: { url: string, status: 'paid' | 'cancelled' | 'failed ' | 'pending' }) => void) => void,
    showPopup: (params: PopupParams, callback?: (buttonId: string) => void) => void,
    showAlert: (message: string, callback?: () => void) => void,
    showConfirm: (message: string, callback?: (isButtonIdOk: boolean) => void) => void,
    showScanQrPopup: (params: ScanQrPopupParams, callback?: (text?: string) => boolean) => void,
    closeScanQrPopup: () => void,
    readTextFromClipboard: (callback?: (text?: string) => void) => void,
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

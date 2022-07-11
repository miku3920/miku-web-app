import module_webview from './telegram/webview.mjs';
import module_webapp from './telegram/webapp.mjs';

export var WebView = module_webview.WebView;
export var Utils = module_webview.Utils;
export var Game = module_webview.Game;
export var WebApp = module_webapp.WebApp;

var Telegram = {
  WebView: WebView,
  Utils: Utils,
  Game: Game,
  WebApp: WebApp
};

export default Telegram;

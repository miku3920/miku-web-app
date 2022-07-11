var module_webview = require('./telegram/webview');
var module_webapp = require('./telegram/webapp');

var Telegram = {
  WebView: module_webview.WebView,
  Utils: module_webview.Utils,
  Game: module_webview.Game,
  WebApp: module_webapp.WebApp
};

module.exports = Telegram;

[![build](https://img.shields.io/github/workflow/status/miku3920/miku-web-app/Github%20Actions)](https://github.com/miku3920/miku-web-app) [![npm](https://img.shields.io/npm/v/miku-web-app)](https://www.npmjs.com/package/miku-web-app) [![cdnjs](https://img.shields.io/cdnjs/v/miku-web-app)](https://cdnjs.com/libraries/miku-web-app) [![minified size](https://img.shields.io/bundlephobia/min/miku-web-app)](https://cdnjs.com/libraries/miku-web-app) [![license](https://img.shields.io/github/license/miku3920/miku-web-app)](https://github.com/miku3920/miku-web-app/blob/main/LICENSE)

# miku-web-app

A npm module for Telegram Web App to prevent the pollution of the global scope.

## Table of Contents

- [General Information](#general-information)
- [Setup](#setup)
- [Usage](#usage)
- [FAQ](#faq)
- [Contact](#contact)

## General Information

**[You can find docs on Telegram official website](https://core.telegram.org/bots/webapps)**

This website introduces several WebApp demos, update records, and API documents.

## Setup

```bash
$ npm i miku-web-app
```

## Usage

```javascript
// destructured import
import { WebView, Utils, Game, WebApp } from 'miku-web-app'
// import all exported members
import * as Telegram from 'miku-web-app'
// import default export
import Telegram from 'miku-web-app'
```

`miku-web-app` import should occur before import of `vue-router`, because `vue-router` in hash mode will change location.hash. As a result, the WebApp will fail to initialize. If you are not using hash mode, this line can be omitted.

```javascript
// main.js
import 'miku-web-app' // add this line
import router from '@/router'
import App from './App.vue'
```

Don't forget to use `ready()` on mounted:

```vue
// App.vue
<script setup lang="ts">
import { onMounted } from 'vue'
import { WebApp } from 'miku-web-app'

onMounted(() => WebApp.ready())
</script>
```

Some functions (ex. `WebApp.MainButton.onClick()`) that are not part of web elements may not be triggered on some platforms. If you use these functions, you need to add the following settings:

```javascript
// For Windows Phone app
window.TelegramGameProxy_receiveEvent = Telegram.Game.Proxy_receiveEvent
// App backward compatibility
window.TelegramGameProxy = Telegram.Game.Proxy
```

If you actually want to use all object on global scope, add these:

```javascript
window.Telegram = {
  Utils: Telegram.Utils,
  WebView: Telegram.WebView,
  WebApp: Telegram.WebApp
}
window.TelegramWebviewProxy = Telegram.WebView.Proxy
```

## FAQ

**1. Why Telegram Desktop WebApp can't work on some website (ex. Vite)?**

The browser used by Telegram WebView depends on your computer's OS:

- Windows 8.1-10: EdgeHtml
- Windows 11: EdgeChromium
- macOS: Cocoa WebKit
- Linux: WebKitGTK

Telegram uses Edge Legacy by default in windows 8.1-10. This default version of the browser is older and cannot support the new version of ECMAScript.

You have two ways to solve this problem:
- [Install Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2/#download-section)
- Use legacy ECMAScript

If you choose to install Microsoft Edge WebView2, please also notify your users to update their browsers. Telegram will try Chromium Edge on all Windows versions. When no Chromium version of Edge is found, Telegram will switch back to Edge Legacy.

If you don't have Microsoft Edge WebView2 installed, you may not be able to launch DevTools with right-click in Edge Legacy's WebView. As a consequence, debugging becomes extremely difficult.

This information via [tdesktop/issues](https://github.com/telegramdesktop/tdesktop/issues/24469)

**2. Telegram.WebApp.sendData not working?**

This method is only available for Web Apps launched via a [Keyboard button](https://core.telegram.org/bots/webapps#keyboard-button-web-apps) (below the input box) not inline keyboard button (under bot messages).

You can also find the solution on [Stack Overflow](
https://stackoverflow.com/questions/71909144/dont-get-a-response-from-from-telegram-web-app-for-bots).

## Contact

Created by [@miku3920](https://t.me/miku3920) - feel free to contact me if you have any problems!
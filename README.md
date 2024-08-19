[![build](https://img.shields.io/github/actions/workflow/status/miku3920/miku-web-app/github-actions.yml?branch=main)](https://github.com/miku3920/miku-web-app) [![npm](https://img.shields.io/npm/v/miku-web-app)](https://www.npmjs.com/package/miku-web-app) [![cdnjs](https://img.shields.io/cdnjs/v/miku-web-app)](https://cdnjs.com/libraries/miku-web-app) [![minified size](https://img.shields.io/bundlephobia/min/miku-web-app)](https://cdnjs.com/libraries/miku-web-app) [![license](https://img.shields.io/github/license/miku3920/miku-web-app)](https://github.com/miku3920/miku-web-app/blob/main/LICENSE)

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

This website features several demos of the WebApp, as well as update records and API documentation.

## Setup

### Using npm

```bash
$ npm i miku-web-app
```

### Using CDN

If you prefer not to install the npm module, you can also use a CDN. Depending on your project's requirements, you can choose either the CJS (CommonJS) or MJS (ES Module) format:

#### CJS (CommonJS) Format

```html
<script src="https://unpkg.com/miku-web-app@latest/dist/telegram.min.js"></script>
```

When using the CJS format, `miku-web-app` will be automatically added to the global scope.

#### MJS (ES Module) Format

```html
<script type="module">
  import Telegram from 'https://unpkg.com/miku-web-app@latest/dist/telegram.min.mjs';
</script>
```

This method is suitable for projects using ES modules, allowing you to import the module directly in a `<script type="module">` block without relying on `window`.

## Usage

```javascript
// destructured import
import { WebView, Utils, Game, WebApp } from 'miku-web-app'
// import all exported members
import * as Telegram from 'miku-web-app'
// import default export
import Telegram from 'miku-web-app'
```

For the WebApp to initialize correctly, it is important to import `miku-web-app` before `vue-router`. This is because `vue-router`'s hash mode will change the `location.hash` value, which can cause the WebApp to fail to initialize. If you are not using hash mode, you do not need to worry about this import order.

```javascript
// main.js
import 'miku-web-app' // add this line
import router from '@/router'
import App from './App.vue'
```

To ensure the WebApp is initialized correctly, include a call to `ready()` once the page has finished loading. For example, in a Vue project you can do this in the `onMounted()` hook, like this:

```vue
// App.vue
<script setup lang="ts">
import { onMounted } from 'vue'
import { WebApp } from 'miku-web-app'

onMounted(() => WebApp.ready())
</script>
```

There are some functions (e.g. `WebApp.MainButton.onClick()`) that may not be triggered on some platforms. In this case, you can try adding the following code to your application:

```javascript
// For Windows Phone app
window.TelegramGameProxy_receiveEvent = Telegram.Game.Proxy_receiveEvent
// App backward compatibility
window.TelegramGameProxy = Telegram.Game.Proxy
```

If you want to use all of the objects in the global scope, you can add the following code:

```javascript
window.Telegram = {
  Utils: Telegram.Utils,
  WebView: Telegram.WebView,
  WebApp: Telegram.WebApp
}
window.TelegramWebviewProxy = Telegram.WebView.Proxy
```

## FAQ

**1. Why does Telegram Desktop WebApp not work on some website (e.g. Vite)?**

The browser used by Telegram WebView depends on your computer's OS:

- Windows 8.1-10: EdgeHtml
- Windows 11: EdgeChromium
- macOS: Cocoa WebKit
- Linux: WebKitGTK

By default, Telegram uses Edge Legacy in Windows 8.1-10. This older version of the browser is unable to support newer versions ECMAScript.

There are two ways to fix this problem:
- [Install Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2/#download-section)
- Use legacy ECMAScript

If you choose to install Microsoft Edge WebView2, it is important to also let your users know to update their browsers. Telegram will attempt to use Chromium Edge on all Windows versions, and if it can't find a Chromium version, it will fall back to Edge Legacy.

If you don't have Microsoft Edge WebView2 installed, you may not be able to launch DevTools with right-click in Edge Legacy's WebView. As a consequence, debugging becomes extremely difficult.

This information via [tdesktop/issues](https://github.com/telegramdesktop/tdesktop/issues/24469)

**2. Telegram.WebApp.sendData not working?**

This method is only available for Web Apps launched via a [Keyboard button](https://core.telegram.org/bots/webapps#keyboard-button-web-apps) (below the input box) not an inline keyboard button (under bot messages).

The solution can also be found on [Stack Overflow](
https://stackoverflow.com/questions/71909144/dont-get-a-response-from-from-telegram-web-app-for-bots).

## Contact

Created by [@miku3920](https://t.me/miku3920). Feel free to contact me if you have any questions or run into any issues!
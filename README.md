[![build](https://img.shields.io/github/workflow/status/miku3920/miku-web-app/Github%20Actions)](https://github.com/miku3920/miku-web-app/actions) [![npm](https://img.shields.io/npm/v/miku-web-app)](https://www.npmjs.com/package/miku-web-app) [![minified size](https://img.shields.io/bundlephobia/min/miku-web-app)](https://github.com/miku3920/miku-web-app/blob/main/dist/telegram.min.js) [![license](https://img.shields.io/github/license/miku3920/miku-web-app)](https://github.com/miku3920/miku-web-app/blob/main/LICENSE)

# miku-web-app
A npm module for Telegram Web App to prevent the pollution of the global scope.

## Getting Started

**[You can find docs on Telegram official website](https://core.telegram.org/bots/webapps)**

These docs show you how to use this API. If you know what you're doing and just want to quick start, read on...

## Quick-start

### Installation

```bash
$ npm i miku-web-app
```

### Usage

```javascript
// Importing
import { WebView, Utils, Game, WebApp } from 'miku-web-app'
// Importing all exported members.
import * as Telegram from 'miku-web-app'
```

Don't forget to use ready() on mounted:

```vue
// App.vue
<script setup lang="ts">
import { onMounted } from 'vue'
import { WebApp } from 'miku-web-app'

onMounted(() => WebApp.ready())
</script>
```

If you actually want to use global scope, add this:

```javascript
window.Telegram = {
  Utils: Telegram.Utils,
  WebView: Telegram.WebView,
  WebApp: Telegram.WebApp
}
window.TelegramGameProxy_receiveEvent = Telegram.Game.Proxy_receiveEvent
window.TelegramGameProxy = Telegram.Game.Proxy
```

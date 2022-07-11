import * as Telegram from '../dist/telegram.js'
import TelegramDefault from '../dist/telegram.js'
import * as TelegramMin from '../dist/telegram.min.js'
import TelegramMinDefault from '../dist/telegram.min.js'
import * as TelegramESM from '../dist/telegram.mjs'
import TelegramESMDefault from '../dist/telegram.mjs'
import * as TelegramESMMin from '../dist/telegram.min.mjs'
import TelegramESMMinDefault from '../dist/telegram.min.mjs'

const type = (process.env.TYPE || '').trim()
let result = Telegram

switch (type) {
  case 'Telegram': {
    result = Telegram
    break
  }
  case 'TelegramDefault': {
    result = TelegramDefault
    break
  }
  case 'TelegramMin': {
    result = TelegramMin
    break
  }
  case 'TelegramMinDefault': {
    result = TelegramMinDefault
    break
  }
  case 'TelegramESM': {
    result = TelegramESM
    break
  }
  case 'TelegramESMDefault': {
    result = TelegramESMDefault
    break
  }
  case 'TelegramESMMin': {
    result = TelegramESMMin
    break
  }
  case 'TelegramESMMinDefault': {
    result = TelegramESMMinDefault
    break
  }
  default:{
    break
  }
}

export default result

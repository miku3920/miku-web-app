import Telegram from '@/factory.mjs'

const check = ((process.env.TYPE || '').indexOf('Default') === -1) ? 'toBeDefined' : 'toBeUndefined'

test('Import all exported members should have default', () => {
  // Import default export should not have default
  expect(Telegram.default)[check]()
})

test('Telegram should be defined', () => {
  expect(Telegram).toBeDefined()
})

test('WebView should be defined', () => {
  expect(Telegram.WebView).toBeDefined()
})

test('Utils should be defined', () => {
  expect(Telegram.Utils).toBeDefined()
})

test('Game should be defined', () => {
  expect(Telegram.Game).toBeDefined()
})

test('WebApp should be defined', () => {
  expect(Telegram.WebApp).toBeDefined()
})

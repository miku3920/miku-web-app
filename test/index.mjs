import * as Telegram from '@/telegram'

test('Version should be 6.0', () => {
  expect(Telegram.WebApp.version).toBe('6.0')
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

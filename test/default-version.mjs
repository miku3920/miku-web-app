import Telegram from '@/factory.mjs'

test('Default version should be 6.0', () => {
  expect(Telegram.WebApp.version).toBe('6.0')
})

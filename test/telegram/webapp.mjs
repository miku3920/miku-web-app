import { WebApp } from '@/telegram'

test('isVersionAtLeast can be called', () => {
  expect(WebApp.isVersionAtLeast).toEqual(expect.any(Function))
})

test('setHeaderColor can be called', () => {
  expect(WebApp.setHeaderColor).toEqual(expect.any(Function))
})

test('setBackgroundColor can be called', () => {
  expect(WebApp.setBackgroundColor).toEqual(expect.any(Function))
})

test('onEvent can be called', () => {
  expect(WebApp.onEvent).toEqual(expect.any(Function))
})

test('offEvent can be called', () => {
  expect(WebApp.offEvent).toEqual(expect.any(Function))
})

test('sendData can be called', () => {
  expect(WebApp.sendData).toEqual(expect.any(Function))
})

test('openLink can be called', () => {
  expect(WebApp.openLink).toEqual(expect.any(Function))
})

test('openTelegramLink can be called', () => {
  expect(WebApp.openTelegramLink).toEqual(expect.any(Function))
})

test('openInvoice can be called', () => {
  expect(WebApp.openInvoice).toEqual(expect.any(Function))
})

test('ready can be called', () => {
  expect(WebApp.ready).toEqual(expect.any(Function))
})

test('expand can be called', () => {
  expect(WebApp.expand).toEqual(expect.any(Function))
})

test('close can be called', () => {
  expect(WebApp.close).toEqual(expect.any(Function))
})

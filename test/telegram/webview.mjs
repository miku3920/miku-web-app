import { WebView } from '@/telegram'

test('onEvent can be called', () => {
  expect(WebView.onEvent).toEqual(expect.any(Function))
})

test('offEvent can be called', () => {
  expect(WebView.offEvent).toEqual(expect.any(Function))
})

test('postEvent can be called', () => {
  expect(WebView.postEvent).toEqual(expect.any(Function))
})

test('receiveEvent can be called', () => {
  expect(WebView.receiveEvent).toEqual(expect.any(Function))
})

test('callEventCallbacks can be called', () => {
  expect(WebView.callEventCallbacks).toEqual(expect.any(Function))
})

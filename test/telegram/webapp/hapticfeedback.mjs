import { WebApp } from '@/telegram'

test('impactOccurred can be called', () => {
  expect(WebApp.HapticFeedback.impactOccurred).toEqual(expect.any(Function))
})

test('notificationOccurred can be called', () => {
  expect(WebApp.HapticFeedback.notificationOccurred).toEqual(expect.any(Function))
})

test('selectionChanged can be called', () => {
  expect(WebApp.HapticFeedback.selectionChanged).toEqual(expect.any(Function))
})

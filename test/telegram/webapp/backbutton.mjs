import { WebApp } from '@/telegram'

test('onClick can be called', () => {
  expect(WebApp.BackButton.onClick).toEqual(expect.any(Function))
})

test('offClick can be called', () => {
  expect(WebApp.BackButton.offClick).toEqual(expect.any(Function))
})

test('show can be called', () => {
  expect(WebApp.BackButton.show).toEqual(expect.any(Function))
})

test('hide can be called', () => {
  expect(WebApp.BackButton.hide).toEqual(expect.any(Function))
})

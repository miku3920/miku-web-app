import { WebApp } from '@/telegram'

test('setText can be called', () => {
  expect(WebApp.MainButton.setText).toEqual(expect.any(Function))
})

test('onClick can be called', () => {
  expect(WebApp.MainButton.onClick).toEqual(expect.any(Function))
})

test('offClick can be called', () => {
  expect(WebApp.MainButton.offClick).toEqual(expect.any(Function))
})

test('show can be called', () => {
  expect(WebApp.MainButton.show).toEqual(expect.any(Function))
})

test('hide can be called', () => {
  expect(WebApp.MainButton.hide).toEqual(expect.any(Function))
})

test('enable can be called', () => {
  expect(WebApp.MainButton.enable).toEqual(expect.any(Function))
})

test('disable can be called', () => {
  expect(WebApp.MainButton.disable).toEqual(expect.any(Function))
})

test('showProgress can be called', () => {
  expect(WebApp.MainButton.showProgress).toEqual(expect.any(Function))
})

test('hideProgress can be called', () => {
  expect(WebApp.MainButton.hideProgress).toEqual(expect.any(Function))
})

test('setParams can be called', () => {
  expect(WebApp.MainButton.setParams).toEqual(expect.any(Function))
})

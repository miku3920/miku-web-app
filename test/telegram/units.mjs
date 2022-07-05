import { Utils } from '@/telegram'

test('urlSafeDecode can be called', () => {
  expect(Utils.urlSafeDecode).toEqual(expect.any(Function))
})

test('urlParseQueryString can be called', () => {
  expect(Utils.urlParseQueryString).toEqual(expect.any(Function))
})

test('urlParseHashParams can be called', () => {
  expect(Utils.urlParseHashParams).toEqual(expect.any(Function))
})

test('urlAppendHashParams can be called', () => {
  expect(Utils.urlAppendHashParams).toEqual(expect.any(Function))
})

test('sessionStorageSet can be called', () => {
  expect(Utils.sessionStorageSet).toEqual(expect.any(Function))
})

test('sessionStorageGet can be called', () => {
  expect(Utils.sessionStorageGet).toEqual(expect.any(Function))
})

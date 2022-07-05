import { Game } from '@/telegram'

test('Proxy_receiveEvent can be called', () => {
  expect(Game.Proxy_receiveEvent).toEqual(expect.any(Function))
})

test('Proxy.receiveEvent can be called', () => {
  expect(Game.Proxy.receiveEvent).toEqual(expect.any(Function))
})

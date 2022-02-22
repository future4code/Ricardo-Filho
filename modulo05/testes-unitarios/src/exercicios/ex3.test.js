import { checaItensDuplicados } from './ex3'

describe('Checa itens duplicados', () => {
  test('Verifica array', () => {
    const meuArray = checaItensDuplicados([1, 2, 1])

    expect(meuArray).toEqual(true)
  })
})

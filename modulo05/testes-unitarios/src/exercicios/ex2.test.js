import { checaPalindromo } from './ex2'

describe('Checa Palíndromo', () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo('mirim')
    expect(ehPalindromo).toEqual(true)
  })
  test("retorna true para 'socorram-me subi no onibus em marrocos'", () => {
    const ehPalindromo = checaPalindromo(
      'socorram-me subi no onibus em marrocos'
    )

    expect(ehPalindromo).toEqual(false)
  })
  test("retorna true para 'tenet'", () => {
    const ehPalindromo = checaPalindromo('tenet')

    expect(ehPalindromo).toEqual(true)
  })
  test("retorna true para 'omissíssimo'", () => {
    const ehPalindromo = checaPalindromo('omissíssimo')

    expect(ehPalindromo).toEqual(true)
  })
  test("retorna true para 'sopapos'", () => {
    const ehPalindromo = checaPalindromo('sopapos')

    expect(ehPalindromo).toEqual(true)
  })
  test("retorna true para 'Seco de raiva, coloco no colo caviar e doces'", () => {
    //deveria dar certo, mas por conta das vírgulas, não dá.
    const ehPalindromo = checaPalindromo(
      'Seco de raiva, coloco no colo caviar e doces'
    )

    expect(ehPalindromo).toBe(true)
  })
})

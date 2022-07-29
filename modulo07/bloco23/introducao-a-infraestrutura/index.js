// VAMOS TENTAR CRIAR UMAS VARIÁVEIS
/* Estamos andando em terrenos perigosos e sem orientação precisa*/

//testanto isso

// console.log('Olá Mundo')
// console.log('Boa noite Galera do Joy')
// const nome = prompt("Qual seu nome?")

// const primeiroNome = "Ricardo"
// const sobrenome = "Ribeiro de Macedo Filho"
// let idade = 49
// const souEstudante = false

// console.log("Meu primeiro nome é", primeiroNome, sobrenome, " , Tenho" , idade, "anos", "e eu sou estudante?", souEstudante)


// console.log(typeof primeiroNome)
// console.log(typeof sobrenome)
// console.log(typeof  idade)
// console.log(typeof souEstudante)


// let nomeUsuario = prompt("digite o seu nome")
// console.log(typeof nomeUsuario)
// let idadeUsuario = prompt("Digita sua idade")
// console.log(typeof idadeUsuario)

//conversao de tipos

// const idade = 49
// console.log(typeof idade)

// const idadeTexto = idade.toString()
// console.log(typeof idadeTexto)


const numbers = [10, 21, 5, 9, 32, 15]

const max = Math.max(...numbers)

function somar() {
  let soma = 0
  for(let i in numbers) {
    soma += numbers[i]
  }
  return soma
  
}
  console.log(`O maior numero do Array é: ${max}`)
  console.log(`A Média do array é: ${somar()/numbers.length}`)

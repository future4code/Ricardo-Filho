// ==================== Exercício 1 ====================
// (a) =  Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// Resposta = para acessar os parâmetros passados na linha de comando pegamos os argumentos  process.argv[x] onde "x" é apartir do índice 2

// (b) = Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
// Resposta = 
'use strict';

var red, blue, reset;
red   = '\u001b[31m';
blue  = '\u001b[34m';

const nameUser = process.argv[2]
const age = Number(process.argv[3])

console.log(blue,` "Olá, ${nameUser}! Você tem ${age} anos."`)

// (c) = Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// Resposta = 

// const nameUser1 = process.argv[2]
// const age1 = Number(process.argv[3])
// const ages1 = Number(7)
// const futureAge1 = age1 + ages1

// console.log(` "Olá, ${nameUser1}! Você tem ${age1} anos." daqui 7 anos você terá ${futureAge1} anos`)

//(c) um incremento a mais no app, digitar o valor dos anos seguintes.
// const nameUser2 = process.argv[2]
// const age2 = Number(process.argv[3])
// const addAges2 = Number(process.argv[4])
// const futureAge2 = age2 + addAges2

// console.log(` "Olá, ${nameUser2}! Você tem ${age2} anos.Daqui ${addAges2} anos você terá ${futureAge2} anos."`)

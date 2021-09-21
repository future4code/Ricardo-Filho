// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  
  const alturaRetangulo = Number(prompt("Digite a altura para um retangulo:"))
  const larguraRetangulo = Number(prompt("Digite a altura para um retangulo:"))
  const areaRetangulo = alturaRetangulo * larguraRetangulo

  console.log(areaRetangulo)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
 
  const anoAtual = Number(prompt("Digite o ano atual por favor:"))
  const anoNascimentoUsuario = Number(prompt("Digite seu ano de nascimento por favor:"))
  const idadeUsuario = anoAtual - anoNascimentoUsuario

  console.log(idadeUsuario)  

}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  
  const pesoEmKg = Number(prompt("Digite seu peso em KG por favor:"))
  const alturaEmMetros = Number(prompt("Digite sua altura em metros por favor:"))
  const iMC = pesoEmKg / (alturaEmMetros * alturaEmMetros)

  console.log(iMC)

}
  // const pesoEmKg = Number(prompt("Digite seu peso em KG por favor:"))
  // const alturaEmMetros = Number(prompt("Digite sua altura em metros por favor:"))
  // const iMC = pesoEmKg / (alturaEmMetros * alturaEmMetros)

  // console.log(iMC)

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  
  const nomeUsuario = prompt("Digite seu nome por favor:")
  const idadeUsuario = Number(prompt("Digite sua idade por favor:"))
  const eMailUsuario = prompt("Digite seu E-mail por favor:")
  
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${eMailUsuario}.`)

}

// const nomeUsuario = prompt("Digite seu nome por favor:")
  // const idadeUsuario = Number(prompt("Digite sua idade por favor:"))
  // const eMailUsuario = prompt("Digite seu E-mail por favor:")
  
  // console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${eMailUsuario}.`)

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  
  const corFavorita1 = prompt("Digite sua primeira cor favorita:")
  const corFavorita2 = prompt("Digite sua segunda cor favorita:")
  const corFavorita3 = prompt("Digite sua terceira cor favorita:")

  const listaDeCores = [corFavorita1, corFavorita2, corFavorita3]

  console.log(listaDeCores)

}
  //const corFavorita1 = prompt("Digite sua primeira cor favorita:")
  //const corFavorita2 = prompt("Digite sua segunda cor favorita:")
  //const corFavorita3 = prompt("Digite sua terceira cor favorita:")

  //   const listaDeCores = [corFavorita1, corFavorita2, corFavorita3]

//   console.log(listaDeCores)

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

  const letraMaiuscula = prompt("Digita uma palavra por favor minúscula e vou transforma-la em MAIÚSCULA")
  console.log(letraMaiuscula.toUpperCase())
}
  // const letraMaiuscula = prompt("Digita uma palavra por favor minúscula e vou transforma-la em MAIÚSCULA")
  // console.log(letraMaiuscula.toUpperCase())

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoShow = Number(prompt("Quanto custa para produzir seu Show? (Digite apenas números):"))
  const valorIngresso = Number(prompt("Qual o valor do ingresso? (digite apenas números):"))
  const receita = custoShow / valorIngresso
  console.log(receita)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const palavra1 = prompt("Digite uma palavra qualquer por favor:")
  const palavra2 = prompt("Digite outra palavra qualquer por favor:")

  const tamanhoPalavra1 = palavra1.length
  const tamanhoPalavra2 = palavra2.length

  console.log(tamanhoPalavra1 === tamanhoPalavra2)  
}

// Exercício 9 - Ainda não sei como fazer
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const string1 = prompt("Digite uma palavra qualquer por favor:")
  const string2 = prompt("Digite outra palavra qualquer por favor:")
    
  console.log(string1.toUpperCase() == string2.toUpperCase())  
}

// Exercício 10 - Ainda não sei como fazer
function checaRenovacaoRG() {
    // escreva seu código aqui

    let anoAtual = Number(prompt('Digite o ano atual: '))
    let anoNascimento = Number(prompt('Digite o seu ano de nascimento: '))
    let anoRg = Number(prompt('Digite o ano que foi expedido se RG: '))

     let idade = anoAtual - anoNascimento
     let anoRg2 = anoAtual - anoRg

     let renovaRg5 = idade <= 20 && anoRg2 >= 5
     let renovaRg10 = idade > 20 && idade < 50 && anoRg2 >= 10
     let renovaRg15 = idade >= 50 && anoRg2 >= 15
     
    
    let renovaSouN = renovaRg5 || renovaRg10 || renovaRg15
    console.log(renovaSouN)
   
}

 

// Exercício 11 - Ainda não sei como fazer
function checaAnoBissexto() {
  let bissexto = Number(prompt('Digite um ano para saber se ele é bissexto'))
  let anoBissexto = (bissexto % 4 == 0) && (bissexto % 100 !== 0) || (bissexto % 400 == 0)
    console.log(anoBissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let idadeUsuario = prompt("Você tem mais de 18 anos? (Responsa apenas Sim ou Não)")
  let ensinoMedio = prompt("Você tem ensino médio completo? (responda apenas Sim ou Não)").toLowerCase()
  let disponibilidaHorario = prompt("Você tem disponibilidade de horário para fazer o curso na Labenu? (Horário das 18:00 às 22:00").toLowerCase()

  let idadeLimite = idadeUsuario == "sim"
  let respEnsMedio = ensinoMedio == "sim"
  let dispHorario = disponibilidaHorario == "sim"

  let respostas = idadeLimite && respEnsMedio && dispHorario
  console.log(respostas)
}

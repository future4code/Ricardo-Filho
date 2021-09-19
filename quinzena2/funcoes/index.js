//Exercício de escrita de código
//01) - Escreva as funções explicadas abaixo:
    //a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

            //  function sobreMim(){
            //  console.log('    Eu sou Ricardo Ribeiro, tenho 49 anos, mora em Conceição dos Ouros - MG. \n    Me falaram que sou muito TIOZÃO para aprender programação, estou acreditando nisso :(\n    Estou tentando mas não consigo entender algumas coisas.')
            // }
            // sobreMim()


    //b) - Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
    //o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma
    //string que unifique todas as informações da pessoa em uma só mensagem com o template:
    //Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

            //function informacoesPessoas(){
            //  let nome = "Ricardo Ribeiro"
            //  let idade = 49
            //  let profissao = "TI"
            //  let cidade = "Conceição dos ouros"
            
            //console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao} `)
            // }
            // informacoesPessoas()

            //function informacoesPessoas2(){
            //  let nome2 = prompt("Digite seu nome:")
            //  let idade2 = Number(prompt("digite sua idade:"))
            //  let profissao2 = prompt("Digite sua Profissão:")
            //  let cidade2 = prompt("Digite a cidade onde mora:")

            //  console.log(`Eu sou ${nome2}, tenho ${idade2} anos, moro em ${cidade2} e sou ${profissao2}. `)
            // }
            //  informacoesPessoas2()


//02). Escreva as funções explicadas abaixo:

    //a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
            //  function somarDoisNumero(){
            //    let number1 = 5
            //    let number2 = 9
            //    let somar = number1 + number2

            //    console.log('O Resultado da soma dos dois numero é:', omar)
            // }
            //  somarDoisNumero()

            // function somarDoisNumero(){
            //    let number1 = Number(prompt("Digite um número:"))
            //    let number2 = Number(prompt("Digite outro número:"))
            //    let somar = number1 + number2

            //    console.log(somar)
            // }
            //  somarDoisNumero()
            //  somarDoisNumero()
            //  somarDoisNumero()

   // b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
            //  function saberRelacaoentreNumeros(){
            //     let numero1 = 6
            //     let numero2 = 5

            //     let condicao = numero1 >= numero2
            //     console.log(`O primeiro numero: ${numero1} é maior que o segundo número: ${numero2}?\nTrue para SIM e FALSE para não:`, condicao)
            // }
            //saberRelacaoentreNumeros()
   
   
   
            // function saberRelacaoentreNumeros(){
            //     let numero1 = Number(prompt("Digite um número:"))
            //     let numero2 = Number(prompt("Digite outro número:"))

            //     let condicao = numero1 >= numero2
            //     console.log(`O primeiro numero digitado: ${numero1}, é maior que o segundo número digitado: ${numero2}?\nTrue para SIM e FALSE para não:`, condicao)
            // }
            //saberRelacaoentreNumeros()

    //c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
            // function esseNumeroEPar(){
            //     let numero = 2
            //     let condicaoParaTrue = numero % 2 === 0
            //     console.log(condicaoParaTrue)
            // }
            // esseNumeroEPar()

   // d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
            // function tamanhoDaStringEMaiuscula(){
            //     let frase = prompt("Digite uma frase")
            //     let contagemString = frase.length
            //     let fraseMaiuscula = frase.toUpperCase()
            //     console.log(`A frase: ${fraseMaiuscula},\ntem: ${contagemString} caracteres digitados, incluindo os espaços.`)
            // }
            // tamanhoDaStringEMaiuscula()

//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados
//pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
            // ```
            // Números inseridos: 30 e 3
            // Soma: 33
            // Diferença: 27
            // Multiplicação: 90
            // Divisão: 10
            // ```
            // function operacoesMatematicas(){
            //  let numero1 = Number(prompt('Digite um número por favor:'))
            //  let numero2 = Number(prompt('Digite outro número por favor:'))

            //  let soma = numero1 + numero2
            //  let subtracao = numero1 - numero2
            //  let multiplicacao = numero1 * numero2
            //  let divisao = numero1 / numero2
            //  console.log(`O resultado da soma dos números ${numero1} + ${numero2} é:`, soma)
            //  console.log(`O resultado da subtraçao dos números ${numero1} - ${numero2} é:`, subtracao)
            //  console.log(`O resultado da multiplicação dos números ${numero1} x ${numero2} é:`, multiplicacao)
            //  console.log(`O resultado da divisão dos números ${numero1} / ${numero2} é:`, divisao)
            // }
            // operacoesMatematicas()
//Desafios
//01) - 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então,
//funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções

    //a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
    /*
    let escrevaMeuNome = (nome, sobrenome) => {
            let nomeCompleto = nome + sobrenome
            console.log(nomeCompleto)
    }
    escrevaMeuNome("Ricardo ", "Ribeiro")
    */

    //b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira
    //função mandando este resultado da soma como entrada para imprimi-lo

    
//02) - Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa.
//Retorne este valor, invoque a função e imprima o resultado no console. 
        //A fórmula do teorema é: hip² = a² + b² , onde hip é a hipotenusa e a e b são os catetos. 
        //É necessário isolar a hipotenusa, então ao final temos: **hip = √(a² + b²)**
    /*
        let calculoDaHipotenusa = (catetoB, catetoC) =>{
                let calculoCatetoB = catetoB * catetoB
                let calculoCatetoC = catetoC * catetoC
                let valorDosCatetos = calculoCatetoB + calculoCatetoC
                let hipotenusa = (Math.sqrt(valorDosCatetos))
               
                console.log('Valor do cateto b: ', calculoCatetoB)
                console.log('Valor do cateto c: ', calculoCatetoC)
                console.log('Valor da soma dos catetos', valorDosCatetos)
                console.log('Valor da hipotenusa: ', hipotenusa)
        }
        calculoDaHipotenusa(8, 6)
        */
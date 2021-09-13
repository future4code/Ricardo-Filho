// Aula 04 - Operadores e Lógica de programação

/*
//Exercícios de interpretação de código

//01) - Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.


const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2

    console.log("a. ", resultado)
    //Resposta = O Resultado impresso será false

    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 
    //Resposta = O Resultado impresso será false

    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)
   // Resposta = O Resultado impresso será true

    console.log("d. ", typeof resultado)
    //Resposta = O Resultado impresso será booleano
*/

//02) - Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

/*
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)

    // O problema é que todos os dados enviados por um prompt são stings e na soma eles concatenam e não somam e o que será impresso é 12
    
*/

//03) - Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

/*
    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
*/

//Exercícios de escrita de código

/*

//01) - Faça um programa que:

    //a) Pergunte a idade do usuário
        
        let idadeDoUsuario = Number(prompt("Olá usuário, qual sua idade? "))
   
   //b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

        let idadeDoAmigo= Number(prompt("Qual a idade idade do seu melhor amigo? "))
        console.log(idadeDoUsuario)
        console.log(idadeDoAmigo)

    //c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
        
        console.log("Sua idade é maior do que a do seu melhor amigo?", idadeDoUsuario > idadeDoAmigo)
        

    //d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
        let diferencaIdades = idadeDoUsuario - idadeDoAmigo
        console.log("A diferença de idade entre você e seu amigo é de: ", diferencaIdades)

*/

/*
//02) - Faça um programa que:

        // a) Peça ao usuário que insira um número **par**
        
        let numeroPar= Number(prompt("Por favor, poderia digitar um número par"))
        
    // b) Imprima na console **o resto da divisão** desse número por 2.

        console.log("O resto da divisão do seu numero digitado:", numeroPar, "é: ", numeroPar % 2) // o resto desta divisão sempre dará 0 

    // c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
        
         // o resto desta divisão sempre dará 0 

    // d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

        // Caso o usuário digite um numero impar o resultado será sempre 1

*/

/*
//03) - Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console

        let idadeEmAnos= Number(prompt("Digite quantos anos você tem"))
        console.log("Sua idade em anos é: ", idadeEmAnos)
        console.log("Sua idade idade em meses é: ", idadeEmAnos * 12, "meses")
        console.log("Sua idade em dias é: ", idadeEmAnos * 365.25, " dias")
        console.log("Sua idade em horas é: ", idadeEmAnos * 8766, " horas")
*/

/*
//04) - Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:

        let numeroA= Number(prompt("Digite um número por favor"));
        let numeroB= Number(prompt("Digite outro número por favor"));

        // O primeiro numero é maior que segundo? true ou false

        console.log("o primeiro número é maior que o segundo? a resposta é: ", numeroA > numeroB);

        // O primeiro numero é igual ao segundo? true ou false

        console.log("o primeiro número é igual ao segundo? a resposta é: ", numeroA === numeroB);

        // O primeiro numero é divisível pelo segundo? true ou false

        let resto = numeroA % numeroB;
        
        console.log("O primeiro numero é divisível pelo segundo? a resposta é: ", resto === 0);

        // O segundo numero é divisível pelo primeiro? true ou false

        let resto2 = numeroB % numeroA;
        
        console.log("O segundo numero é divisível pelo primeiro? a resposta é: ", resto2 === 0);

*/
// Tnks
        
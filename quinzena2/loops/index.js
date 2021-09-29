//Exercícios de escrita de código
/*
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

c) Por fim, imprima o array com os nomes dos bichinhos no console
*/
//-----------------------------------------------------------------------------------------------------
// let quantidadeDeBichos = Number(prompt("Digite quantos bixinhos de estimação você tem:"))
// let nomeDosBichinhos = []

// if (quantidadeDeBichos === 0){
//     console.log("que pena! Você pode adotar um pet!")
//     }
// if (quantidadeDeBichos > 0){
//     for(let i = 0; i < quantidadeDeBichos; i++){
//         let bichinhos = prompt("Digite o nome dos seus Pets")
//         nomeDosBichinhos[i] = bichinhos
//         }
//         console.log(nomeDosBichinhos)
// }
//-----------------------------------------------------------------------------------------------------    
// let quantidadeDeBichos = Number(prompt("Digite quantos bixinhos de estimação você tem:"))// perguntar ao usuário
// let nomeDosBichinhos = []// array vazia para receber nome dos pets

// if (quantidadeDeBichos === 0){// se quantidade for igual a 0, imprimi console.log
//     console.log("que pena! Você pode adotar um pet!")
//     } else if (quantidadeDeBichos > 0){// se for maior que 0
//     for(let i = 0; i < quantidadeDeBichos; i++){//let 1(contador) / i++ vai subir até  i chegar a ser "um" a menos que quantidade de bichos.
//         let bichinhos = prompt("Digite o nome dos seus Pets")// pergutar ao usuário o nome do pet
//         nomeDosBichinhos[i] = bichinhos// vai armazenar na array o nome do pet na posição i [0], [1], [2]... até chegar na quantidadeDeBichos
//         //nomeDosBichinhos.push(bichinhos) outra forma de jogar na array
//         }
//         console.log(nomeDosBichinhos)// imprimir 
// }
//-----------------------------------------------------------------------------------------------------
//02) - Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

//a) - Escreva um programa que imprime cada um dos valores do array original.

    // let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    
    // for(let i of arrayOriginal){    
    // console.log(i)
    // }
// dentro função

    // let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    // function arrays () {
    //     for(let i of arrayOriginal){    
    //         console.log(i)
    //     }
    // }
    // arrays()

//b) - Escreva um programa que imprime cada um dos valores do array original divididos por 10
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    
// for(let i of arrayOriginal){    
// console.log(i/10)
// }
//c) - Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
    

    // let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    
    // for(let numerosPares of arrayOriginal){    
    //     if(numerosPares % 2 === 0){
    //         console.log([numerosPares])
    //     }
    // }

// dentro de uma função

    // let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    // let numerosParesArray = []
    //     function numerosEmArray(){
        
    //         for(let numerosPares of arrayOriginal){    
    //         if(numerosPares % 2 === 0){
    //             numerosParesArray.push(numerosPares)
    //             }
                
    //         }
    //         console.log(numerosParesArray)
    //       }
    //       numerosEmArray()
    
//d) - Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.

//e) -  Escreva um programa que imprima no console o maior e o menor números contidos no array original

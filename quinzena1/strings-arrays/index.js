
/*
/   /01) - Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
    //O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!


    const nomeUsuario = prompt('Qual seu nome:')
    const emailUsuario = prompt('Digite seu e-mail por favor:')
    const trimEmail = emailUsuario.trim()
    console.log(`O e-mail ${trimEmail} foi cadastrado com sucesso.
    Seja bem-vinda(o) ${nomeUsuario}!`)
*/
/*
    //02) Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    //a) Imprima na tela o array completo
    //b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    //c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
    

    let minhasComidasPreferidas = ["Arroz","Feijão","Carne","Lazanha","Charuto"]

    console.log(`Essas são as minhas comidas preferidas: ${minhasComidasPreferidas}`)
    console.log("Essas são as minhas comidas preferidas")
    console.log(`${minhasComidasPreferidas[0]}`)
    console.log(`${minhasComidasPreferidas[1]}`)
    console.log(`${minhasComidasPreferidas[2]}`)
    console.log(`${minhasComidasPreferidas[3]}`)
    console.log(`${minhasComidasPreferidas[4]}`)    


    let comidaUsuario2 = prompt("Digite uma comida")
    minhasComidasPreferidas.splice(1,1,comidaUsuario2)

    console.log("Essas é a lista atualizada com a sua escolha")
    console.log(`${minhasComidasPreferidas[0]}`)
    console.log(`${minhasComidasPreferidas[1]}`)
    console.log(`${minhasComidasPreferidas[2]}`)
    console.log(`${minhasComidasPreferidas[3]}`)
    console.log(`${minhasComidasPreferidas[4]}`)
*/
/*

    //03)Faça um programa, seguindo os passos:
    //a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    //b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    //c) Imprima o array na tela
    //d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    //e) Remova da lista o item de índice que o usuário escolheu.
    //f) Imprima o array na tela
    
    let listaDeTarefas = []
    let tarefa1 = prompt("Digite a primeira tarefa que precisa realizar hoje")
    let tarefa2 = prompt("Digite a segunda tarefa que precisa realizar hoje")
    let tarefa3 = prompt("Digite a terceira tarefa que precisa realizar hoje")
    listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
    console.log(listaDeTarefas)

    let digitarFeito = prompt("Digite o numero da tarefa já realizada, lembrado que 0 é a primeira tareda, 1 a segunfa e 2 a terceira")
    listaDeTarefas.splice(1, digitarFeito)
    console.log(listaDeTarefas)
*/

//DESAFIOS
//01) - Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
/*
let frase = []
let fraseDigitada = prompt("Digite uma frase")
frase.push(fraseDigitada)
console.log(fraseDigitada.split(" "))
*/

//02) - Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

/*
let listaFrutas = ["Banana", "Morango", "Abacaxi", "laranja", "Ameixa"]
console.log("O tamanho da array é", listaFrutas.length)
console.log("O seu indice é", listaFrutas.indexOf("Abacaxi"))
*/
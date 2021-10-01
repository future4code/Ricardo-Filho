// Exercício de escrita de código
/*
//01) - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
*/
/*
//a) Crie um novo array que contenha apenas o nome dos doguinhos

    const somenteNomes = pets.map((item) => {
         return item.nome
 })
    console.log(somenteNomes)
*/
/*
//b) Crie um novo array apenas com os [cachorros salsicha]
    function retornaRaca(item, index){
        return item.raca === "Salsicha"
    }
    const somenteRacaSalsicha = pets.filter(retornaRaca)
        
    console.log(somenteRacaSalsicha)
*/
/*
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const racaPoodle =(item,) => {
    return item.raca === "Poodle"
}
const racaEscolhida = pets.filter(racaPoodle)
   
const EscolheOsPoodle = (item,) => {
    return item.nome
}

const nomeDosDogs = racaEscolhida.map(EscolheOsPoodle)

console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomeDosDogs[0]} !`)
console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomeDosDogs[1]} !`)
*/

//02) - Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = 
    [
    { nome: "Alface Lavada", categoria: "Hortifruti", preço: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preço: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preço: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preço: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preço: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preço: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preço: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preço: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preço: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preço: 10.80 }
    ]
/*
//a) - Crie um novo array que contenha apenas o nome de cada item

const selecionarNomes = (item) =>{
    return item.nome
}
    const nomesDosProdutos = produtos.map(selecionarNomes)
    console.log(nomesDosProdutos)

*/
/*
b) - Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

    const nomePreco = produtos.map((item) =>{

    const novoValor = (item.preço * 0.95).toFixed(2)
    const resultado = {
        nome: item.nome, preco: novoValor
    }
    return resultado
    
})
console.log(nomePreco)
*/
/*
//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

function retornaBebida(item){
    return item.categoria === "Bebidas"
}
const somenteBebidas = produtos.filter(retornaBebida)
    
console.log(somenteBebidas)
*/
/*
//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

function retornaYpe(item){
    return item.nome.includes("Ypê")
}
const somenteYpe = produtos.filter(retornaYpe)

console.log(somenteYpe)
*/
//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"


const itensEscolhidos = produtos.filter((comprar)=>{
    return comprar.nome.includes("Ypê") === true
})
const comprarItens = itensEscolhidos.map((item)=>{
    return `Compre ${item.nome} por ${item.preço}`
})
    console.log(comprarItens)

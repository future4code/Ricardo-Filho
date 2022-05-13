import CustomerUser from "./Classes/heritage/Customer";
import Employe  from "./Classes/heritage/Employe";
import Seller from "./classes/heritage/Seller";
import { v4 as CreatIds } from "uuid" 
import Client from "./Classes/polymorphism/ClientInterface";

//HERANÇA

//EXERCÍCIO 1

/*Analise a classe User. Perceba quais propriedades são públicas
e quais são privadas. Copie esse código para o seu exercício de hoje;
crie uma instância dessa classe (dê o nome, email, etc que você quiser)
e imprima, no terminal, o id, o nome e o email desse usuário. */

// const checkCostumer:
// CustomerUser = new CustomerUser(
//     "5583 8659 7298 4645",
//     CreatIds(),
//     "rickhard@bol.com.br",
//     "Ricardo Ribeiro",
//     "357159")

// console.table(checkCostumer)
// console.log(checkCostumer.getId())
// console.log(checkCostumer.getEmail())
// console.log(checkCostumer.purchaseTotal)
// console.log(checkCostumer.introduceYourself())

//a) Seria possível imprimir a senha (password) atrelada a essa instância?
// R: Sendo ela privada, não seria possível.
//b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
//R:Apenas uma vez

//EXERCÍCIO 2
/*Analise a Customer. Perceba quais propriedades são públicas e quais são privadas.
Copie esse código para o seu exercício de hoje e crie uma instância dessa classe
(com as informações que você quiser). Atente-se ao fato de que o Customer é uma
subclasse (ou classe filha) da classe User. Sabemos disso porque há a palavra extends
na declaração da classe Customer; e, em seu construtor, foi usado o super.*/

//a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?
// R:Apenas uma vez
//b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
// R:Apenas uma vez, porque só foi enviada uma vez as informações para essa class.

//EXERCÍCIO 3
/*Agora, imprima todas as informações possíveis da instância que você criou:
o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de crédito
(`creditCard`). Perceba que as propriedades públicas da classe pai (`User`) foram
"herdadas" pela classe filha (`Customer`).*/

//a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// R: Não, Não há função GET para ela e ela é privada


//POLIMORFISMO

const client1: Client = {
    name: "Ricardo Ribeiro",
    registrationNumber: 1000,
    consumedEnergy: 10,
    calculateBill: () => {
        return 2
    }
}

console.table(client1)


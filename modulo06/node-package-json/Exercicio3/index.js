// ==================== Exercício 3 ====================
//Crie uma aplicação Node que receba uma string representando uma tarefa.
//O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código.
//Após adicionar o item à lista, exiba a lista atualizada.
'use strict';

let red, blue, cian, BgRed, black;
red   = '\u001b[31m';
blue  = '\u001b[34m';
cian  = '\u001b[36m';
BgRed = "\x1b[41m";
black = "\x1b[30m"

const assignment = [
    "Lavar a louça",
    "comprar leite"
]
const addAssignment = process.argv[2]
assignment.push(addAssignment)

console.log("-------------------")
console.log(blue +"Tarefa Adicionada com sucesso")
console.table(BgRed+ black+ assignment)
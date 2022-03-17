// ==================== Exercício 3 ====================
//Crie uma aplicação Node que receba uma string representando uma tarefa.
//O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código.
//Após adicionar o item à lista, exiba a lista atualizada.

const assignment = [
    "Lavar a louça",
    "comprar leite"
]
const addAssignment = process.argv[2]
assignment.push(addAssignment)

console.log("Tarefa Adicionada com sucesso")
console.table(assignment)
// ==================== Exercício 2 ====================
//Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
// Resposta = 

const [operacao, numberOne, numberTwo] =
[process.argv[2],
Number(process.argv[3]),
Number(process.argv[4])]

switch(operacao){
    case "add":
        console.log(`Resultado: a soma dos números ${numberOne} e ${numberTwo} e = ${numberOne + numberTwo}`)
        break;
    case "subt":
        console.log(`Resultado: a subtração dos números ${numberOne} e ${numberTwo} e = ${numberOne - numberTwo}`)
        break;
    case "mult":
        console.log(`Resultado: a multiplicação dos números ${numberOne} e ${numberTwo} e = ${numberOne * numberTwo}`)
        break;
    case "div":
        console.log(`Resultado: a divisão dos números ${numberOne} e ${numberTwo} e = ${numberOne / numberTwo}`)
        break;
}
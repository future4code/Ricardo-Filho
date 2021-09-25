// Aula sobre if/else - Exercícios de escrita de código
/*
01) - Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

    const nome = prompt("Didite seu nome por favor")
    const idade = Number(prompt("Digite sua idade por favor"))

    if (idade >= 18) {
        console.log(`Parabéns ${nome}, você pode dirigir`)
    } else {
    console.log(`Infelizmente ${nome}, você não pode dirigir`)
    }
*/

//02) - Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
/*

let nome = prompt("Por favor digite seu nome")
let horario = prompt("Digite o seu horario de estudo: V para Vespertino, M para Matutino e N para Noturno")

if (horario === "V"){
    console.log(`Bom Dia ${nome}`)
    } else if (horario === "M")
    {
    console.log(`Boa Tarde ${nome}`)
    } 
    else if (horario === "N"){
    console.log(`Boa noite ${nome}`)
    }
    console.log(`Você não digitou um valor válido, por favor repita o processo`)
*/

//03) - Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

/*
let nome = prompt("Por favor digite seu nome")
let horario = prompt("Digite o seu horario de estudo: V para Vespertino, M para Matutino e N para Noturno")

switch (horario){
    case 'V':
        console.log(`Bom Dia ${nome}`)
        break
    case 'M':
        console.log(`Boa Tarde ${nome}`)
        break
    case 'N':
        console.log(`Boa Noite ${nome}`)
        break
    default:
            console.log(`Você não digitou um valor válido, por favor repita o processo`)
        break

}
*/

//04) - Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

/*

let generoFilme = prompt("Digite o gênero de filme: Fantasia, Ação, Romance ou Terror")
let valorIngresso = Number(prompt("Qual o valor do ingresso? 10, 15 ou 20"))

    if (generoFilme === "Fantasia" && valorIngresso <= 15)
        {
            let vaiAssistir = confirm("Vai assistir?")
                if (vaiAssistir === true)
                {
                    console.log("Bom Filme")

                } else if (vaiAssistir === false)
                {
                    console.log("Escolha outro filme")
                }
        }   else if (generoFilme === "Fantasia" && valorIngresso > 15){
                    console.log(`Escolha outro filme de ${generoFilme}, mas com valor menor ou igual a 15`)
                } if (generoFilme !== "Fantasia")
                {
                console.log("Escolha outro filme")
                }
        
*/
//DESAFIOS
//01) - 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.
   
/*
let generoFilme = prompt("Digite o gênero de filme: Fantasia, Ação, Romance ou Terror")
let valorIngresso = Number(prompt("Qual o valor do ingresso? 10, 15 ou 20"))

    if (generoFilme === "Fantasia" && valorIngresso <= 15)
        {
            let vaiAssistir = confirm("Vai assistir?")
                if (vaiAssistir === true)
                {
                    let lanchinho = prompt("Qual lanchinho você vai comprar: pipoca, chocolate, doces, etc...")
                    console.log(`Aproveite a(o) sua(seu) ${lanchinho}`)
                    console.log("Bom Filme :)")

                } 
                else if (vaiAssistir === false)
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
//02) - Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos
// O seu sistema deve solicitar estas informações ao usuário, através do prompt . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)


let nome = prompt("Digite seu nome completo por favor").toUpperCase()
let tipoDeJogo = prompt("Digite o tipo de jogo: IN (Internacional) - DO (Doméstico)").toUpperCase()
let etapasDoJogo = prompt("Digite a etapa do campeonato: SF (Semi-final) - DT (Disputa da terceira colocação - FI (Final)").toUpperCase()
let categoria = Number(prompt("Digite a categoria: 1, 2, 3 ou 4 (números)"))
let quantIngressos = Number(prompt("Digite a quantidade de ingressos quer comprar (números)"))
let ingresso
let nascionalidadeDoJogo = "Nascional"
    
    const cat1 = [1320, 600, 1980]
    const cat2 = [880, 440, 1320]
    const cat3 = [550, 330, 880]
    const cat4 = [220, 170, 330]

    if (categoria === 1 && etapasDoJogo === "SF"){ingresso = cat1[0]; etapasDoJogo = "Semi Final"}
    else if (categoria === 1 && etapasDoJogo === "DT"){ingresso = cat1[1]; etapasDoJogo = "Decisão do 3º lugar"}
    else if (categoria === 1 && etapasDoJogo === "FI"){ingresso = cat1[2]; etapasDoJogo = "Final"}

    else if (categoria === 2 && etapasDoJogo === "SF"){ingresso = cat2[0]; etapasDoJogo = "Semi Final"}
    else if (categoria === 2 && etapasDoJogo === "DT"){ingresso = cat2[1]; etapasDoJogo = "Decisão do 3º lugar"}
    else if (categoria === 2 && etapasDoJogo === "FI"){ingresso = cat2[2]; etapasDoJogo = "Final"}

    else if (categoria === 3 && etapasDoJogo === "SF"){ingresso = cat3[0]; etapasDoJogo = "Semi Final"}
    else if (categoria === 3 && etapasDoJogo === "DT"){ingresso = cat3[1]; etapasDoJogo = "Decisão do 3º lugar"}
    else if (categoria === 3 && etapasDoJogo === "FI"){ingresso = cat3[2]; etapasDoJogo = "Final"}

    else if (categoria === 4 && etapasDoJogo === "SF"){ingresso = cat4[0]; etapasDoJogo = "Semi Final"}
    else if (categoria === 4 && etapasDoJogo === "DT"){ingresso = cat4[1]; etapasDoJogo = "Decisão do 3º lugar"}
    else if (categoria === 4 && etapasDoJogo === "FI"){ingresso = cat4[2]; etapasDoJogo = "Final"}

   
    switch (tipoDeJogo){
        case "IN":
        ingresso = ingresso*0.2439
        nascionalidadeDoJogo = "Internacional"
        break
    } 
totalDosIngressos = quantIngressos * ingresso

domestico = `---Dados da compra---\nNome do Cliente : ${nome}\nTipo de jogo: ${nascionalidadeDoJogo}\nEtapa do jogo: ${etapasDoJogo}\nCategoria: ${categoria}\nQuantidade de ingressos: ${quantIngressos} ingressos\n---Valores---\nValor do ingresso: R$ ${ingresso}\nValor total: R$ ${totalDosIngressos}`

internacional = `---Dados da compra---\nNome: ${nome}\nTipo de jogo: ${nascionalidadeDoJogo}\nEtapa do jogo: ${etapasDoJogo}\ncategoria: ${categoria}\nQuantidade de ingressos: ${quantIngressos} ingressos\n---Valores---\nValor do ingresso: U$ ${ingresso}\nValor total: U$ ${totalDosIngressos}`

if (tipoDeJogo === "DO"){
    console.log (domestico)
}else{
    console.log (internacional)
}

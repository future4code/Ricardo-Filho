let jogador = []
let computador = []
// const carta = comprarCarta()

console.log("Boas vindas ao Famoso jogo de 21 ou BlackJack!")

if(confirm("Bora jogar??")){
   let maoUmJogador = comprarCarta()
   let maoDoisJogador = comprarCarta()
   let maoUmPc = comprarCarta()
   let maoDoisPc = comprarCarta()

   let somaJogador = maoUmJogador.valor + maoDoisJogador.valor
   let somaPc = maoUmPc.valor + maoDoisPc.valor

   
   console.log(`Usuário - cartas: ${maoUmJogador.texto} ${maoDoisJogador.texto} - pontuação: ${somaJogador} `)
   console.log(`Computador - cartas: ${maoUmPc.texto} ${maoDoisPc.texto} - pontuação: ${somaPc} `)

   if(somaJogador === somaPc){
      console.log("Empate!")
   } else if(somaJogador > somaPc){
      console.log("O usuário ganhou!")
   } else if(somaPc > somaJogador){
      console.log("O computador ganhou!")
   }

} else{
   alert(`O jogo acabou`)
}
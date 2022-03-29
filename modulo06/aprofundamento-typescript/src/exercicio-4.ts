//a) copiador

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) colocaria dentro do arquivo package.json na parte de script "start-4": "tsc && node ./build/exercicio-4.js", e escuto como um script normal

//c) Caso estive fora da pasta src iria dar erro, porém eu já fiz dentro desta pasta então não obtive erro. Mas caso ela estive dentro e eu fosse executar de fora adicionaria ./src 

//d) se eu colocar tsc && node ./build/exercicio1.js && node ./build/exercicio2.js e repetir para vários exercicios funcionariam todos.
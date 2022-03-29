//Exercicio 01
//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

const minhaString: string = "nome";
//const minhaString1: string = 3
//const minhaString: string
// resposta ao erro em declarar uma variável string e atribuir um numero a ela=
//O tipo 'number' não pode ser atribuído ao tipo 'string'.ts(2322)

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

const meuNumero: number = 3;
const meuNumero1: number | string = 3;
const meuNumero2: number | string = "Outro Coisa";

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

type Person = {
  name: string;
  age: number;
  favoriteColor: FavoriteColor;
};
//d) -
enum FavoriteColor {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta",
}
const penson1: Person = {
  name: "Ricardo",
  age: 50,
  favoriteColor: FavoriteColor.VERMELHO,
};
const penson2: Person = {
  name: "Minaíde",
  age: 40,
  favoriteColor: FavoriteColor.VERDE,
};
const penson3: Person = {
  name: "Andersson",
  age: 26,
  favoriteColor: FavoriteColor.AZUL,
};
const penson4: Person = {
  name: "Gabril",
  age: 09,
  favoriteColor: FavoriteColor.VIOLETA,
};

console.log("teste do exercicio1");

import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getUserName } from "./endpoints/getUserName";
import { getUserType } from "./endpoints/getUserType";
import { getNameType } from "./endpoints/getNameType";
import { getFiveUser } from "./endpoints/getFiveUser";
import { getAllFuncs } from "./endpoints/getAllFuncs";

app.get("/recipes", getAllRecipes)// pega as receitas do exercicio da aula

app.get("/users", getUserName)// Exercicio 1 - a) pega usuários por nome ou todos os usuário
app.get("/users/order", getNameType)//Exercicio 2 pegar usuários por nome e por tipo
app.get("/users/five", getFiveUser)//Exercicio 3 - exibir apenas 5 users por vez ou pelo tamanho do size
app.get("/users/allfuncs", getAllFuncs)// Todas as funções
app.get("/users/type/:type", getUserType)// Exercicio 1 - b) pega usuários por tipo
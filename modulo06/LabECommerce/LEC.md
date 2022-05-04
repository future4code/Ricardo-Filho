<h1 id="topo"></h1>
<img height="50em" width="50em" src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f6cd-fe0f.svg">

# Projeto LabECommerce 

---

### O que funciona
* [📒 Enunciado](#enunciado)✅
* [🚀 Endpoints](#endpoints)✅
    * [Cadastro de usuário](#postusers)✅
    * [Busca por todos os usuários](#getusers)✅
    * [Cadastro de produto](#postprodutos)✅
    * [Busca por todos os produtos](#getprodutos)✅
    * [Registro de compra](#regcompras)✅
    * [Busca as compras de um usuário por ID](#getcompras)✅
* [🎯 Desafios](#desafios)✅
    * [Busca por todos os produtos](#getprod2)✅
    * [Busca por todos os usuários](#getusers2)✅
* [🚀 Extras](#extras)✅
    * [index.js](#index)✅
    * [app.js](#app)✅
    * [connections.ts](#connections)✅
    * [migrations.ts](#migrations)✅
### Imagens 🏝️🏜️🌠


<h2 id="enunciado">📒 Enunciado</h2>

Seu nome anda circulando pelas redes e fóruns de desenvolvimento web! Seus projetos de front-end deram o que falar, e agora estão sabendo que você também apronta no back-end!

De manhã você acordou, tomou uma bela xícara de café, verificou sua caixa de e-mail e viu que a equipe do LabECommerce gostou muito do seu trabalho de front-end e quer te chamar para dar uma atualizada no back-end do sistema também. 

Sendo assim, te passaram uma lista do que o projeto precisa ter:

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="endpoints">🏁 Endpoints mínimos do MVP</h2>

---

<h3 id="postusers">Cadastro de usuário</h3>

A empresa quer implementar futuramente um sistema de login, por isso pediu que seja desenvolvido um cadastro simples de usuário nesse primeiro momento.

- **mysql:**
    - **nome da tabela**: **`labecommerce_users`**
    - **colunas**:
        - **`id`**: string **(PRIMARY KEY)**
        - **`name`**: string
        - **`email`**: string
        - **`password`**: string
- **express:**
    - **método**: **`post`**
    - **path: `/users`**
    - `**id`** deve ser gerado pela própria aplicação em código
    - **parâmetros recebidos** via **`body`:**
        - **`name`**, **`email`** e **`password`**
---

<h4 align="right"><a href="#topo">Topo</a></h4>

``` Java
import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as idCreat } from 'uuid';

export async function postUsers(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
    const {name, email, password, type } = req.body;
    if(!name){
      throw new Error("Você precisa informar um nome")
    };
    if(!name){
      throw new Error("Você precisa informar um nome")
    };
    if(!email || email.length < 10){
      throw new Error("Voçê precisa informar um e-mail válido com pelo menos 10 caracteres")
    };
    if(!email.includes("@")){
      throw new Error("Endereço de e-mail precisar incluir um @")
    };
    if(!password || password.length < 6){
      throw new Error("Você precisa informar um password e ter no mínimo 6 caracteres")
    };
    
    const [checkEmail] = await connection("labecommerce_users")
    .select("email")
    .where({"email": email})
        
    if(checkEmail){
      throw new Error("Este e-mail já existe, informe outro")
    }
    
    await connection("labecommerce_users")
    .insert({
    id:idCreat(),
    name,
    email,
    password,
    type
    })
    
    res.status(201).send("Usuário Criado com Sucesso")
          
   } catch (error: any) {
    res.status(400).send(error.message)
   }
 }
 
```
```java
###  cadastrando um usuário
POST http://localhost:3003/users
Content-Type: application/json

{
    "name": "Morpheu Matrix",
    "email": "bluepill@bol.com.br",
    "password": "362522",
    "type": "NORMAL"
    
}
```
<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 id="getusers">Busca por todos os usuários</h3>

Essa é uma funcionalidade de *admin* que será utilizada futuramente quando houver a classificação de papéis nas contas cadastradas (cliente comum e admin). Por enquanto, pediram apenas que o endpoint exista e funcione mesmo sem controle de segurança.

- **método: `get`**
- **path: `/users`**
- **sem parâmetros**
- deve trazer uma lista com **todos os** **usuários** cadastrados no banco
```java
import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllUsers(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
 
    const getAllUsers = await connection("labecommerce_users")
    .select()
    
      res.status(200).send(getAllUsers)
   } catch (error: any) {
       res.send(error.message || error.sqlMessage)
   }
 }
```
---
<h4 align="right"><a href="#topo">Topo</a></h4>

### 
<h3 id="postprodutos">Cadastro de produto</h3>

Um dos principais requisitos do projeto. A equipe LabECommerce pediu que seja possível cadastrar produtos em um banco de dados e que o controle de identificadores seja gerenciado pelo próprio código.

- **mysql**:
    - **nome da tabela: `labecommerce_products`**
    - **colunas**:
        - `**id**`: string **(PRIMARY KEY)**
        - `**name**`: string
        - `**price**`: number
        - `**image_url**`: string
- **express**:
    - **método: `post`**
    - **path**: `**/products**`
    - `**id`** deve ser gerado pela própria aplicação em código
    - **parâmetros recebidos** via **`body`**:
        - `**name**`, **`price`** e **`image_url`**
        - **`image_url`** é a ***url*** da imagem do produto
        - exemplo de uma **`image_url`**:
         - [https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ](https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ)

<h4 align="right"><a href="#topo">Topo</a></h4>

```java
import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as idCreat } from 'uuid';

export async function postProducts(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
    const { name, price, image_url } = req.body;
    if(!name){
      throw new Error("Você precisa informar um nome")
    };
    if(!price || price.length === 0){
      throw new Error("Voçê precisa informar um valor maior que 0")
    };
    if(!image_url){
      throw new Error("Você precisa informar a URL de uma imagem válida")
    };

    const [checkProduct] = await connection("labecommerce_products")
    .select("name")
    .where({"name": name})
        
    if(checkProduct){
      throw new Error("Este produto já existe, informe outro")
    }

    await connection("labecommerce_products")
    .insert({
    id:idCreat(),
    name,
    price,
    image_url
    })
    
    res.status(201).send("Produto criado com sucesso")
          
   } catch (error: any) {
    res.status(400).send(error.message)
   }
 } 
```
 ```java
###  Cadastro de um produto
POST http://localhost:3003/products
Content-Type: application/json

{
    "name": "Motosserra à Gasolina 55CC 18 Pol. - LYNUS-MLY-55C",
    "price": 709.90,
    "image_url": "https://img.lojadomecanico.com.br/IMAGENS/33/738/88675/Motosserra-a-Gasolina-55CC-18-Pol-lynus-mly-55c1.JPG"    
}
```
<h4 align="right"><a href="#topo">Topo</a></h4>

---

<h3 id="getprodutos">Busca por todos os produtos</h3>

Essa é a funcionalidade principal de clientes. É o endpoint que irá possibilitar a exibição do catálogo de produtos cadastrados no website.

- **método: `get`**
- **path**: `**/products**`
- **sem parâmetros**
- deve trazer uma lista com **todos os** **produtos** cadastrados no banco
```java
import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllProducts():Promise<any> {
  
     const allProducts = await connection("labecommerce_products")
    
    return allProducts  
 }

 export async function selectAllProducts(req: Request, res: Response):Promise<any> {
   try{
     const products = await getAllProducts()
     res.status(200).send(products)
   }
   catch(error: any){
     res.send(error.message || error.sqlMessage)
   }
 }
```
```java
###  Pega todos os produtos

GET http://localhost:3003/products
```
---
<h4 align="right"><a href="#topo">Topo</a></h4>

### 
<h3 id="regcompras">Registro de compra</h3>
É necessário para que seja possível controlar as vendas finalizadas. Por enquanto não se preocupe com confirmação de pagamento ou controle de datas. Uma implementação simples de registro já é suficiente para a equipe iniciar os testes de usabilidade.

- **mysql**:
    - **nome da tabela: `labecommerce_purchases`**
    - **colunas**:
        - `**id**`: string (PRIMARY KEY)
        - `**user_id**`: string (FOREIGN KEY) referencia uma `**id**` de `**labecommerce_users**`
        - `**product_id**`: string (FOREIGN KEY) referencia uma `**id**` de `**labecommerce_products**`
        - `**quantity**`: number
        - `**total_price**`: number
- **express**:
    - **método**: `**post**`
    - **path**: `**/purchases**`
    - `**id`** deve ser gerado pela própria aplicação em código
    - `**total_price**` deve ser calculado pela própria aplicação em código
    - **parâmetros recebidos** via **`body`**:
        - **`user_id`**, **`product_id`** e **`quantity`**

<h4 align="right"><a href="#topo">Topo</a></h4>

```java
import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAllProducts } from "./getAllProducts"
import { v4 as idCreat } from 'uuid';

export async function regPurchases(req: Request, res: Response):Promise<any> {
   
  try {
    const { user_id, product_id, quantity } = req.body

    let totalprice = 0;

    const products = await getAllProducts()

    const productId = products.find((item: { id: any; })=>{
      return item.id === product_id

    })

    if(!productId){
      throw new Error("Insira um ID válido para um produto")
    }

    let totalPrice = productId.price * quantity

  await connection("labecommerce_purchases")
  .insert({
   id:idCreat(),
   user_id:user_id,
   product_id:product_id,
   quantity,
   total_price: totalPrice  
 })
 res.status(201).send("Compra efetuada com sucesso")
   } catch (error: any) {
       res.send(error.message || error.sqlMessage)
   }
 }
```
```java
###  inclui compra para um usuário usando ID do produto e ID do usuários
POST http://localhost:3003/purchases
Content-Type: application/json

{
    "user_id": "3f2ebb6b-acc9-46f8-81c5-fae1076029ff",
    "product_id": "1e3e15c0-3a00-4dec-b089-5a98f638112f",
    "quantity": 1
}
```
<h4 align="right"><a href="#topo">Topo</a></h4>

---

<h3 id="getcompras">Busca das compras de um usuário</h3>
Essa funcionalidade irá permitir a exibição do histórico de compras no perfil do usuário.

- **método: `get`**
- **path: `/users/:user_id/purchases`**
- **parâmetro recebido** via `**path params**`:
    - **`user_id`**
- deve trazer uma lista com **todas as compras** de um determinado **usuário**

```java
import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getPurchasesUser(
  req: Request,
  res: Response,
 ):Promise<any> {
   try {
    const userId = req.params.userId as string;
    const purchase = await connection("labecommerce_purchases")
    .select("labecommerce_products.name","labecommerce_purchases.quantity","labecommerce_products.price", "labecommerce_purchases.total_price")
    .innerJoin("labecommerce_products", "labecommerce_products.id", "labecommerce_purchases.product_id") 
    .innerJoin("labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id")
    .where("labecommerce_users.id", userId);

    res.status(200).send(purchase)  
   } catch (error: any) {
       res.send(error.message || error.sqlMessage)
   }
 }
 
```
```java
###  Pega todos as compras por id do usuário

GET http://localhost:3003/users/3f2ebb6b-acc9-46f8-81c5-fae1076029ff/purchases
```
---
<h4 align="right"><a href="#topo">Topo</a></h4>

- 
  <h3 id="desafios">🎯 Desafios</h3>


  <h3 id="getprod2">Busca por todos os produtos</h3>
    Altere o endpoint de busca de todos os produtos para que:
    
    - seja possível ordenar a lista dos produtos
        - a ordenação deve ser recebida via **query params**
            - a query deve se chamar `**order**`
            - pode ser `**asc**` (crescente) ou `**desc**` (decrescente)
            - exemplo de url ao ordenar de forma crescente:
                - `**http://localhost:3003/products?order=asc**`
        - caso nenhuma ordenação seja recebida, retorne todos os produtos sem ordenação
    - seja possível buscar produtos conforme seu nome
        - o termo de busca deve ser recebido via **query params**
            - a query deve se chamar **`search`**
            - exemplo de url ao buscar pelo termo "headset":
                - `**http://localhost:3003/products?search=headset**`
        - caso nenhum termo de busca seja recebido, retorne todos os produtos
```java
import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllProducts(order?:string, search?:string): Promise<any> {
  
     let orderAndSearch
     if(!order && !search){
       orderAndSearch = await connection("labecommerce_products")
     } else if(search){
       orderAndSearch = await connection("labecommerce_products")
       .where("name_product", "like", `%${search}%`)
     } else {
       orderAndSearch = await connection("labecommerce_products")
       .orderBy("name_product", order)
     }

    return orderAndSearch  
 }

 export async function orderAllProducts(req: Request, res: Response):Promise<void> {
   try{
     const order = req.query.order as string
     const search = req.query.search as string

     let products = await getAllProducts(order, search)

     res.status(200).send(products)
   }
   catch(error: any){
     res.send(error.message || error.sqlMessage)
   }
 }
```    
```java
###  Pega todos as compras por id do usuário

GET http://localhost:3003/product?search=serra    

```    
```java
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 252
ETag: W/"fc-0XmAvD174zCkz918ttyWO5BIIyk"
Date: Tue, 03 May 2022 04:38:14 GMT
Connection: close

[
  {
    "id": "529e5769-b045-47c6-b069-fae20bf081ac",
    "name_product": "Motosserra à Gasolina 55CC 18 Pol. - LYNUS-MLY-55C",
    "price": 709.9,
    "image_url": "https://img.lojadomecanico.com.br/IMAGENS/33/738/88675/Motosserra-a-Gasolina-55CC-18-Pol-lynus-mly-55c1.JPG"
  }
]
```    
<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 id="getusers2">Busca por todos os usuários</h3>

    Altere o endpoint de busca por todos os usuários para que:
    
    - retorne também as **compras** de cada usuário em uma propriedade `**purchases`**

```java
import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllUsersPurchases(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
 
    const getAllUsers:any = await connection("labecommerce_purchases")
    .select(
    "labecommerce_users.id",
    "labecommerce_users.name",
    "labecommerce_users.email",
    "labecommerce_users.type",
    "labecommerce_products.name_product",
    "labecommerce_purchases.quantity",
    "labecommerce_products.price",
    "labecommerce_purchases.total_price")
    .innerJoin("labecommerce_products","labecommerce_products.id", "labecommerce_purchases.product_id")
    .innerJoin("labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id")
    
    
      res.status(200).json({purchases: getAllUsers})
   } catch (error: any) {
       res.send(error.message || error.sqlMessage)
   }
 }
```
```java
###  Pega todos os usuários e suas compras

GET http://localhost:3003/users/purchase
```
```java
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 528
ETag: W/"210-3kGrQhoxeM9aq2fRwFkYsjS47tY"
Date: Tue, 03 May 2022 04:35:52 GMT
Connection: close

{
  "purchases": [
    {
      "id": "0281fee6-3976-4600-bb99-980addf4c656",
      "name": "Minaíde Simões",
      "email": "minasim@bol.com.br",
      "type": "NORMAL",
      "name_product": "Parafusadeira/Furadeira a Bateria 12V Max Li-Ion com Carregador 2 Bat. e Maleta - MAKITA-DF330DWEB",
      "quantity": 2,
      "price": 819.9,
      "total_price": 1639.8
    },
    {
      "id": "3f2ebb6b-acc9-46f8-81c5-fae1076029ff",
      "name": "Ricardo Ribeiro",
      "email": "rickhard@bol.com.br",
      "type": "ADMIN",
      "name_product": "Motosserra à Gasolina 55CC 18 Pol. - LYNUS-MLY-55C",
      "quantity": 1,
      "price": 709.9,
      "total_price": 709.9
    }
  ]
}
```
<h4 align="right"><a href="#topo">Topo</a></h4>
<h3 id="extras">🚀 Extra</h3>

<h3 id="index">index.ts</h3>

```java
import { app } from "./app";
import { postUsers } from "./endpoints/postUsers";// 1
import { getAllUsers } from "./endpoints/getAllUsers";//2
import { postProducts } from "./endpoints/postProducts";//3
import { selectAllProducts } from "./endpoints/getAllProducts";//4
import { regPurchases } from "./endpoints/regPurchases";//5
import { getPurchasesUser } from "./endpoints/getPurchasesUser";//6
import { orderAllProducts } from "./endpoints/getAllProductsOS";//7
import { getAllUsersPurchases } from "./endpoints/getAllUsersPurchases";//8



app.post("/users", postUsers)//  1 - adicionar users - ok
app.get("/users", getAllUsers)// 2 - pegar todos os usuários - ok
app.post("/products", postProducts)// 3 - adicionar os produtos - ok
app.get("/products", selectAllProducts)// 4- pegar todos os produtos - ok
app.post("/purchases", regPurchases)// 5 - registrar as compras
app.get("/users/:userId/purchases", getPurchasesUser)// 6 - pegar as compras
app.get("/product", orderAllProducts)// 7- pegar todos os produtos com order e search - ok
app.get("/users/purchase", getAllUsersPurchases)// 8 - pegar todos os usuários - ok
```
<h4 align="right"><a href="#topo">Topo</a></h4>
<h3 id="app">app.ts</h3>

```java
import express from "express"
import cors from "cors"
import { AddressInfo } from "net"

export const app = express()

app.use(express.json())
app.use(cors())

export type Users = {
   id: string,
   name: string,
   email: string,
   password: string
}

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})
```

<h4 align="right"><a href="#topo">Topo</a></h4>
<h3 id="connections">connections.ts</h3>

```java
import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      multipleStatements: true
   }
})
```

<h4 align="right"><a href="#topo">Topo</a></h4>
<h3 id="migrations">migrations.ts</h3>

```java
import { connection } from "./connection"


const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}

const createTables = () =>
    connection
        .raw(
            `CREATE TABLE IF NOT EXISTS labecommerce_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) UNIQUE NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL,
         type VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labecommerce_products (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) UNIQUE NOT NULL,
         price FLOAT NOT NULL,
         image_url VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labecommerce_purchases (
         id VARCHAR(255) PRIMARY KEY,
         user_id  VARCHAR(255),
         product_id VARCHAR(255),
         quantity INT NOT NULL,
         total_price FLOAT NOT NULL,
         FOREIGN KEY(user_id) REFERENCES labecommerce_users(id),
         FOREIGN KEY(product_id) REFERENCES labecommerce_products(id)  
      );`
        )
        .then(() => {
            console.log("Tabelas criadas")
        })
        .catch(printError)

const closeConnection = () => {
    connection.destroy()
}

createTables().finally(closeConnection)

```

<h4 align="right"><a href="#topo">Topo</a></h4>
<h1 id="topo"></h1>
<img height="50em" width="50em" src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f6cd-fe0f.svg">

# Projeto LabECommerce 

---

### O que funciona
* [Enunciado](#enunciado)
* [Endpoints](#endpoints)
    * [Cadastro de usuário](#postusers)
    * [Busca por todos os usuários](#getusers)
    * [Cadastro de produto](#postprodutos)
    * [Busca por todos os produtos](#getprodutos)
    * [Registro de compra](#regcompras)

### O que não funciona
* [Busca das compras de um usuário](#getcompras)
* [Desafios](#desafios)
    * [Busca por todos os produtos](#getprod2)
    * [Busca por todos os usuários](#getusers2)

### Imagens


<h2 id="enunciado">📒 Enunciado</h2>

Seu nome anda circulando pelas redes e fóruns de desenvolvimento web! Seus projetos de front-end deram o que falar, e agora estão sabendo que você também apronta no back-end!

De manhã você acordou, tomou uma bela xícara de café, verificou sua caixa de e-mail e viu que a equipe do LabECommerce gostou muito do seu trabalho de front-end e quer te chamar para dar uma atualizada no back-end do sistema também. 

Sendo assim, te passaram uma lista do que o projeto precisa ter:

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="endpoints">Endpoints mínimos do MVP</h2>

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
    if(!password || password.length <= 0){
      throw new Error("Você precisa informar um password e ter no mínimo 6 caracteres")
    };
        
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
<h4 align="right"><a href="#topo">Topo</a></h4>

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
<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 id="getcompras">Busca das compras de um usuário</h3>
Essa funcionalidade irá permitir a exibição do histórico de compras no perfil do usuário.

- **método: `get`**
- **path: `/users/:user_id/purchases`**
- **parâmetro recebido** via `**path params**`:
    - **`user_id`**
- deve trazer uma lista com **todas as compras** de um determinado **usuário**

---
<h4 align="right"><a href="#topo">Topo</a></h4>

- 
    <h3 id="desafios">Desafios</h3>


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
    
    
    <h3 id="getusers2">Busca por todos os usuários</h3>
    Altere o endpoint de busca por todos os usuários para que:
    
    - retorne também as **compras** de cada usuário em uma propriedade `**purchases`**

    <h4 align="right"><a href="#topo">Topo</a></h4>
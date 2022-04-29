# Aula - Filtros, Ordenação e Paginação 
---

### Exercício da Semana
>Exercício pede para criar uma cópia do endpoint sugerido, porém preferi fazer de outra forma.

- **Exercício 1**
>getUserName.ts    
* a) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por **nome**. Este nome deve ser enviado por **query params**.

```java
import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllUsers(
   req: Request,
   res: Response
):Promise<any> {
  try {

     let name = req.query.name as string;
 
   if(!name){
      name ="%"
    }

     const getUserName = await connection("aula48_exercicio")
     .select()
     .where("name", "like", `%${name}%`)


     res.status(200).send(getUserName)
     
  } catch (error: any) {
      res.send(error.message || error.sqlMessage)
  }
}
```

```java
### - Pegando todos os usuários, pois existe um tratamento de erro que diz que quando não informar um nome, responde com todos.

if(!name){
    name ="%"
    }
```
```java
###
Send Request
GET http://localhost:3003/users
```
```java
Response(ms)

[
  {
    "id": 1,
    "name": "Soter",
    "email": "soter@labenu",
    "type": "Teacher"
  },
  {
    "id": 11,
    "name": "Luciano",
    "email": "luciano@labenu",
    "type": "Operations"
  },
  {
    "id": 25,
    "name": "Maju",
    "email": "maju@labenu",
    "type": "CX"
  }
]
```
```java
###
Send Request
GET http://localhost:3003/users?name=soter
```
```java
Response(ms)

HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 65
ETag: W/"41-deJh3G8I4/hwwryjFi2Bk+FBlyk"
Date: Tue, 26 Apr 2022 23:51:43 GMT
Connection: close

[
  {
    "id": 1,
    "name": "Soter",
    "email": "soter@labenu",
    "type": "Teacher"
  }
]
```
<h4 align="right"><a href="#topo">Topo</a></h4>

* b) Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por **tipo** de user. O tipo de user deve ser passado por **path params.**

>getUserType.ts

```java
import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getUserType(
   req: Request,
   res: Response
):Promise<void> {
  try {
     
        let getType = req.params.type;
     
     console.log(getType);
 
   if(!getType) {
   res.status(400).send("Você precisa informar um tipo válido")
  }
  if(!getType){
    res.status(404).send("Precisa digitar um type - Teacher ou CX ou Operations")
  }
     const getUserName = await connection("aula48_exercicio")
     .where({type: getType})


     res.status(200).send(getUserName)
     
  } catch (error: any) {
      res.send(error.message || error.sqlMessage)
  }
}
```
```java
###
Send Request
GET http://localhost:3003/type/cx
```
```java
Response(ms)

HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 314
ETag: W/"13a-TgKljpVL5HfNoz62cIPr/5IX2DY"
Date: Wed, 27 Apr 2022 01:00:24 GMT
Connection: close

[
  {
    "id": 21,
    "name": "Aline",
    "email": "aline@labenu",
    "type": "CX"
  },
  {
    "id": 22,
    "name": "NathaliaB",
    "email": "nathaliacx@labenu",
    "type": "CX"
  }
]
```
<h4 align="right"><a href="#topo">Topo</a></h4>

- **Exercício 2**

>getNameType.ts

* Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user. A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email.

```java
import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getNameType(
   req: Request,
   res: Response
):Promise<any> {
  try {

     let name = req.query.name as string;
     let sort = req.query.sort as string
 
   if(!name){
      name ="%"
    }
   if(sort !== "name" && sort !=="type"){
      sort = "email"
   }
     const getUserName = await connection("aula48_exercicio")
     .select()
     .where("name", "like", `%${name}%`)
     .orderBy(sort, "ASC")
   


     res.status(200).send(getUserName)
     
  } catch (error: any) {
      res.send(error.message || error.sqlMessage)
  }
}
```
```java
###
Send Request
GET http://localhost:3003/order?sort=type
```
```java
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 1665
ETag: W/"681-NRfhfAKkqEL8HYwGg6xicUTYQwY"
Date: Wed, 27 Apr 2022 02:00:09 GMT
Connection: close

[
  {
    "id": 21,
    "name": "Aline",
    "email": "aline@labenu",
    "type": "CX"
  },
  {
    "id": 22,
    "name": "NathaliaB",
    "email": "nathaliacx@labenu",
    "type": "CX"
  },
  {
    "id": 23,
    "name": "Layla",
    "email": "layla@labenu",
    "type": "CX"
  },
  {
    "id": 24,
    "name": "Jonathan",
    "email": "jonathan@labenu",
    "type": "CX"
  },
  {
    "id": 25,
    "name": "Maju",
    "email": "maju@labenu",
    "type": "CX"
  },
  {
    "id": 11,
    "name": "Luciano",
    "email": "luciano@labenu",
    "type": "Operations"
  },
  {
    "id": 12,
    "name": "Miau",
    "email": "miau@labenu",
    "type": "Operations"
  },
  {
    "id": 13,
    "name": "Sekine",
    "email": "sekine@labenu",
    "type": "Operations"
  },
  {
    "id": 14,
    "name": "Nathalia",
    "email": "nathalia@labenu",
    "type": "Operations"
  },
  {
    "id": 15,
    "name": "AmandaP",
    "email": "amandaop@labenu",
    "type": "Operations"
  },
  {
    "id": 16,
    "name": "Rebeca",
    "email": "rebeca@labenu",
    "type": "Operations"
  },
  {
    "id": 17,
    "name": "Jean",
    "email": "jean@labenu",
    "type": "Operations"
  },
  {
    "id": 18,
    "name": "Vitória",
    "email": "vitoria@labenu",
    "type": "Operations"
  },
  {
    "id": 19,
    "name": "Fernanda",
    "email": "fernanda@labenu",
    "type": "Operations"
  },
  {
    "id": 20,
    "name": "Tainah",
    "email": "mtainah@labenu",
    "type": "Operations"
  },
  {
    "id": 1,
    "name": "Soter",
    "email": "soter@labenu",
    "type": "Teacher"
  },
  {
    "id": 2,
    "name": "João",
    "email": "joao@labenu",
    "type": "Teacher"
  },
  {
    "id": 3,
    "name": "Paula",
    "email": "paula@labenu",
    "type": "Teacher"
  },
  {
    "id": 4,
    "name": "Amanda",
    "email": "amanda@labenu",
    "type": "Teacher"
  },
  {
    "id": 5,
    "name": "Darvas",
    "email": "darvas@labenu",
    "type": "Teacher"
  },
  {
    "id": 6,
    "name": "Severo",
    "email": "severo@labenu",
    "type": "Teacher"
  },
  {
    "id": 7,
    "name": "Caio",
    "email": "caio@labenu",
    "type": "Teacher"
  },
  {
    "id": 8,
    "name": "Chijo",
    "email": "chijo@labenu",
    "type": "Teacher"
  },
  {
    "id": 9,
    "name": "Lais",
    "email": "lais@labenu",
    "type": "Teacher"
  },
  {
    "id": 10,
    "name": "Bruno",
    "email": "bruno@labenu",
    "type": "Teacher"
  }
]
```
<h4 align="right"><a href="#topo">Topo</a></h4>

- **Exercício 3**

>getFiveUser.ts

* Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, e permita que o usuário possa passar a página que deseja ver. O número da página deve ser passado por query params.

```java
import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getFiveUser(
   req: Request,
   res: Response
):Promise<void> {
  try {
     
    let page = Number(req.query.page);
    let size = Number(req.query.size)
    let limit = 5

   if(isNaN(page) || page < 1) {
    page = 1
  }

  if(isNaN(size) || size < 1) {
    size = 5
  }
      const getUserName = await connection("aula48_exercicio")
     .select()
     .limit(size)
     .offset((page -1)*limit)

     res.status(200).send(getUserName)
     
  } catch (error: any) {
      res.send(error.message || error.sqlMessage)
  }
}
```
```java
###
Send Request
GET http://localhost:3003/five?page=1&size=2
```
```java
Response(ms)

HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 128
ETag: W/"80-OB7854j8jn/+VEMu+iJyU9KjaZg"
Date: Wed, 27 Apr 2022 18:30:30 GMT
Connection: close

[
  {
    "id": 1,
    "name": "Soter",
    "email": "soter@labenu",
    "type": "Teacher"
  },
  {
    "id": 2,
    "name": "João",
    "email": "joao@labenu",
    "type": "Teacher"
  }
]
```
* Outro exemplo

``` java
###
Send Request
GET http://localhost:3003/five?page=3&size=4
```
``` java
Response(ms)

HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 283
ETag: W/"11b-FpXoF9eXuAzBy9EG99oZyQO3JDw"
Date: Wed, 27 Apr 2022 18:32:26 GMT
Connection: close

[
  {
    "id": 11,
    "name": "Luciano",
    "email": "luciano@labenu",
    "type": "Operations"
  },
  {
    "id": 12,
    "name": "Miau",
    "email": "miau@labenu",
    "type": "Operations"
  },
  {
    "id": 13,
    "name": "Sekine",
    "email": "sekine@labenu",
    "type": "Operations"
  },
  {
    "id": 14,
    "name": "Nathalia",
    "email": "nathalia@labenu",
    "type": "Operations"
  }
]
```
<h4 align="right"><a href="#topo">Topo</a></h4>

- **Exercício 4**

>getAllFuncs.ts

* Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação). Atribua valores padrão para filtragem, ordenação e paginação para que:

* a)  Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
* b) Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem **decrescente;**
* c) Caso o usuário não for.orderBy(sort, order)neça número de página, deve começar na página 1

>getAllFuncs.ts

``` java
import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllFuncs(
   req: Request,
   res: Response
):Promise<any> {
  try {

     let name = req.query.name as string;
     let sort = req.query.sort as string;
     let getType = req.params.type as string;
     let page = Number(req.query.page)
     let size = Number(req.query.size)
     let offset = size*(page-1)
     let limit = 5
 
   if(!name){
      name ="%"
    }
    if(sort !== "name" && sort !=="type"){
      sort = "name"
   }
  //  if(!getType || getType.toUpperCase() != "CX"  && getType.toUpperCase() != "TEACHER"  && getType.toUpperCase() != "OPERATIONS"  ) {
  //   throw new Error("Você precisa informar um tipo válido - Precisa digitar um type - Teacher ou CX ou operations")
  // }
    if(isNaN(page) || page < 1) {
      page = 1
    }
  
    if(isNaN(size) || size < 1) {
      size = 5
    }
     const getAll = await connection("aula48_exercicio")
     .select()
     .where("name", "like", `%${name}%`)
     .orWhere("type", "like", `%${getType}`)
     .orderBy(sort, "DESC")
     .limit(size)
     .offset(offset)


     res.status(200).send(getAll)
     
  } catch (error: any) {
      res.send(error.message || error.sqlMessage)
  }
}

```
``` java
###
Send Request
GET http://localhost:3003/users/allfuncs?
```
``` java
Response(ms)

HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 345
ETag: W/"159-z3I88v8j70ND7aHUrkfDo11SgW0"
Date: Wed, 27 Apr 2022 21:14:50 GMT
Connection: close

[
  {
    "id": 18,
    "name": "Vitória",
    "email": "vitoria@labenu",
    "type": "Operations"
  },
  {
    "id": 20,
    "name": "Tainah",
    "email": "mtainah@labenu",
    "type": "Operations"
  },
  {
    "id": 1,
    "name": "Soter",
    "email": "soter@labenu",
    "type": "Teacher"
  },
  {
    "id": 6,
    "name": "Severo",
    "email": "severo@labenu",
    "type": "Teacher"
  },
  {
    "id": 13,
    "name": "Sekine",
    "email": "sekine@labenu",
    "type": "Operations"
  }
]

```
<h4 align="right"><a href="#topo">Topo</a></h4>
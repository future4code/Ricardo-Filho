# To Do List
---

### Exercício da Semana

>Olá, tudo bem? O exercício de hoje vai lidar com um tema que vocês já estão acostumados. Já pedimos para vocês fazerem só o Front, já pedimos para fazerem o Front integrado, já até pedimos um projeto usando somente Node para isso: uma To Do List. Dessa vez, vai ser um pouquinho diferente, vocês vão fazer o backend dela.

>Para começar a explicar o nosso sistema vamos falar sobre os usuários. O cadastro deles deve ser simples, pedindo: um nome, um apelido (nickname) e um email

>As tarefas são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão que executa-las. Mais de um usuário pode ser diretamente responsável de mesma tarefa. Os status das tarefas são 3: *to do* ("a fazer"), *doing* ("fazendo") e *done* ("feita").

>Dados esses requisitos do sistema, você deve modelar todo o banco de dados (usando MySQL) e implementar o backend. Leia atentamente a lista de endpoints mostrada abaixo antes de começar a modelagem do banco, aí estão descritas todas as informações necessárias para criá-los.

## Endpoints Mínimos

#### 1) - Criar usuário
>✅ - O seu código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos.

>✅ - O seu código deve gerar o id do usuário

```sql
app.post("/user", async (req:Request, res: Response) =>
{
  try {
    const {name, nickname, email } = req.body;
    if(!name || !nickname || !email || email.length < 10){
      throw new Error("Invalid name or nickname or email, os campos não podem estar vazios e o e-mail não pode ter menos de 10 caracteres")
    };
    
    await connection("ToDoUser")
    .insert({
    id:idCreat(),
    name,
    nickname,
    email
    })
    
    
  res.status(201).send("Usuário Criado com Sucesso")

} catch (error: any) {
  res.status(400).send(error.message)
} });
```

```sql
request.rest:

###
POST http://localhost:3003/user
Content-Type: application/json

{
    "name": "Ricardo Ribeiro",
    "nickname": "RickHard",
    "email": "rickhard@bol.com.br"
}
```
```sql
SELECT * FROM ToDoUser;
```
id                                   |     name       | nickname    | email
-------------------------------------|----------------|-------------|-------------------|
3e0bbaaf-47e6-493b-8563-bee769e28a26 |Ricardo Ribeiro |RickHard     |rickhard@bol.com.br

#### 2) - Pegar usuário pelo id


>✅ - O endpoint deve retornar um erro se não encontrar o usuário

```sql
app.get("/user/:id", async (req: Request, res: Response): Promise<any>=>
{
  try{
    const userId = req.params.id;
    
    if(!userId){
      return res.status(400).send("Você precisa informar um ID válido")
     }
    
    if(userId.length < 36 ){
     return res.status(404).send("Você precisa informar um ID válido")
    }
    
    
    const User = await connection("ToDoUser")
    .where({id: userId});
    
    res.status(200).send(User)

  } catch (error: any) {
    res.status(400).send(error.message)
  } });
```
```sql
request.rest:

###

GET http://localhost:3003/user/3e0bbaaf-47e6-493b-8563-bee769e28a26

```
```sql

[
  {
    "id": "3e0bbaaf-47e6-493b-8563-bee769e28a26",
    "name": "Ricardo Ribeiro",
    "nickname": "RickHard",
    "email": "rickhard@bol.com.br"
  }
]

```

```sql
request.rest:

###

GET http://localhost:3003/users/1

```
```sql

HTTP/1.1 404 Not Found
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 36
ETag: W/"24-WGFCBsqrmbG6THYEQ8CmFuQHP6A"
Date: Mon, 25 Apr 2022 17:43:39 GMT
Connection: close

Você precisa informar um ID válido

```

#### 3) - Editar usuário

>✅ - O seu código só deve alterar o que for enviado

>✅ - Se algum valor enviado for vazio, deve retornar um erro

```sql
app.put("/user/edit/:id", async (req: Request, res: Response): Promise<any>=>{
   
  try{
    const userId = req.params.id;
    const nameUser = req.body.name;
    const nicknameUser = req.body.nickname;

    if (!userId) {
      return res.status(204).send("Você precisa digitar um id válido")
    }
    if(userId.length < 36 ){
      return res.status(206).send("Você precisa digitar um id válido, seu id está faltando caracter ou caracteres")
    }
    if (!nameUser || !nicknameUser ) {
      return res.status(405).send("Você precisa digitar um name ou nickname válido")
    }
    if (nameUser !== 'string' || nicknameUser !== 'string') {
      return res.status(203).send("O name ou nickname devem ser uma string")
    }
       
  await connection("ToDoUser")
    .update({
      name: nameUser,
      nickname: nicknameUser,
    }).where({ id: userId });
    
    res.status(200).send("Usuário alterado com sucesso")
  } catch (error) {
    res.status(400).send("An unexpected error occurred")
}
})
```
```sql
request.rest:

### 03 - Editar usuário pegando pelo id
PUT http://localhost:3003/users/edit/736ab49e-a8d4-4297-9b47-547cc6a218f1
Content-Type: application/json

{
    "name": "try",
    "nickname": "Trinity",
    "email": "teste@teste.com"
}
```
```sql
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 29
ETag: W/"1d-WJ5druhwCVrbmnCrLuI4If+5uOY"
Date: Mon, 25 Apr 2022 17:58:34 GMT
Connection: close

Usuário alterado com sucesso
```
```sql
request.rest:

### 02 - Pega usuário pelo id

GET http://localhost:3003/user/736ab49e-a8d4-4297-9b47-547cc6a218f1
```
```sql
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 106
ETag: W/"6a-Y20jlC5617xM38igQJJ/JunizoQ"
Date: Mon, 25 Apr 2022 18:01:51 GMT
Connection: close


[
  {
    "id": "736ab49e-a8d4-4297-9b47-547cc6a218f1",
    "name": "try",
    "nickname": "Trinity",
    "email": "try@bol.com.br"
  }
]
```
>Note que mesmo passando um email apenas os name e nickname fora alterados, pois apenas estes campos setados para aceitar um update.
----------------------------------------------------------------
>usando um dado faltando "name":

```sql
request.rest:

### 03 - Editar usuário pegando pelo id
PUT http://localhost:3003/user/edit/736ab49e-a8d4-4297-9b47-547cc6a218f1
Content-Type: application/json

{
    "name": "",
    "nickname": "Try"
}
```
>Resposta: 
```sql
HTTP/1.1 405 Method Not Allowed
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 49
ETag: W/"31-+cDQw2zOcm3OPv+OLp6N700ETAk"
Date: Mon, 25 Apr 2022 18:41:41 GMT
Connection: close

Você precisa digitar um name ou nickname válido
```

#### 4) - Criar tarefa

>✅ - O seu código deve validar se todos os campos não estão vazios

>✅ - O seu código deve gerar o id da tarefa

>✅ - A data deve se recebida no formato mostrado acima: DD/MM/YYYY e o seu código deve fazer a conversão necessária para salvar no banco

```sql
app.post("/task", async (req: Request, res: Response): Promise<void>=>{
  
  try{
    const {title, description, limitdate, creatoruserid } = req.body
    const dateConvert = limitdate.split("/").reverse().join("-")
    if(!title ) {
      throw new Error("Parâmetro Title ausente")
    };
    if(!description) {
      throw new Error("Parâmetro description ausente")
    };
    if(!limitdate) {
      throw new Error("Parâmetro limitdate ausente ou informado erroneamente")
    };
    if(!creatoruserid) {
      throw new Error("Parâmetro creatoruserid ausente ou informado erroneamente")
    };
    await connection("ToDoTask")
    .insert({
    id:idCreat(),
    title,
    description,
    status: "to_do",
    limit_date: dateConvert,
    creator_user_id:creatoruserid
    })
    res.status(201).send("Tarefa Criada com Sucesso")
  }catch (error: any) {
    res.status(400).send(error.message)
}})
```
```SQL
request.rest:

### 04 - Criar Tarefa

POST http://localhost:3003/task
Content-Type: application/json

{
    "title":"Aprender JavaScrip",
    "description":"Se eu não aprender to ferrado",
    "limitdate":"30/04/2022",
    "creatoruserid": "3e0bbaaf-47e6-493b-8563-bee769e28a26"
}
```
#### 5) - Pegar tarefa pelo id
>✅ - O endpoint deve retornar um erro se não encontrar a task

>✅ - Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador

>✅ - O seu código deve converter a data recebida do banco para o formato mostrado acima (DD/MM/YYYY)

```sql
app.get("/task/:id", async (req: Request, res: Response): Promise<any>=>
{
  try{
    const userId = req.params.id;

    if(!userId){
      return res.status(400).send("Você precisa informar um ID válido")
     }
    
    if(userId.length < 36 ){
     return res.status(404).send("Você precisa informar um ID válido")
    }
    
    
    const taskId = await connection("ToDoTask")
    .innerJoin(
      "ToDoUser",
      "ToDoTask.creator_user_id" ,
      "ToDoUser.id"
    ).select("ToDoTask.*", "ToDoUser.nickname")
    .where({"ToDoTask.id":userId});
    
    const Date = (moment(taskId[0].limit_date)).format('DD/MM/YYYY')
    taskId[0].limit_date = Date

    res.status(200).send(taskId[0])

  } catch (error: any) {
    res.status(400).send(error.message)
  } });
```
```SQL
request.rest:

### 05 - Pegar tarefa pelo id

GET http://localhost:3003/task/90661e46-fd1c-495e-87d5-9ea8bc2beda5
```
```SQL
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 243
ETag: W/"f3-lcMjh4csUW4Qlix5l92d9Vp6RxY"
Date: Mon, 25 Apr 2022 19:34:57 GMT
Connection: close

{
  "id": "90661e46-fd1c-495e-87d5-9ea8bc2beda5",
  "title": "Aprender JavaScrip",
  "description": "Se eu não aprender to ferrado",
  "status": "to_do",
  "limit_date": "30/04/2022", (note a data convertida)
  "creator_user_id": "3e0bbaaf-47e6-493b-8563-bee769e28a26",
  "nickname": "RickHard"
}
```
```SQL
SELECT * FROM ToDoTask
WHERE id = "90661e46-fd1c-495e-87d5-9ea8bc2beda5";
```
id                                   |     title        |         description         | limitdate         | creatoruserid
-------------------------------------|------------------|-----------------------------|-------------------| ---------------
3e0bbaaf-47e6-493b-8563-bee769e28a26 |Aprender JavaScrip|Se eu não aprender to ferrado |2022/04/30        |3e0bbaaf-47e6-493b-8563-bee769e28a26

## Desafios

#### 6) - Pegar todos os usuários

>✅ - O endpoint deve retornar um array vazio se não encontrar os resultados

```sql
app.get("/users/all", async (req: Request, res: Response) => {
  const users = await connection("ToDoUser").select();

  res.status(200).send(users)
});
```
```SQL
request.rest:

### 06 - Pegar todos os usuários

GET http://localhost:3003/users/all
```
```SQL
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 587
ETag: W/"24b-lkmic34LD7dRaZawPRe19YhZI2E"
Date: Mon, 25 Apr 2022 19:50:14 GMT
Connection: close

[
  {
    "id": "3e0bbaaf-47e6-493b-8563-bee769e28a26",
    "name": "Ricardo Ribeiro",
    "nickname": "RickHard",
    "email": "rickhard@bol.com.br"
  },
  {
    "id": "702a0d33-a763-46fc-a09f-1c8053d93ffb",
    "name": "Andersson Silva",
    "nickname": "The_Door",
    "email": "The_Door@bol.com.br"
  },
  {
    "id": "736ab49e-a8d4-4297-9b47-547cc6a218f1",
    "name": "try",
    "nickname": "Trinity",
    "email": "try@bol.com.br"
  },
  {
    "id": "aad0b65b-3af9-4874-ae18-075ba333bcbf",
    "name": "Gabriel Silva",
    "nickname": "Gaga",
    "email": "gaga@bol.com.br"
  },
  {
    "id": "e2909409-3815-4c04-b5ac-59e1119406c1",
    "name": "Minaíde Simões",
    "nickname": "MinaSim",
    "email": "MinaSim@bol.com.br"
  }
]
```

#### 7) - Pegar tarefas criadas por um usuário

>✅ - O seu código deve verificar se foi enviado o creatorUserId e devolver um erro específico caso não tenha sido.

>✅ - O endpoint deve retornar um array vazio se não encontrar os resultados.

>✅ - Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador.

>✅ - O seu código deve converter a data recebida do banco para o formato mostrado acima (DD/MM/YYYY).

```sql
app.get("/task", async (req: Request, res: Response): Promise<any>=>
{
  try{
    const userId = req.query.id as string;
    
    if(!userId){
      return res.status(400).send("Você precisa informar um ID válido")
     }
    
    if(userId.length === 0 ){
     return res.status(404).send("O ID não pode ser vazio")
    }
    if(userId.length < 36 ){
      return res.status(206).send("Seu ID está errado ou incompleto")
     }
    
    const User = await connection("ToDoTask")
    .innerJoin(
      "ToDoUser",
      "ToDoTask.creator_user_id" ,
      "ToDoUser.id"
    )
    .select("ToDoTask.*", "ToDoUser.nickname")
    .where({creator_User_Id: userId});
    
    const Date = (moment(User[0].limit_date)).format('DD/MM/YYYY')
    User[0].limit_date = Date

    res.status(200).send(User[0])

  } catch (error: any) {
    res.status(400).send(error.message)
  } });
```
```sql
request.rest:

### 07 - Pegar tarefas criadas por um usuário

GET http://localhost:3003/task?id=702a0d33-a763-46fc-a09f-1c8053d93ffb
```
``` sql
{
  "id": "90661e46-fd1c-495e-87d5-9ea8bc2beda5",
  "title": "Aprender JavaScrip",
  "description": "Se eu não aprender to ferrado",
  "status": "to_do",
  "limit_date": "30/04/2022",
  "creator_user_id": "3e0bbaaf-47e6-493b-8563-bee769e28a26"
}
```

#### 8) - Pesquisar usuário

>✅ - O seu código deve verificar se foi enviado a query e devolver um erro específico caso não tenha sido

>✅ - Você deve buscar no banco por usuários cujo apelido ou email contenham a query fornecida

>✅ - O endpoint deve retornar um array vazio se não encontrar os resultados

``` sql
app.get("/user", async (req: Request, res: Response): Promise<any>=>
{
  try{
    const userId = req.query.id as string;
    
    if(!userId){
      return res.status(400).send("Você precisa informar um ID válido")
     }
    
    if(userId.length === 0 ){
     return res.status(404).send("Você precisa informar um ID válido")
    }
    
    
    const User = await connection("ToDoUser")
    .where({id: userId});
    
    res.status(200).send(User[0])

  } catch (error: any) {
    res.status(400).send(error.message)
  } });
```
```sql
request.rest:

### 08 - Pesquisar usuário 

GET http://localhost:3003/user?nickname=RickHard
```
``` sql
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 122
ETag: W/"7a-n8P1IteT5xdSAdBWZtM2YLRoM+g"
Date: Tue, 26 Apr 2022 00:24:28 GMT
Connection: close

{
  "id": "3e0bbaaf-47e6-493b-8563-bee769e28a26",
  "name": "Ricardo Ribeiro",
  "nickname": "RickHard",
  "email": "rickhard@bol.com.br"
}
```

#### 19) - Deletar Tarefa

>✅ - O seu código deve validar se o id da task foi enviado.

>✅ - Ao apagar a task, todas as relações de usuários responsáveis relacionadas a essa task devem ser apagadas.

```sql
app.delete("/task/:id", async (req: Request, res: Response): Promise<any> =>{
  try{
    const idTask = req.params.id
    if(!idTask){
      return res.status(400).send("Você precisa informar um ID de Tarefa válido")
     }
    
    if(idTask.length === 0 ){
     return res.status(404).send("O campo ID não pode estar vazio")
    }

    await connection("ToDoTask").delete().where({id: idTask})

    res.status(200).send("Tarefa apagada com sucesso")
  }catch(error: any){
    res.status(500).send(error.sqlMessage || error.message)
  }
})
```

#### 20) - Deletar Usuário

>✅ - O seu código deve validar se o id do usuário foi enviado

>✅ - Ao apagar a task, todas as relações de usuários responsáveis relacionadas a essa task devem ser apagadas

>✅ - Além disso, todas as tasks criadas por esse usuário devem ser deletas e todas as relações de responsáveis atraeladas a essas tasks

```sql
// 20) - Deletar Usuário
app.delete("/user/:id", async (req: Request, res: Response): Promise<any> =>{
  try{
    const userId = req.params.id
    if(!userId){
      return res.status(400).send("Você precisa informar um ID de usuário válido")
     }
    
    if(userId.length === 0 ){
     return res.status(404).send("O campo ID não pode estar vazio")
    }

    await connection("ToDoUser").delete().where({id: userId})

    res.status(200).send("Usuário apagado com sucesso")
  }catch(error: any){
    res.status(500).send(error.sqlMessage || error.message)
  }
})
```
```sql
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 28
ETag: W/"1c-EkXBSMqTCVrghssDe6p12wD4Cp8"
Date: Tue, 26 Apr 2022 00:44:04 GMT
Connection: close

Usuário apagado com sucesso
```
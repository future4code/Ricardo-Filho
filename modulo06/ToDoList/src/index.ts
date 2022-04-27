import express, { Response, Request } from "express";

import { User, app } from "./data";
import { connection } from "./connection";
import { v4 as idCreat } from 'uuid';
import moment from "moment";

const Errors: { [chave: string]: { status: number; message: string } } =
{
  BAD_REQUEST: {
    status: 400,
    message: "Valores incorretos" },
  AUTHORIZATION_NOT_FOUND: {
    status: 401,
    message: "Favor enviar header authorization",
  },
  PRODUCT_NOT_FOUND: { status: 404, message: "User não encontrado" },
  PRODUCT_EXISTS: { status: 409, message: "Esse User já existe" },
  MISSING_PARAMETERS: {
    status: 422,
    message: "Alguma informação está faltando. Consulte a documentação.",
  },
  SOMETHING_WENT_WRONG: { status: 500, message: "Algo deu errado" },
};

app.get("/users", async (req: Request, res: Response) => {
  const Users = await connection("ToDoUser").select();

  res.status(200).send(Users)
});

// 1) - Criar usuário 
app.post("/user", async (req:Request, res: Response): Promise<void>=>
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

//2) - Pegar usuário pelo id
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


// 3) - Editar usuário

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

// 4) - Criar tarefa

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


// 5) - Pegar tarefa pelo id

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

// 6) -  Pegar todos os usuários

app.get("/users/all", async (req: Request, res: Response) => {
  const users = await connection("ToDoUser").select();

  res.status(200).send(users)
});

// 7) - Pegar tarefas criadas por um usuário

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

// 8) - Pesquisar usuário

app.get("/user", async (req: Request, res: Response): Promise<any>=>
{
  try{
    const userNick = req.query.nickname as string;
    
    if(!userNick){
      return res.status(400).send("Você precisa informar um nickname válido")
     }
    
    if(userNick.length === 0 ){
     return res.status(404).send("O campo query não pode estar vazio")
    }
    
    
    const User = await connection("ToDoUser")
    .where({nickname: userNick});
    
    res.status(200).send(User[0])

  } catch (error: any) {
    res.status(400).send(error.message)
  } });









// 19) - Deletar tarefa
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







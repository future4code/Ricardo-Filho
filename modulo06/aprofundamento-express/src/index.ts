import express, { Request, response, Response } from "express";
import cors from "cors"
import {todos} from "./todos"
import {v4 as generateId} from "uuid"

const app = express();

app.use(express.json())
app.use(cors())

app.listen(3003, ()=> {
    console.log("Servidor Rodando...")   
})

//Exercicio 01 
app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
})

//Exercicio 02 - Arquivo todos.ts

//Exercicio 03 - Arquivo todos.ts

//Exercicio 04:
app.get("/afazeres/:tarefa", (req: Request, res: Response) => {          
     const getAfazeres = req.params.tarefa

        const afazer = todos.filter((todo)=>{
            if(getAfazeres.toLocaleLowerCase() === "true") {
                return todo.completed === true;

            }else if (getAfazeres.toLocaleLowerCase() === "false"){
                return todo.completed === false;
                
            } else {
                return res.status(400).send("Informe o Params correto true ou false");
            }
        })
        res.status(200).send(afazer)
    })
//Exercicio 05:
app.post("/todos/addTarefa", (req: Request, res: Response) =>{
    const userId = Number(req.headers.authorization)
    const title: string = req.body.title
  
    if(!userId) res.status(400).send("Usuário não existe")
   
    const addTask = {
        userId: userId,
        id: generateId(),
        title: title,
        completed: false,
    }
    todos.push(addTask)
    res.status(200).send(todos)
  })

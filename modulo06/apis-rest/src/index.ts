import express , { Response, Request } from 'express';
import cors from "cors";
import { User, users, UserType } from "./data";

const app = express();

app.use(express.json());
app.use(cors())

const Errors: { [chave: string]: {status: number, message: string} } = {
    BAD_REQUEST: {status:400, message:"Valores incorretos"},
    AUTHORIZATION_NOT_FOUND: {status: 401, message: "Favor enviar header authorization"},
    PRODUCT_NOT_FOUND: {status: 404, message: "Produto não encontrado"},
    PRODUCT_EXISTS: {status: 409, message: "Esse produto já existe"},
    MISSING_PARAMETERS: {status: 422, message: "Alguma informação está faltando. Consulte a documentação."},
    SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"},
}

// 01) a) - o método usado seria o GET
// 01) b) - app.get("/allUsers", (res: Response, req: Request) => {})


//02) - 
app.get("/users", (req: Request, res: Response) => {
    let errorCode = 400;
    try{
        const type: string = req.query.type as string;

        if(type.toLocaleUpperCase()!== UserType.ADMIN && type.toLocaleUpperCase() !== UserType.NORMAL){
            errorCode = 404; // not found
            throw new Error("User not Found");
          }
          const user = users.filter((user) => user.type === type.toLocaleUpperCase());
          res.status(200).send(user)
    }catch(error: any){
        res.status(errorCode).send(error.message);
    }
    
})

app.listen(3003, ()=> {
    console.log("Servidor Rodando...")   
})

//02) a) - Filtrei o type "ADMIN" e pedi para retornar somente eles.
//02) b) - usando o try catch e IF
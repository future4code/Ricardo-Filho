import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());

app.use(cors());

const Errors: { [chave: string]: { status: number; message: string } } = {
  BAD_REQUEST: { status: 400, message: "Valores incorretos" },
  AUTHORIZATION_NOT_FOUND: {
    status: 401,
    message: "Favor enviar header authorization",
  },
  PRODUCT_NOT_FOUND: { status: 404, message: "Produto não encontrado" },
  PRODUCT_EXISTS: { status: 409, message: "Esse produto já existe" },
  MISSING_PARAMETERS: {
    status: 422,
    message: "Alguma informação está faltando. Consulte a documentação.",
  },
  SOMETHING_WENT_WRONG: { status: 500, message: "Algo deu errado" },
};

const getActorById = async (id: number): Promise<void> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'`);
      return result[0][0]
    }
    
app.get("/actor/:id", async (req:Request, res: Response) =>
{
    try {
    const id = Number(req.params.id);
    const actor = await getActorById(id);
    
    res.status(200).send(actor)

  } catch (error: any) {
    res.status(400).send({    message: Errors.message,     })
  } });


// Exercício 1
/* a) - Explique como é a resposta que temos quando usamos o raw.
 R) - se usarmos apenas um [0], temos uma array com um objeto dentro. Quando usamos
 dois [0][0] temos como resposta apenas o objeto chamado pelo id.*/

 // b) - Faça uma função que busque um ator pelo nome;

  app.get("/actor", async (req:Request, res: Response) =>
{
  try {
    const name = req.query.name as string;

    const getActor = await connection("Actor").where('name', 'like', `%${name}%`)
    
  res.status(200).send(getActor)

} catch (error: any) {
  res.status(400).send({message: Errors.message})
} });


// c) -  Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.

app.get("/gender/actor", async (req: Request, res: Response): Promise<any> => {
  try {
    
  //   const countGender = await connection("Actor")
  //  .where({ gender: req.query.gender });
  
  const gender = req.query.gender
  const [result] = await connection.raw(`
  SELECT COUNT(*), gender
  FROM Actor
  WHERE gender = "${gender}"
  GROUP BY gender
  `)
    res.status(200).send(result[0]);
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message);
  }
});

// Exercício 2
// a) - Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão:
app.put("/actor/:id", async (req: Request, res: Response): Promise<any> =>{
try{
  await connection("Actor").update({
    salary: req.body.salary,
  })
  .where({
    id: req.params.id
  })
  res.status(200).send({ message: "Salário alterado"})
} catch(error: any){
  res.status(500).send(error.sqlMessage || error.message)
}
})

// b) - Uma função que receba um id e delete um ator da tabela
app.delete("/actor/:id", async (req: Request, res: Response): Promise<any> =>{
  try{
    await connection("Actor").delete().where({id: req.params.id})

    res.status(200).send({    message: "Ator Deletado"})
  }catch(error: any){
    res.status(500).send(error.sqlMessage || error.message)
  }
})

// c) - Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender
app.get("/media-salario/actor", async (req: Request, res: Response): Promise<void> => {
  try {
    
  const gender = req.query.gender
  const [mediaResult] = await connection("Actor")
    .avg("salary as average")
    .where({ gender })
    ;
  res.status(201).send(mediaResult);
} catch (error: any) {
  res.status(500).send(error.sqlMessage || error.message);
}
});





const server = app.listen(process.env.port || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor Rodando em http://localhost: ${address.port}`);
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
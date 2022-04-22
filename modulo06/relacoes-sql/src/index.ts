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

/* 01 - a) - Chave estrangeira é a é a chave que permite a referência
a registros oriundos de outras tabelas. Ou seja, é o campo ou conjunto
de campos que compõem a chave primária de uma outra tabela*/

/*
01 - b) - Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
CREATE TABLE Rating (
  id VARCHAR(255) PRIMARY KEY,
  comment TEXT NOT NULL,
  rate FLOAT NOT NULL,
  movie_id VARCHAR(255),
  FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);
*/

/* 01 - c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`joy-419954-ricardo-filho`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`filmes_id`) REFERENCES `filmes` (`id`))
  R: Não é possível adicionar ou atualizar uma linha pois não existe a referencia do Id da chave estrangeira.
*/

app.get("/actor/:id", async (req:Request, res: Response) =>
{
    try {
    
    
    res.status(200).send()

  } catch (error: any) {
    res.status(400).send({    message: Errors.message,     })
  } });


const server = app.listen(process.env.port || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor Rodando em http://localhost: ${address.port}`);
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
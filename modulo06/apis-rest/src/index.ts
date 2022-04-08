import express, { Response, Request } from "express";
import cors from "cors";
import { User, users, UserType } from "./data";
import { AddressInfo } from "net";

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

// 01) a) - o método usado seria o GET
// 01) b) - app.get("/allUsers", (res: Response, req: Request) => {})

//02) - a) -Filtrei o type "ADMIN" e pedi para retornar somente eles.

app.get("/type", (req: Request, res: Response) => {
  const adminUser = users.filter((User) => {
    return User.type === "ADMIN";
  });
  res.status(200).send(adminUser);
});

//02) b) - usando o try catch e IF

app.get("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const type: string = req.query.type as string;

    if (
      type.toLocaleUpperCase() !== UserType.ADMIN &&
      type.toLocaleUpperCase() !== UserType.NORMAL
    ) {
      errorCode = 404; // not found
      throw new Error("User not Found");
    }
    const user = users.filter((user) => user.type === type.toLocaleUpperCase());
    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

//03) -
//a) -

//b) -
app.get("/get_user", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name: string = req.query.name as string;

    const user: User | undefined = users.find(
      (User) => User.name.toLocaleUpperCase() === name.toLocaleUpperCase()
    );

    if (!user) {
      errorCode = 404;
      throw new Error("User not found");
    }
    res.status(200).send({ user });
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

//04) -

app.put("/users", (req: Request, res: Response) => {
    let errorCode = 400;
  try {
    const { id, name, type, email, age }: User = req.body;
    
    
    if (!id || !name || !type || !email || !age) {
      errorCode = 422;
      throw new Error("One or more fields are empty");
    }
    const newUser: User = {
      id,
      name,
      type,
      email,
      age,
    };

    users.push(newUser);

    res.status(200).send(newUser);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor Rodando em http://localhost: ${address.port}`);
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
//4) a) - Nada mudou fazendo a troca para put.
//4) b) - A forma mais correta para criação seria o POST, e para edição seria o PUT.
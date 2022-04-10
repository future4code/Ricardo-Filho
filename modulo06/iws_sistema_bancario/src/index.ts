import express, { Response, Request } from "express";
import cors from "cors";
import { User, users, Transaction } from "./users";
import { AddressInfo } from "net";
import { Errors } from "./Errors";

export const app = express();

app.use(express.json());
app.use(cors());

app.get("/acounts", (req: Request, res: Response) => {
  res.send(users);
});

app.post("/acount/createAcount", (req: Request, res: Response) => {
  try {
    const { name, cpf, birthDate, balance }: User = req.body;

    const checkDateBirth = (birth: string): boolean => {
      const atualDate = new Date().getTime();
      const birthDate: number = Date.parse(
        birth.split("/").reverse().join("/")
      );

      const age = (atualDate - birthDate) * (3.17 * 10 ** -11);
      return age >= 18;
    };

    const checkCPF = users.find((acount) => {
      return cpf === acount.cpf;
    });

    if (!checkDateBirth(birthDate)) {
      throw new Error(Errors.NOT_AUTHORIZED.message);
    }

    if (checkCPF) {
      throw new Error(Errors.CPF_EXISTS.message);
    }
    const newAcount: User = {
      name,
      cpf,
      birthDate,
      balance,
    };
    users.push(newAcount);
    res.status(201).send("Conta criada");
  } catch (error: any) {
    switch (error.message) {
      case Errors.NOT_AUTHORIZED.message:
        res.status(Errors.NOT_AUTHORIZED.status).send(error.message);
        break;
      case Errors.CPF_EXISTS.message:
        res.status(Errors.CPF_EXISTS.status).send(error.message);
        break;
    }
  }
});

app.get("/acount/balance", (req: Request, res: Response) => {
  try {
    const cpf: string = req.query.cpf as string;

    const getBalance = users.find((clientCpf) => {
      return cpf === clientCpf.cpf;
    });
    if (!getBalance) {
      throw new Error(Errors.CPF_NOT_FOUND.message);
    }
    res.status(200).send(getBalance);
    
  } catch (error: any) {
    switch (error.message) {
      case Errors.CPF_NOT_FOUND.message:
        res
          .status(Errors.CPF_NOT_FOUND.status)
          .send(Errors.CPF_NOT_FOUND.message);
        break;
      default:
        res
          .status(Errors.SOMETHING_WENT_WRONG.status)
          .send(Errors.SOMETHING_WENT_WRONG.message);
    }
  }
});

app.put("/user/add-balance", (req: Request, res: Response) => {
  try {
    const { name, cpf, balance }: User = req.body;

    const client: any | User = users.find((clientCpf) => {
      return cpf === clientCpf.cpf;
    });
    if (!client || client.name !== name) {
      throw new Error("CPF ou Nome não encontrado");
    }
    if (balance < 5) {
      throw new Error("Valor mínimo para depósito R$ 5,00");
    }
    client.balance += balance;

    const notification = {
      message: `Olá ${client.name}, foi realizado o depósito de ${balance} em sua conta.`,
      balanceClient: client.balance
    }

    res.status(200).send(`${notification.message}, Seu Saldo atual é: ${notification.balanceClient}`)
  } catch (error: any) {
    switch (error.message) {
      case Errors.CPF_NOT_FOUND.message:
        res
          .status(Errors.CPF_NOT_FOUND.status)
          .send(Errors.CPF_NOT_FOUND.message);
        break;
      case Errors.PRODUCT_NOT_FOUND.message:
        res
          .status(Errors.PRODUCT_NOT_FOUND.status)
          .send(Errors.PRODUCT_NOT_FOUND.message);
        break;
      default:
        res
          .status(Errors.SOMETHING_WENT_WRONG.status)
          .send(Errors.SOMETHING_WENT_WRONG.message);
    }
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

app.put("/user/pay-bill/:authorization", (req: Request, res: Response) => {
  try {
    const authorization = req.params.authorization;

    const { purchase, date, descrition }: Transaction = req.body;
    
    const autorizationClient: User | any = users.find(
      (client) => client.cpf === authorization
    );

    if (!autorizationClient) {
      throw new Error(Errors.CPF_NOT_FOUND.message);
    }
        
    if(!purchase) {
      throw new Error(Errors.MISSING_PARAMETERS.message)
    }
    if(autorizationClient.balance < purchase){
      throw new Error("Saldo insuficiente, faça um depósito ou uma transferência para sua conta")
    }

    autorizationClient.balance -= purchase

    res.status(200).send(autorizationClient);
  } catch (error: any) {
    switch (error.message) {
      case Errors.CPF_NOT_FOUND.message:
        res
          .status(Errors.CPF_NOT_FOUND.status)
          .send(Errors.CPF_NOT_FOUND.message);
        break;
      case "Saldo insuficiente, faça um depósito ou uma transferência para sua conta":
        res
          .status(400)
          .send("Saldo insuficiente, faça um depósito ou uma transferência para sua conta");
        break;
      case Errors.MISSING_PARAMETERS.message:
        res
          .status(Errors.MISSING_PARAMETERS.status)
          .send(Errors.MISSING_PARAMETERS.message);
        break;
      default:
        res
          .status(Errors.SOMETHING_WENT_WRONG.status)
          .send(Errors.SOMETHING_WENT_WRONG.message);
    }
  }
});

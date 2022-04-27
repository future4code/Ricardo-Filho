import express from 'express';
import cors from "cors";
import { AddressInfo } from "net"

export const app = express();

app.use(express.json());
app.use(cors());

export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor Rodando em http://localhost: ${address.port}`);
      console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });

import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user";

export class UserController {

 public createUser = async (
   req: Request,
   res: Response
  ) => {
    try {
      const {
        email,
        name,
        password
      } = req.body;

      const input: UserInputDTO = {
        email,
        name,
        password
      }

      const userBusiness = new UserBusiness;
      await userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });

    } catch (error:any) {    
      res.status(400).send(error.message);
    }
  }
  
  async getAll(
    req: Request,
    res: Response
    ): Promise<void> {
    try {
      const userBusiness = new UserBusiness();
      const users = await userBusiness.getAll();

      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async deleteUser( req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const userBusiness = new UserBusiness();
      await userBusiness.deleteUser(id);

      res.status(200).send({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

}

import { InvalidEmail } from './../error/customErrors';
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

      if(!email || !email.includes("@")) {
        throw new InvalidEmail()
      }

      const userBusiness = new UserBusiness;
      userBusiness.createUser(input);

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

}

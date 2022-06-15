import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";
import { UserInputDTO } from "../model/user";

export class UserController {
    public createUser = async (
        req: Request,
        res: Response
        ) => {
            try {
                const{
                    name,
                    email,
                    password
                } = req.body;

                const input: UserInputDTO = {
                    name,
                    email,
                    password
                };

                const userBusiness = new UserBusiness;
                await userBusiness.createUser(input);

                res.status(200).send({
                    message: "Usuário Cadastrado com sucesso"
                });
            } catch (error:any) {
                res.status(400).send(error.message);
            }
    }

    public getAll = async (
        req: Request,
        res: Response
        ) => {
        try {
          const userBusiness = new UserBusiness();
          const users = await userBusiness.getAll();
    
          res.status(200).send(users);
        } catch (error:any) {
          res.status(400).send(error.message);
        }
      }
    
      public getUserId = async (req: Request, res: Response) => {
        try {
          const id = req.params.id;
          const userBusiness = new UserBusiness();
            const user = await userBusiness.getUserId(id);
            
            res.status(200).send({user})
        } catch (error:any) {
          res.status(400).send(error.message);
        }
      }

      async deleteUser( req: Request, res: Response): Promise<void> {
        try {
          const id = req.params.id;
          const userBusiness = new UserBusiness();
          await userBusiness.deleteUser(id);
    
          res.status(200).send({ message: "Usuário deletado com sucesso" });
        } catch (error:any) {
          res.status(400).send(error.message);
        }
      }



}
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/User";

// import { TokenGenerator } from '../services/TokenGenerator';
// import { UserDatabase } from '../data/UserDatabase';
// import { AuthenticationData } from "../model/Type";
// import { Authenticator } from "../services/Authenticator";


const userBusiness = new UserBusiness();
export class UserController {

      public signup = async (
        req: Request,
        res: Response
        ) => {
        try {
          
          const input: UserInputDTO = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role.toUpperCase()
          }
                    
         const token = await userBusiness.createUser(input);
      
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

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

      public login = async (
        req: Request,
        res: Response
        ) => {
        try {
          
          const input: LoginInputDTO = {
            email: req.body.email,
            password: req.body.password
          }
    
          const token = await userBusiness.loginUser(input);
          
          res.status(200).send({ message: "Usuário logado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
    
      public profile = async (
        req: Request,
        res: Response
        ): Promise<any> => {
        try {
          
          const token = req.headers.authorization as string;
          
          const authenticationUser = await new UserBusiness().profile(token)
                    
          res.status(200).send(authenticationUser);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
 
      public editUser = async (
        req: Request,
        res: Response
        ) => {
        try {

          const input: EditUserInputDTO = {
            name: req.body.name,
            id: req.params.id,
            token: req.headers.authorization!,
          };
    
          const token = await userBusiness.editUser(input);
    
          res.status(200).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };

}

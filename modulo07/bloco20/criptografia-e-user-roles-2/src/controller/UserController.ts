import { AuthenticationData } from './../model/type';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";
import { TokenGenerator } from '../services/TokenGenerator';
import { UserDatabase } from '../data/UserDatabase';


const userBusiness = new UserBusiness();
export class UserController {

      public signup = async (req: Request, res: Response) => {
        try {
          
          const input: UserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
          }
    
          const token = await userBusiness.createUser(input);
          console.log(input);
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public login = async (req: Request, res: Response) => {
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
    

      public profile = async (req: Request, res: Response) => {
        try {
          
          const token = req.headers.authorization as string;
          
          const authenticationUser: AuthenticationData = TokenGenerator.getData(token);

          if(authenticationUser.role !== "NORMAL"){
            throw new Error("Apenas usuários normais podem acessar o perfil!");
          }

          const user = await UserDatabase.getUserById(authenticationUser.id);
          
          res.status(200).send({ id: authenticationUser.id, role: authenticationUser.role, email: user.email });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
 



}

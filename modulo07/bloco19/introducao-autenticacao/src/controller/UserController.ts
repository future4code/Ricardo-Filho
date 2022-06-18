import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {

      public signup = async (req: Request, res: Response):Promise<void> => {
        try {
          const { email, password } = req.body;
    
          const input: UserInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.createUser(input);
    
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };   
      
      public login = async (req: Request, res: Response):Promise<void> => {
        try {
          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input);
    
          res.status(200).send({ message: "Usuário logado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };  

      public getUserData=async(req: Request, res: Response):Promise<any>=> {
        try {
          const token = req.headers.authorization as string
    
          const userBusiness = new UserBusiness()
          const result =await userBusiness.getUserData(token as string)
          
          res.status(200).send({email:result.email,password:result.password})
        } catch (error: any) {
          res.status(400).send(error.message);
              }
            }
 



}

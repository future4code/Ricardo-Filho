import { UserDatabase } from "../data/UserDatabase";
import  { HashManager }  from "../services/HashManager";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
} from "../model/user";
import { generateId } from "../services/generateId";
import { Authenticator } from "../services/Authenticator";
import { AuthenticationData } from "../model/type";
import { TokenGenerator } from "../services/TokenGenerator";

const userDatabase = new UserDatabase();

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string>=> {
    try {
      let{name, nickname, email, password, role} = input;

      if(!name || !nickname || !email || !password || !role) {
        throw new CustomError(400, "Preencha todos os campos corretamente!");
      }

      if(role !== "ADMIN") {
        role = "NORMAL";
      }

      const id = generateId();

      const hashPassword = await HashManager.generateHash(password);

      const user: user ={
        id,
        name,
        nickname,
        email,
        password: hashPassword,
        role,
      }

      await userDatabase.insertUser(user); 
    
      const token = Authenticator.generateToken({id, role});

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public loginUser = async (input: LoginInputDTO): Promise<string>=> {
    try {
      let{email, password} = input;

      if(!email || !password) {
        throw new CustomError(400, "Preencha todos os campos corretamente!");
      }

      const user = await userDatabase.findUserByEmail(email);

      const hashComparison = await HashManager.compareHash(password, user.password);

      if(!hashComparison) {
          throw new InvalidPassword()
      }
     
      const payload: AuthenticationData = {id: user.id, role: user.role};

      const token = Authenticator.generateToken(payload);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  
  public profile = async (str: string) => {
    try {

      const authenticationUser = TokenGenerator.getData(str);
         
       return authenticationUser;

      } catch (error: any) {
      throw new CustomError(400, error.message);
      }
    }
}
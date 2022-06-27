import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { AuthenticationData } from "../model/Type";
import { TokenGenerator } from "../services/TokenGenerator";
import { generateId } from "../services/GenerateId";

import {
  AuthorizedAdminOnly,
  CustomError,
  InvalidEmail,
  InvalidPassword,
  NotUser,
  Unauthorized,
} from "../error/CustomUsersError";

import {
  EditUserInputDTO,
  LoginInputDTO,
  User,
  UserInputDTO,
  User_Roles,
} from "../model/User";

const userDatabase = new UserDatabase();

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      let { name, email, password, role } = input;

      if (!name || !email || !password || !role) {
        throw new CustomError(400, "Preencha todos os campos corretamente!");
      }

      if (email.indexOf("@") === -1) {
        throw new InvalidEmail();
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      // if( role !== "ADMIN" ) {
      //   role = User_Roles.NORMAL;
      // }

      const id = generateId();

      const hashPassword = await HashManager.generateHash(password);

      const user: User = {
        id,
        name,
        email,
        password: hashPassword,
        role,
      };

      await userDatabase.insertUser(user);

      const token = Authenticator.generateToken({ id, role });

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getAll = async (): Promise<any> => {
    const userDatabase = new UserDatabase();
    const users = await userDatabase.getAll();

    if (!users) {
      throw new NotUser();
    }

    return users;
  };

  public loginUser = async (input: LoginInputDTO): Promise<string> => {
    try {
      let { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, "Preencha todos os campos corretamente!");
      }

      const user = await userDatabase.findUserByEmail(email);

      const hashComparison = await HashManager.compareHash(
        password,
        user.password
      );

      if (!hashComparison) {
        throw new InvalidPassword();
      }

      const payload: AuthenticationData = {
        id: user.id,
        role: user.role,
      };

      const token = Authenticator.generateToken(payload);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public profile = async (str: string): Promise<any> => {
    try {
      const authenticationUser = TokenGenerator.getData(str);

      const user = await new UserDatabase().getUserById(authenticationUser.id);

      const output = {
        id: user.id,
        email: user.email,
        name: user.name,
      };

      const { role } = TokenGenerator.getData(str);

      // if (role !== "ADMIN") {
      //   throw new AuthorizedAdminOnly();
      // }

      return output;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO): Promise<void> => {
    try {
      let { name, id, token } = input;

      if (!name || !id || !token) {
        throw new CustomError(400, "Preencha corretamente os campos");
      }

      const { role } = TokenGenerator.getData(token);

      // if (role !== "ADMIN") {
      //   throw new Unauthorized();
      // }

      const editedUser = {
        name,
        id,
      };

      await userDatabase.editUser(editedUser);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}

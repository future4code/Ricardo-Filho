import { UserDatabase } from "../data/UserDatabase"
import { InvalidEmail, InvalidId, InvalidName, InvalidPassword } from "../error/customUsersErrors";
import { User, UserInputDTO } from "../model/user";
import { generateId } from "../services/generateId";

export class UserBusiness {
  public createUser = async (
    input: UserInputDTO
    ) => {

    try {
      const {
        email,
        name,
        password
      } = input;

      if(name.length < 5) { 
        throw new InvalidName()
      }

      if(!email || !email.includes("@")) {
        throw new InvalidEmail()
      }

      if(!password || password.length < 8){
        throw new InvalidPassword()
      }

      const id: string = generateId();

      const userDatabase = new UserDatabase();
      const user: User = {
        id,
        name,
        email,
        password
      }
    await userDatabase.insertUser(user);
     }
     catch (error: any) {
      throw new Error(error.message)
    }  
    
  }

  async getAll():Promise<any> {

    const userDatabase = new UserDatabase()
    const users = await userDatabase.getAll()

    if(!users) {
      throw new Error("Não foi possível encontrar usuários")
    }

    return users
  }
  
  async getUserId (id: string): Promise<User[]> {
    const userDatabase = new UserDatabase()
    const user = await userDatabase.getUserId(id)

    if(user.length === 0) {
      throw new InvalidId()
    }
    return user
  }

  public deleteUser = async (id: string): Promise<void> => {
    const userDatabase = new UserDatabase()
    await userDatabase.deleteUser(id)
  }



}

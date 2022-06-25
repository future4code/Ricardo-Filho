import { EditUserInput, User} from "../model/User"
import { CustomError } from "../error/CustomUsersError";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "Cookenu_users"

  public insertUser = async (user: User) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getAll = async (): Promise<User[]> => {
    const getUsers = await UserDatabase
    .connection(UserDatabase.TABLE_NAME)
    .select("*");
    return getUsers;
}

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name })
        .where({ id: user.id })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

public findUserByEmail=async(email:string)=>{
  try{
    const result=await UserDatabase
    .connection(UserDatabase.TABLE_NAME)
      .select()
      .where({email});
    return result[0];
  }catch(error:any){
    throw new CustomError(400,error.message);
  }
 };

 public  getUserById = async(id:string)=>{
  try{
    const result = await UserDatabase
    .connection(UserDatabase.TABLE_NAME)
      .select()
      .where({id});
      
    return result[0];

  }catch(error:any){
    throw new CustomError(400,error.message);
  }
 };
  static getUserById: any;
  
}

import { CustomError } from "../error/customError";
import { EditUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "Auth_users_roles"

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
          role: user.role
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };


public findUserByEmail=async(email:string)=>{
  try{
    const result=await UserDatabase.connection(UserDatabase.TABLE_NAME)
      .select()
      .where({email});
    return result[0];
  }catch(error:any){
    throw new CustomError(400,error.message);
  }
 };

 public static getUserById=async(id:string)=>{
  try{
    const result=await UserDatabase.connection(UserDatabase.TABLE_NAME)
      .select()
      .where({id});
    return result[0];
  }catch(error:any){
    throw new CustomError(400,error.message);
  }
 };

}

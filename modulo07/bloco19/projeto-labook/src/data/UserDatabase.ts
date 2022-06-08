import { User } from '../model/user';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_users";

    public insertUser = async (
        user: User
    ) => {
        try {
        await UserDatabase
        .connection
        .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
        })
        .into(UserDatabase.TABLE_NAME)
        }
        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
            
        }
    }

    public getUser = async () => {
        const getUsers = await UserDatabase
        .connection(UserDatabase.TABLE_NAME)
        .select("*")
        return getUsers
    }

    public getAll = async (): Promise<User[]> => {
        const getUsers = await UserDatabase
        .connection(UserDatabase.TABLE_NAME)
        .select("*");
        return getUsers;
    }
  
    public getUserId = async (id: string): Promise<User[]> => {
        const getUser = await UserDatabase
        .connection(UserDatabase.TABLE_NAME)
        .where("id", id);
        
        return getUser;
    }

    public deleteUser = async ( id: string ): Promise<void> => {
      await UserDatabase
      .connection(UserDatabase.TABLE_NAME)
      .where( "id", id)
      .delete();
    }

}
import { amity } from '../model/amity';
import { BaseDatabase } from './BaseDatabase';

export class AmityDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_amity";

    public insertAmity = async (userId: string, friendId:string): Promise<void> => {
        try {            
             await AmityDatabase
             .connection
             .insert({
                user_id: userId,
                friend_id: friendId
             })
             .into(AmityDatabase.TABLE_NAME)
             await AmityDatabase
             .connection
             .insert({
                user_id: friendId,
                friend_id: userId
             })
             .into(AmityDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
            
        }
    
    }

    public delAmity = async (userId: string, friendId:string): Promise<void> => {
        try {            
             await AmityDatabase
             .connection
             .delete()
             .where({
                user_id: userId,
                friend_id: friendId
             }).orWhere({
                user_id: friendId,
                friend_id: userId
             })
             .into(AmityDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
            
        }
    
    }
}
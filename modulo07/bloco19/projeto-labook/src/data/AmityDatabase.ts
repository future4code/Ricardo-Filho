import { AmityInputDTO, friendFeedInput } from '../model/amity';
import { BaseDatabase } from './BaseDatabase';

export class AmityDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_amity";

    public insertAmity = async (
        userId: string, friendId:string
        ): Promise<void> => {
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

    public delAmity = async (
        userId: string, friendId:string
        ): Promise<void> => {
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
             .from(AmityDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
            
        }
    
    }
    public feed = async (
        req:friendFeedInput
        ):Promise<any> => {
        try {
            const getFeedsFriends = await AmityDatabase.connection
            .select("*")
            .from(AmityDatabase.TABLE_NAME)
            .leftJoin("labook_posts", "labook_amity.friend_id", "labook_posts.author_id")
            .where({user_id: req.idUser})
            .orderBy("labook_posts.created_at", "desc")
            .limit(5)
                        
            return getFeedsFriends

        } catch (error:any) {
            throw new Error(error.message)
            }
    }

    public find = async (
        req:AmityInputDTO
        ):Promise<any> =>{
        try {
            const findAmity = await AmityDatabase.connection
            .select("*")
            .where({user_id: req.userId, friend_id: req.friendId})
            .orWhere({user_id: req.friendId, friend_id: req.userId})
            .from(AmityDatabase.TABLE_NAME)

            return findAmity
        } catch (error:any) {
            throw new Error(error.message)
            }
}


}
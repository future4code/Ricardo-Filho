import { AmityDatabase } from "../data/AmityDatabase"
import { friendFeedInput } from "../model/amity"
import { CheckFriends } from "../services/checkamity"

export class AmityBusiness {
    public createAmity = async (
        userId: string, friendId:string
        ): Promise<void> => {
            try {
                const amityDatabase = new AmityDatabase()
                await amityDatabase.insertAmity(userId, friendId)
            } catch (error:any) {
                throw new Error(error.message)
                
            }
}

public deleteAmity = async (
    userId: string, friendId:string
    ): Promise<void> => {
        try {
       
        if (!userId || !friendId){
            const message = "todos os campos devem ser preenchidos"
            throw new Error(message)
        }
        const checkFriends = await CheckFriends(userId,friendId)

        if (!checkFriends){
            const message = "Esses usuarios não são amigos"
            throw new Error(message)
        }

            const amityDatabase = new AmityDatabase()
            await amityDatabase.delAmity(userId, friendId)
        } catch (error:any) {
            throw new Error(error.message)
            
        }
}

public feed = async (
    req:friendFeedInput
    ):Promise<any> => {
        try {
            if(!req){ 
            const message = "necessario id do usuario" 
            throw new Error(message)
        }
            const feed = await new AmityDatabase().feed(req)

            return feed
        } catch (error:any) {
            throw new Error(error.message)
        }
}
}
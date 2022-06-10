import { AmityDatabase } from "../data/AmityDatabase"

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
            const amityDatabase = new AmityDatabase()
            await amityDatabase.delAmity(userId, friendId)
        } catch (error:any) {
            throw new Error(error.message)
            
        }
}

}
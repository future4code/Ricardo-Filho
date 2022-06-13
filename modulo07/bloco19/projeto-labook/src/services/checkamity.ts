import { AmityDatabase } from "../data/AmityDatabase"

export async function CheckFriends(
    userId:string,
    friendId:string
    ):Promise<boolean>{
        
    const friendDB = await new AmityDatabase()

    const checkId = {
        userId,
        friendId
    }
    const check = await friendDB.find(checkId)

    if(!check[0]){
        return false
    }else{
        return true
    }
}

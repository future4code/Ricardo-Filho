import * as bcrypt from "bcryptjs";

export class HashManager {
  
   public static generateHash = async(srt: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(srt, salt)

    return result
  }

    public static compareHash = async(str: string, hash: string): Promise<boolean> => {
        const result = await bcrypt.compare(str, hash)

        return result
    }

} 
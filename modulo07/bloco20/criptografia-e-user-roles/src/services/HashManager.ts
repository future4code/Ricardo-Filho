import * as bcrypt from "bcryptjs";

export class HashManager {
  public generateHash = async(plainTextPassword: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_ROUNDS)
    const salt = await bcrypt.genSalt(rounds)
    const passwordHash = await bcrypt.hash(plainTextPassword, salt)

    return passwordHash
  }

    public comparePassword = async(str: string, hash: string): Promise<boolean> => {
        const result = await bcrypt.compare(str, hash)

        return result
    }

}
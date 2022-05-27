import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'

export class UserBusiness {
  async create({ email, name, password }: any):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  async getAll():Promise<any> {

    const userDatabase = new UserDatabase()
    const users = await userDatabase.getAll()

    if(!users) {
      throw new Error("Não foi possível encontrar usuários")
    }

    return users
  }

}

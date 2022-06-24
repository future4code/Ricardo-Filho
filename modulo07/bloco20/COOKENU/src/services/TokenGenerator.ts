import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../model/Type'

const expiresIn = "1min";

export class TokenGenerator {

    public generateToken = (id: string, role: string) => {
        const token = jwt.sign(
            { id, role },
            process.env.JWT_KEY as string,
            { expiresIn }
         )
        return token 
    }

    public static getData = (token: string): AuthenticationData => {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as any;
        
        const result = {
            id: payload.id,
            role: payload.role
        }

        return result
    }
} 
// 1 - a)

import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getUserName(
   req: Request,
   res: Response
):Promise<any> {
  try {

     let name = req.query.name as string;
 
   if(!name){
      name ="%"
    }

     const getUserName = await connection("aula48_exercicio")
     .select()
     .where("name", "like", `%${name}%`)


     res.status(200).send(getUserName)
     
  } catch (error: any) {
      res.send(error.message || error.sqlMessage)
  }
}

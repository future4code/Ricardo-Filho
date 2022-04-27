// 1 - b)

import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getUserType(
   req: Request,
   res: Response
):Promise<void> {
  try {
     
    let getType = req.params.type as string;
 
   if(!getType || getType.toUpperCase() != "CX"  && getType.toUpperCase() != "TEACHER"  && getType.toUpperCase() != "OPERATIONS"  ) {
    throw new Error("Você precisa informar um tipo válido - Precisa digitar um type - Teacher ou CX ou operations")
  }
      const getUserName = await connection("aula48_exercicio")
     .where({type: getType})


     res.status(200).send(getUserName)
     
  } catch (error: any) {
      res.send(error.message || error.sqlMessage)
  }
}
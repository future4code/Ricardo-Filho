import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getFiveUser(
   req: Request,
   res: Response
):Promise<void> {
  try {
     
    let page = Number(req.query.page);
    let size = Number(req.query.size)
    let offset = size*(page-1)
    let limit = 5

   if(isNaN(page) || page < 1) {
    page = 1
  }

  if(isNaN(size) || size < 1) {
    size = 5
  }
      const getUserName = await connection("aula48_exercicio")
     .select()
     .limit(size)
     .offset(offset)

     res.status(200).send(getUserName)
     
  } catch (error: any) {
      res.send(error.message || error.sqlMessage)
  }
}



import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getNameType(
   req: Request,
   res: Response
):Promise<any> {
  try {

     let name = req.query.name as string;
     let sort = req.query.sort as string
 
   if(!name){
      name ="%"
    }
   if(sort !== "name" && sort !=="type"){
      sort = "email"
   }
     const getUserName = await connection("aula48_exercicio")
     .select()
     .where("name", "like", `%${name}%`)
     .orderBy(sort, "ASC")
   


     res.status(200).send(getUserName)
     
  } catch (error: any) {
      res.send(error.message || error.sqlMessage)
  }
}

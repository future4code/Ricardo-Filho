import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllFuncs(
   req: Request,
   res: Response
):Promise<any> {
  try {

     let name = req.query.name as string;
     let sort = req.query.sort as string;
     let getType = req.params.type as string;
     let page = Number(req.query.page)
     let size = Number(req.query.size)
     let offset = size*(page-1)
     let limit = 5
 
   if(!name){
      name ="%"
    }
    if(sort !== "name" && sort !=="type"){
      sort = "name"
   }
  //  if(!getType || getType.toUpperCase() != "CX"  && getType.toUpperCase() != "TEACHER"  && getType.toUpperCase() != "OPERATIONS"  ) {
  //   throw new Error("Você precisa informar um tipo válido - Precisa digitar um type - Teacher ou CX ou operations")
  // }
    if(isNaN(page) || page < 1) {
      page = 1
    }
  
    if(isNaN(size) || size < 1) {
      size = 5
    }
     const getAll = await connection("aula48_exercicio")
     .select()
     .where("name", "like", `%${name}%`)
     .orWhere("type", "like", `%${getType}`)
     .orderBy(sort, "DESC")
     .limit(size)
     .offset(offset)


     res.status(200).send(getAll)
     
  } catch (error: any) {
      res.send(error.message || error.sqlMessage)
  }
}

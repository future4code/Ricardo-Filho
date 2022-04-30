import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllUsers(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
 
    const getAllUsers = await connection("labecommerce_users")
    .select()
    
      res.status(200).send(getAllUsers)
   } catch (error: any) {
       res.send(error.message || error.sqlMessage)
   }
 }
 
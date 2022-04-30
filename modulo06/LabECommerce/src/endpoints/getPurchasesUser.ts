import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getPurchasesUser(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
 
    
      
   } catch (error: any) {
       res.send(error.message || error.sqlMessage)
   }
 }
 
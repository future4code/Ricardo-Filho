import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllProducts():Promise<any> {
  
     const allProducts = await connection("labecommerce_products")
    
    return allProducts  
 }

 export async function selectAllProducts(req: Request, res: Response):Promise<any> {
   try{
     const products = await getAllProducts()
     res.status(200).send(products)
   }
   catch(error: any){
     res.send(error.message || error.sqlMessage)
   }
 }
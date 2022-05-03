import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllProducts(order?:string, search?:string): Promise<any> {
  
     let orderAndSearch
     if(!order && !search){
       orderAndSearch = await connection("labecommerce_products")
     } else if(search){
       orderAndSearch = await connection("labecommerce_products")
       .where("name_product", "like", `%${search}%`)
     } else {
       orderAndSearch = await connection("labecommerce_products")
       .orderBy("name_product", order)
     }

    return orderAndSearch  
 }

 export async function orderAllProducts(req: Request, res: Response):Promise<void> {
   try{
     const order = req.query.order as string
     const search = req.query.search as string

     let products = await getAllProducts(order, search)

     res.status(200).send(products)
   }
   catch(error: any){
     res.send(error.message || error.sqlMessage)
   }
 }
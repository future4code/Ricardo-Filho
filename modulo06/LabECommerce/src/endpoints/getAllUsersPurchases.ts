import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllUsersPurchases(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
 
    const getAllUsers:any = await connection("labecommerce_purchases")
    .select(
    "labecommerce_users.id",
    "labecommerce_users.name",
    "labecommerce_users.email",
    "labecommerce_users.type",
    "labecommerce_products.name_product",
    "labecommerce_purchases.quantity",
    "labecommerce_products.price",
    "labecommerce_purchases.total_price")
    .innerJoin("labecommerce_products","labecommerce_products.id", "labecommerce_purchases.product_id")
    .innerJoin("labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id")
    
    
      res.status(200).json({purchases: getAllUsers})
   } catch (error: any) {
       res.send(error.message || error.sqlMessage)
   }
 }
 
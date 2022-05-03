import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getPurchasesUser(
  req: Request,
  res: Response,
 ):Promise<any> {
   try {
    const userId = req.params.userId as string;
    const purchase = await connection("labecommerce_purchases")
    .select("labecommerce_products.name_product","labecommerce_purchases.quantity","labecommerce_products.price", "labecommerce_purchases.total_price")
    .innerJoin("labecommerce_products", "labecommerce_products.id", "labecommerce_purchases.product_id") 
    .innerJoin("labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id")
    .where("labecommerce_users.id", userId);

    res.status(200).send(purchase)  
   } catch (error: any) {
       res.send(error.message || error.sqlMessage)
   }
 }
 
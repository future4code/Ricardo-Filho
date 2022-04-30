import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAllProducts } from "./getAllProducts"
import { v4 as idCreat } from 'uuid';

export async function regPurchases(req: Request, res: Response):Promise<any> {
   
  try {
    const { user_id, product_id, quantity } = req.body

    let totalprice = 0;

    const products = await getAllProducts()

    const productId = products.find((item: { id: any; })=>{
      return item.id === product_id

    })

    if(!productId){
      throw new Error("Insira um ID válido para um produto")
    }

    let totalPrice = productId.price * quantity

  await connection("labecommerce_purchases")
  .insert({
   id:idCreat(),
   user_id:user_id,
   product_id:product_id,
   quantity,
   total_price: totalPrice  
 })
 res.status(201).send("Compra efetuada com sucesso")
   } catch (error: any) {
       res.send(error.message || error.sqlMessage)
   }
 }
 
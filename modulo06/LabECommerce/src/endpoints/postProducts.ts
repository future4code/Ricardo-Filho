import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as idCreat } from 'uuid';

export async function postProducts(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
    const { name, price, image_url } = req.body;
    if(!name){
      throw new Error("Você precisa informar um nome")
    };
    if(!price || price.length === 0){
      throw new Error("Voçê precisa informar um valor maior que 0")
    };
    if(!image_url){
      throw new Error("Você precisa informar a URL de uma imagem válida")
    };
        
    await connection("labecommerce_products")
    .insert({
    id:idCreat(),
    name,
    price,
    image_url
    })
    
    res.status(201).send("Produto criado com sucesso")
          
   } catch (error: any) {
    res.status(400).send(error.message)
   }
 }
 
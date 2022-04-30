import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as idCreat } from 'uuid';

export async function postUsers(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
    const {name, email, password, type } = req.body;
    if(!name){
      throw new Error("Você precisa informar um nome")
    };
    if(!name){
      throw new Error("Você precisa informar um nome")
    };
    if(!email || email.length < 10){
      throw new Error("Voçê precisa informar um e-mail válido com pelo menos 10 caracteres")
    };
    if(!password || password.length <= 0){
      throw new Error("Você precisa informar um password e ter no mínimo 6 caracteres")
    };
        
    await connection("labecommerce_users")
    .insert({
    id:idCreat(),
    name,
    email,
    password,
    type
    })
    
    res.status(201).send("Usuário Criado com Sucesso")
          
   } catch (error: any) {
    res.status(400).send(error.message)
   }
 }
 
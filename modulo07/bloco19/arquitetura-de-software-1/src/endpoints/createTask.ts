import { Request, Response } from "express";
import {insertTask} from "../data/insertTask";
import { v4 as generateId  } from "uuid"

export const createTask = async (
   req: Request,
   res: Response
) => {
   try {
      const { title, description, deadline, authorId } = req.body

      if (
         !title ||
         !description ||
         !deadline ||
         !authorId
      ) {
         throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
      }

      const id: string = generateId()

      await insertTask({
         id,
         title,
         description,
         deadline,
         authorId,
      })

      res.status(201).send({ message: "Produto criado!" })
   } catch (error:any) {
      res.status(400).send(error.message)
   }
}
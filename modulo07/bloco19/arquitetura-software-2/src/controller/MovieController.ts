import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
    async create(req: Request, res: Response):Promise<void> {
       try {
         const { title, description, duration, year } = req.body;
   
         const movieBusiness = new MovieBusiness();
         await movieBusiness.create({ title, description, duration, year });
   
         res.status(201).send({ message: "Filme cadastrado com sucesso" });
   
       } catch (error) {
         res.status(400).send(error.message);
       }
     }
     
     async getAll(req: Request, res: Response): Promise<void> {
       try {
         const movieBusiness = new MovieBusiness();
         const movies = await movieBusiness.getAll();
   
         res.status(200).send(movies);
       } catch (error) {
         res.status(400).send(error.message);
       }
     }
   
   }
   
import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieInputDTO } from "../model/movie";

export class MovieController {

    public createMovie = async (
      req: Request,
      res: Response
      ) => {
        try {
         const {
           title,
           description,
           duration,
           year
          } = req.body;

          const input: MovieInputDTO = {
            title,
            description,
            duration,
            year
          }
   
         const movieBusiness = new MovieBusiness();
         await movieBusiness.create(input);
   
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
   
     async deleteMovie( req: Request, res: Response): Promise<void> {
      try {
        const id = req.params.id;
        const movieBusiness = new MovieBusiness();
        await movieBusiness.deleteMovie(id);
  
        res.status(200).send({ message: "Filme deletado com sucesso" });
      } catch (error) {
        res.status(400).send(error.message);
      }
    }

   }
   
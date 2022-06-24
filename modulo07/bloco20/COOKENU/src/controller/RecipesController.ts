import { Request, Response } from "express";
import { RecipesBusiness } from "../business/RecipesBusiness";
import { Recipes, RecipesInputDTO } from "../model/Recipes";
import { convertDate } from "../services/convertDate";

export class RecipesController {

    public createRecipes = async (
      req: Request,
      res: Response
      ) => {
        try {
         const {
          title,
          description,
          createdAt,
          authorId
          } = req.body;

          const input: RecipesInputDTO = {
          title,
          description,
          createdAt,
          authorId
          }
   
         const recipesBusiness = new RecipesBusiness();
         await recipesBusiness.create(input);
   
         res.status(201).send({ message: "Post cadastrado com sucesso" });
   
       } catch (error:any) {
         res.status(400).send(error.message);
       }
     }
     
     public getAll = async (req: Request, res: Response) => {
       
      try {
        const postBusiness = new RecipesBusiness();
         const posts = await postBusiness.getAll();
        for(let i = 0; i < posts.length; i++) {
          posts[i].created_at = convertDate(posts[i]?.created_at);
        }
         res.status(200).send(posts);
       } catch (error:any) {
         res.status(400).send(error.message);
       }
     }

     public getPostId = async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const postBusiness = new RecipesBusiness();
          const post = await postBusiness.getPostId(id);
          
          res.status(200).send({post})
      } catch (error:any) {
        res.status(400).send(error.message);
      }
    }

     async deletePost( req: Request, res: Response): Promise<void> {
      try {
        const id = req.params.id;
        const postBusiness = new RecipesBusiness();
        await postBusiness.deletePost(id);
  
        res.status(200).send({ message: "Post deletado com sucesso" });
      } catch (error:any) {
        res.status(400).send(error.message);
      }
    }

   }
   
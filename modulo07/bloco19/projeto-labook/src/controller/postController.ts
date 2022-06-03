import { Request, Response } from "express";
import { PostBusiness } from "../business/postBusiness";
import { PostInputDTO } from "../model/post";

export class PostController {

    public createPost = async (
      req: Request,
      res: Response
      ) => {
        try {
         const {
          photo,
          description,
          type,
          createdAt,
          authorId
          } = req.body;

          const input: PostInputDTO = {
          photo,
          description,
          type,
          createdAt,
          authorId
          }
   
         const postBusiness = new PostBusiness();
         await postBusiness.create(input);
   
         res.status(201).send({ message: "Post cadastrado com sucesso" });
   
       } catch (error:any) {
         res.status(400).send(error.message);
       }
     }
     
     async getAll(req: Request, res: Response): Promise<void> {
       try {
         const postBusiness = new PostBusiness();
         const posts = await postBusiness.getAll();
   
         res.status(200).send(posts);
       } catch (error:any) {
         res.status(400).send(error.message);
       }
     }
   
     async deletePost( req: Request, res: Response): Promise<void> {
      try {
        const id = req.params.id;
        const postBusiness = new PostBusiness();
        await postBusiness.deletePost(id);
  
        res.status(200).send({ message: "Post deletado com sucesso" });
      } catch (error:any) {
        res.status(400).send(error.message);
      }
    }

   }
   
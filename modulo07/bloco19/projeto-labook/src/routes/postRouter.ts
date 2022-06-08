import express from 'express';
import { PostController } from '../controller/postController';

export const postRouter = express.Router();

const postController = new PostController();

postRouter.post("/create", postController.createPost);

postRouter.get("/all", postController.getAll);

postRouter.get("/:id", postController.getPostId);

// postRouter.get("/:name", postController.getPostName);

postRouter.delete("/:id", postController.deletePost);
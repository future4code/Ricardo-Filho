import express from 'express';
import { PostController } from '../controller/postController';

export const postRouter = express.Router();

const postController = new PostController();

postRouter.post("/create", postController.createPost);

// postRouter.get("/post/:id", postController.getPost);

// postRouter.get("/post/:name", postController.getAll);

postRouter.get("/posts", postController.getAll);

postRouter.delete("/post/:id", postController.deletePost);
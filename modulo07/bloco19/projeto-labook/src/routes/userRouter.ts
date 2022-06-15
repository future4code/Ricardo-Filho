import express from 'express';
import { UserController } from '../controller/userController';

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/create", userController.createUser);

userRouter.get("/all", userController.getAll);

userRouter.get("/:id", userController.getUserId);

userRouter.delete("/delete/:id", userController.deleteUser)
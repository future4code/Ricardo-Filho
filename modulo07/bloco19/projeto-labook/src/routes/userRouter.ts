import express from 'express';
import { UserController } from '../controller/userController';

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/create", userController.createUser);

// userRouter.get("/users/:id", userController.getUser);

userRouter.get("/all", userController.getAll);

userRouter.delete("/delete/:id", userController.deleteUser)
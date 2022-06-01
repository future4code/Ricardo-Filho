import express from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/create", userController.createUser)

userRouter.get("/All", userController.getAll)

userRouter.delete("/delete/:id", userController.deleteUser)


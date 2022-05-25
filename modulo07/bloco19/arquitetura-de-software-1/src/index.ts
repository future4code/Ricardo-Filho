import { app } from "./controller/app"
import { UserController } from "./controller/UserController"
import { createTask } from './endpoints/createTask'

const userController = new UserController()

app.post('/user', userController.createUser)

app.post('/task', createTask)



import { app } from "./app"
import { userRouter } from "./controller/userRouter"


app.use('/user', userRouter)

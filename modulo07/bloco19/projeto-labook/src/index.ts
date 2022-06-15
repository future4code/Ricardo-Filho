import { app } from './app'
import { userRouter } from './routes/userRouter'
import { postRouter } from './routes/postRouter'  
import { amityRouter } from './routes/amityRouter'

app.use("/user", userRouter)
app.use("/post", postRouter)
app.use("/amity", amityRouter)
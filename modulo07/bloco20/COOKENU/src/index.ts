import { app } from "./controller/App";
import { userRouter } from "./controller/UserRouter";

app.use("/user", userRouter);

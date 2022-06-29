import { app } from "./controller/App";
import { recipesRouter } from "./controller/routes/RecipesRouter";
import { userRouter } from "./controller/routes/UserRouter";

app.use("/user", userRouter);
app.use("/recipes", recipesRouter);

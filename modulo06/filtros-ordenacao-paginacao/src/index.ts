import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserType } from "./endpoints/getUserType";
import { getNameType } from "./endpoints/getNameType";

app.get("/recipes", getAllRecipes)
app.get("/users", getAllUsers)
app.get("/type/:type", getUserType)
app.get("/order", getNameType)
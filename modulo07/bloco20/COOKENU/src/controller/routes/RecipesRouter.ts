import express from 'express';
import { RecipesController } from "../RecipesController"

export  const recipesRouter = express.Router();

const recipesController = new RecipesController();

recipesRouter.post("/create", recipesController.createRecipes)
recipesRouter.get("/all", recipesController.getAll)
recipesRouter.get("/:id", recipesController.getRecipesId)
recipesRouter.delete("/:id", recipesController.deleteRecipes)
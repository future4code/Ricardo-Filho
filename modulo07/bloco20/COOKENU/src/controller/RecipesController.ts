import { Request, Response } from "express";
import { RecipesBusiness } from "../business/RecipesBusiness";
import { Recipes, RecipesIn } from "../model/Recipes";
import { convertDate } from "../services/convertDate";

export class RecipesController {
  public createRecipes = async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;

      const token = req.headers.authorization as string;

      const input: RecipesIn = {
        title,
        description,
        token,
      };

      const recipesBusiness = new RecipesBusiness();

      await recipesBusiness.create(input);

      res.status(201).send({ message: "Receita criada com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getRecipesId = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const token = req.headers.authorization as string;

      const recipesBusiness = new RecipesBusiness();
      const recipes = await recipesBusiness.getRecipesId(id, token);

      res.status(200).send({ recipes });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getAll = async (req: Request, res: Response) => {
    try {
      const recipesBusiness = new RecipesBusiness();
      const recipes = await recipesBusiness.getAll();

      for (let i = 0; i < recipes.length; i++) {
        recipes[i].created_at = convertDate(recipes[i]?.created_at);
      }

      res.status(200).send(recipes);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  async deleteRecipes(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const token = req.headers.authorization!;

      const recipesBusiness = new RecipesBusiness();
      await recipesBusiness.deleteRecipes(id, token);

      res.status(200).send({ message: "Receita deletada com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}

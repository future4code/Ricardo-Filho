import { RecipesDatabase } from "../data/RecipesDatabase";
import { Recipes, RecipesIn } from "../model/Recipes";
import { generateId } from "../services/GenerateId";
import {
  InvalidRecipes,
  InvalidDataRecipes,
  InvalidToken,
} from "../error/CustomRecipesErros";
import { Authenticator } from "../services/Authenticator";

export class RecipesBusiness {
  public create = async (input: RecipesIn) => {
    try {
      const { title, description, token } = input;

      if (!title || !description || !token) {
        throw new InvalidDataRecipes();
      }

      const id = generateId();

      const userData = Authenticator.getData(token);

      const recipesDatabase = new RecipesDatabase();
      const recipes: Recipes = {
        id,
        title,
        description,
        authorId: userData.id,
      };
      await recipesDatabase.insertRecipes(recipes);
    } catch (error: any) {
      throw new InvalidToken();
    }
  };

  public getAll = async (): Promise<any[]> => {
    const recipesDatabase = new RecipesDatabase();
    const recipes = await recipesDatabase.getAll();

    if (recipes.length === 0) {
      throw new InvalidRecipes();
    }
    return recipes;
  };

  public getRecipesId = async (id: string, token: string): Promise<any> => {
    const recipesDatabase = new RecipesDatabase();
    const recipes = await recipesDatabase.getRecipesId(id);

    if (!token) {
      throw new InvalidToken();
    }
    if (token.length < 207) {
      throw new InvalidToken();
    }

    if (!id) {
      throw new InvalidRecipes();
    }

    if (recipes.length === 0) {
      throw new InvalidRecipes();
    }
    return recipes;
  };

  public deleteRecipes = async (id: string, token: string): Promise<void> => {
    try {
      if (!id) {
        throw new InvalidRecipes();
      }

      if (!token) {
        throw new InvalidToken();
      }

      if (token.length < 207) {
        throw new InvalidToken();
      }

      const recipesDatabase = new RecipesDatabase();
      await recipesDatabase.deleteRecipes(id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

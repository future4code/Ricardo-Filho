import { Recipes } from "../model/Recipes";
import { BaseDatabase } from "./BaseDatabase";

export class RecipesDatabase extends BaseDatabase {
  private static TABLE_NAME = "Cookenu_recipes";

  public insertRecipes = async (recipes: Recipes) => {
    try {
      await RecipesDatabase.connection
        .insert({
          id: recipes.id,
          title: recipes.title,
          description: recipes.description,
          author_id: recipes.authorId,
        })
        .into(RecipesDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getAll = async (): Promise<Recipes[]> => {
    const getRecipes = await RecipesDatabase.connection(
      RecipesDatabase.TABLE_NAME
    ).select();

    return getRecipes;
  };

  public getRecipesId = async (id: string): Promise<Recipes[]> => {
    const getRecipes = await RecipesDatabase.connection(
      RecipesDatabase.TABLE_NAME
    ).where("id", id);

    return getRecipes[0];
  };

  public deleteRecipes = async (id: string): Promise<void> => {
    await RecipesDatabase.connection(RecipesDatabase.TABLE_NAME)
      .where("id", id)
      .delete();
  };
}

import { Recipes } from '../model/Recipes'
import { BaseDatabase } from './BaseDatabase'

export class RecipesDatabase extends BaseDatabase {
    private static TABLE_NAME = 'Cookenu_recipes';

    public insertRecipes = async (
        recipes: Recipes
    ) => {
        try {
            await RecipesDatabase
            .connection
            .insert({
                id:recipes.id,
                title:recipes.title,
                description:recipes.description,
                
            })
        } catch (error:any) { 
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
}
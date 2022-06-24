import { RecipesDatabase } from "../data/RecipesDatabase"
import { Recipes } from "../model/Recipes";
import { generateId } from "../services/GenerateId";
import { InvalidRecipes, InvalidDataRecipes } from "../error/CustomRecipesErros";


export class RecipesBusiness {
    public create = async (
      input: Recipes
      ) => {

      try {
      const {
        title,
        description,
        authorId
      } = input;

      if (!title || !description || !authorId) {
        throw new InvalidDataRecipes()
      }
  
      const id = generateId()
  
      const postDatabase = new RecipesDatabase();
      const post: Recipes = {
        id,
        title,
        description,
        createdAt: new Date(),
        authorId
      }
      await postDatabase.insertPost(post)
    }
    catch (error: any) {
      throw new Error(error.message)
    }
  }
  
  async getAll (): Promise<any[]> {
      const postDatabase = new RecipesDatabase()
      const posts = await postDatabase.getAll()
    
      if(posts.length === 0) {
        throw new InvalidRecipes()
      }
      return posts
    }
    
    public getPostId = async (id: string): Promise<any[]> => {
      const postDatabase = new RecipesDatabase()
      const post = await postDatabase.getPostId(id)

      if(post.length === 0) {
        throw new InvalidRecipes()
      }
      return post
    }

    public deletePost = async (id: string): Promise<void> => {
      const postDatabase = new RecipesDatabase()
      await postDatabase.deletePost(id)
    }
  }
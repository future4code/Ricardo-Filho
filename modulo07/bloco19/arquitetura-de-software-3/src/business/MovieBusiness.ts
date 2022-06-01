import { MovieDatabase } from "../data/MovieDatabase"
import { InvalidDateMovies, InvalidYear } from "../error/customErrors";
import { generateId } from "../services/generateId";

export class MovieBusiness {
    public create = async (input: any) => {
      try {
      const { title, description, duration, year } = input;

      if (!title || !description || !duration) {
        throw new InvalidDateMovies()
      }
  
      if (year.length < 4) {
        throw new InvalidYear()
      }
      const id = generateId()
  
      const movieDatabase = new MovieDatabase()
      await movieDatabase.insertMovie({
        id,
        title,
        description,
        duration,
        year})
    }
    catch (error: any) {
      throw new Error(error.message)
    }
  }
  
    async getAll():Promise<any> {
  
      const movieDatabase = new MovieDatabase()
      const movies = await movieDatabase.getAll()
  
      if(!movies) {
        throw new Error("Não foi possível encontrar Filmes Cadastrados")
      }
  
      return movies
    }
  
  }
  
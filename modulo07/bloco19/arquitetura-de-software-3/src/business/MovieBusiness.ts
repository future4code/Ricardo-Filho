import { MovieDatabase } from "../data/MovieDatabase"
import { InvalidYear, InvalidDateMovies } from "../error/customMovieErros";
import { movie } from "../model/movie";
import { generateId } from "../services/generateId";

export class MovieBusiness {
    public create = async (
      input: any
      ) => {

      try {
      const {
        title,
        description,
        duration,
        year
      } = input;

      if (!title || !description || !duration || !year) {
        throw new InvalidDateMovies()
      }
  
      if (year.length < 4) {
        throw new InvalidYear()
      }
      const id = generateId()
  
      const movieDatabase = new MovieDatabase()
      const movie: movie = {
        id,
        title,
        description,
        duration,
        year
      }
        await movieDatabase.insertMovie(movie)
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
  
    public deleteMovie = async (id: string): Promise<void> => {
      const userDatabase = new MovieDatabase()
      await userDatabase.deleteMovie(id)
    }

  }
  
import { movie } from "../model/movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE";
  
    public insertMovie = async (
      movie: movie
      ) => {
        try {
        await MovieDatabase.connection.insert({
          id:movie.id,
          title: movie.title,
          description: movie.description,
          duration_in_minutes: movie.duration,
          year_of_release: movie.year
        })
        .into(MovieDatabase.TABLE_NAME);
    }
    catch (error:any) { 
      throw new Error(error.sqlMessage || error.message);
    }
  }
    public getAll = async (): Promise<movie[]> => {
        const getMovies = await MovieDatabase.connection(MovieDatabase.TABLE_NAME)
        .select("*");
        return getMovies;
    }
  
    public deleteMovie = async ( id: string ): Promise<void> => {
      await MovieDatabase.connection(MovieDatabase.TABLE_NAME)
      .where( "id", id)
      .delete();
    }
  }
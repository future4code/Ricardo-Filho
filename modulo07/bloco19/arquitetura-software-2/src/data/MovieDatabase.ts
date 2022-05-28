import { Movie } from "../types/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE";
  
    async create({ id, title, description, duration, year }: any): Promise<void> {
      await MovieDatabase.connection
        .insert({
          id,
          title,
          description,
          duration_in_minutes: duration,
          year_of_release: year,
        })
        .into(MovieDatabase.TABLE_NAME);
    }
  
    public getAll = async (): Promise<Movie[]> => {
        const getMovies = await MovieDatabase.connection(MovieDatabase.TABLE_NAME)
        .select("*");
        return getMovies;
    }
  
  }
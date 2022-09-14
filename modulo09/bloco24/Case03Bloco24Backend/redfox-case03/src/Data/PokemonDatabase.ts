import { BaseDatabase } from './BaseDatabase';

export class PokemonDatabase extends BaseDatabase {

  private static TABLE_NAME = 'pokemons';

  public SelectionList = async (

  ): Promise<any> => {
    try {
    const list = await this
      .getConnection()
      .select('*')
      .from(PokemonDatabase.TABLE_NAME);

        return list;
      } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
      }
  }

  public Search = async (
    Name: string
    ): Promise<any> => {
    try {

      const result = await this
        .getConnection()
        .select("*")
        .where({ Name })
        .from(PokemonDatabase.TABLE_NAME)

      return result

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public Page = async (
    size: number,
    offset: number
    ): Promise<any> => {
    try {

      const result = await this
        .getConnection()
        .select()
        .limit(size)
        .offset(offset)
        .from(PokemonDatabase.TABLE_NAME)

      return result

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public FilterByOrder = async (
    order: string,
    filter: string
    ) => {
    try {

      const result = await this
        .getConnection()
        .select()
        .orderBy(filter, order)
        .from(PokemonDatabase.TABLE_NAME)

      return result
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}

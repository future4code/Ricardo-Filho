import knex, { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export abstract class BaseDatabase {

  protected static connection: Knex | null = null;

  protected getConnection(): Knex {
    if(!BaseDatabase.connection){
      BaseDatabase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_SCHEMA,
          port: 3306 || process.env.DB_PORT,
          multipleStatements: true         
        },
      });
    }

    return BaseDatabase.connection;
  }
  public static async destroyConnection(): Promise<void> {
    if (BaseDatabase.connection) {
      await BaseDatabase.connection.destroy();
      BaseDatabase.connection = null;
    }
  }
}
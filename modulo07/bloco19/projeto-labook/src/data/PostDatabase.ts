import { post } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_posts";
  
    public insert = async (
      post: post
      ) => {
        try {
        await PostDatabase
        .connection
        .insert({
          id:post.id,
          photo: post.photo,
          description: post.description,
          type: post.type,
          created_at: post.createdAt,
          author_id: post.authorId
         })
        .into(PostDatabase.TABLE_NAME);
    }
    catch (error:any) { 
      throw new Error(error.sqlMessage || error.message);
    }
  }
    public getAll = async (): Promise<post[]> => {
        const getPosts = await PostDatabase.connection(PostDatabase.TABLE_NAME)
        .select("*");
        return getPosts;
    }
  
    public deletePost = async ( id: string ): Promise<void> => {
      await PostDatabase.connection(PostDatabase.TABLE_NAME)
      .where( "id", id)
      .delete();
    }
  }
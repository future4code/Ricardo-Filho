import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";
import { recipe } from "../types";

export async function getAllRecipes(
  req: Request,
  res: Response
): Promise<void> {
  try {
   
    let title = req.query.title;
    let sort = req.query.sort as string
    let order = req.query.order as string
    let page = Number(req.query.page)
    let size = Number(req.query.size)
    let offset = size*(page-1)

    
    if(!title){
      title ="%"
    }

    if(sort !== "title" && sort !== "createdAt") {
      sort = "title"
    }

    if( !order || order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC" ){
      order = "ASC"
    }

    if(isNaN(page) || page < 1) {
      page = 1
    }

    if(isNaN(size) || size < 1) {
      size = 10
    }

    const result = await connection("aula49_recipes")
      .select()
      .where("title", "like", `%${title}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)

    const recipes = result.map(toRecipe);

    if(recipes.length < 1) {
      throw new Error("Nenhuma receita encontrada")
    }

    res.status(200).send(recipes);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}

const toRecipe = (input: any): recipe => {
  return {
    id: input.id,
    title: input.title,
    description: input.description,
    userId: input.user_id,
    createdAt: input.created_at,
  };
};

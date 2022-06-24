export interface Recipes {
    id: string,
    title: string,
    description: string,
    createdAt: Date,
    authorId: string
 }

export interface RecipesInputDTO {
   title: string,
   description: string,
   createdAt: Date,
   authorId: string
 }


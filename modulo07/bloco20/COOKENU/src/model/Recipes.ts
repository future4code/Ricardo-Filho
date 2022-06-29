export interface Recipes {
    id: string,
    title: string,
    description: string,
    authorId: string
 }

export interface RecipesIn {
   title: string,
   description: string,
   token: string
 }

 export interface RecipesOut {
   id: string,
   title: string,
   description: string,
 }
 export interface GetIdToken {
   id: string,
   token: string
 }
// Receitas
export type recipe = {
   id: string
   title: string
   description: string
   userId: string
   createdAt: number
}
// Receitas
export type user = {
   id: string
   name: string
   email: string
   password: string
   recipes?: recipe[]
}


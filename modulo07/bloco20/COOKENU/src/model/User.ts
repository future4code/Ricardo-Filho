export const enum User_Roles {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL'
}

export interface User {
   id: string
   name: string
   email: string
   password: string
   role: User_Roles
}

export interface UserInputDTO {
   name: string,
   email: string,
   password: string,
   role: User_Roles
}

export interface LoginInputDTO {
   email: string,
   password: string,
}

export interface EditUserInputDTO {
   name: string,
   id: string,
   token: string,
}

export interface EditUserInput {
   name: string,
   id: string
}

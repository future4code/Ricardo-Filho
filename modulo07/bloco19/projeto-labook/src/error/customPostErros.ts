export class CustomError extends Error {
    constructor(
        public statusCode: number,
        public message: string){
        super(message)
    }
}

export class InvalidPost extends CustomError{ 
    constructor(){
        super(400, "Não foi possível encontrar um Post no banco de dados")
    }
}

export class InvalidDataPosts extends CustomError{ 
    constructor(){
        super(400, "Dados inválidos id, photo, description, type, createdAt, authorId")
    }
}
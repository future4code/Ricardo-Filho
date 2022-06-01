export class CustomError extends Error {
    constructor(
        public statusCode: number,
        public message: string){
        super(message)
    }
}

export class InvalidYear extends CustomError{ 
    constructor(){
        super(400, "Ano deve ter 4 dígitos")
    }
}

export class InvalidDateMovies extends CustomError{ 
    constructor(){
        super(400, "Dados inválidos id, title, description, duration")
    }
}
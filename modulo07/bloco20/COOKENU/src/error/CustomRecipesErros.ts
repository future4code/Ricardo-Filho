export class CustomError extends Error {
    constructor(
        public statusCode: number,
        public message: string){
        super(message)
    }
}

export class InvalidRecipes extends CustomError{ 
    constructor(){
        super(400, "Não foi possível encontrar esta Receita no banco de dados")
    }
}

export class InvalidDataRecipes extends CustomError{ 
    constructor(){
        super(400, "Dados inválidos: title, description, authorId")
    }
}

export class InvalidToken extends CustomError{ 
    constructor(){
        super(400, 'Preencha o campo "Token" corretamente')
    }
}
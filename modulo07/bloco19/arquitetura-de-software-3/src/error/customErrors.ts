export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido, Nome mínimo de 5 caracteres")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida, mínimo de 8 caracteres")
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
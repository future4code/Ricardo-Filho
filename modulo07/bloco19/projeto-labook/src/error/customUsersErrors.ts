export class CustomError extends Error {
    constructor(
        public statusCode: number,
        public message: string){
        super(message)
    }
}

export class InvalidId extends CustomError{ 
    constructor(){
        super(400, "Id Inválido, consulte a lista de usuários")
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


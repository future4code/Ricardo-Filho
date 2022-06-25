export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida")
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado")
    }
}

export class AuthorizedAdminOnly extends CustomError{ 
    constructor(){
        super(401, "Apenas Admins podem acessar os perfis")
    }
}
export class NotUser extends CustomError{ 
    constructor(){
        super(401, "Não foi possível encontrar os usuários")
    }
}



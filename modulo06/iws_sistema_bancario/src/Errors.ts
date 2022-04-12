export const Errors: { [chave: string]: { status: number; message: string } } = {
    BAD_REQUEST: {
      status: 400,
      message: "Valores incorretos"
    },
    NOT_AUTHORIZED: {
      status: 401,
      message: "Conta não autorizada, usuário não cumpre regra de idade (Maior de 18 anos)",
    },
    CPF_NOT_FOUND: {
      status: 404,
      message: `cpf não encontrado OU formato inválido. Ex.:(111.222.333-44)`
    },
    CPF_EXISTS: {
      status: 409,
      message: "Esse CPF já está cadastrado"
    },
    MISSING_PARAMETERS: {
      status: 422,
      message: "Alguma informação está faltando. Consulte a documentação.",
    },
    SOMETHING_WENT_WRONG: {
      status: 500,
      message: "Algo deu errado"
    },
  };
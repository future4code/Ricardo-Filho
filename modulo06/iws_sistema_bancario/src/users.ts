
export type User = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
}

export type Transaction = {
    purchase: number,
    date: number,
    descrition: string
}

export const users: User[] = [
    {
        name: "Ricardo",
        cpf: "111.222.333-44",
        birthDate: "01/01/2011",
        balance: 500
    },
    {
        name: "João",
        cpf: "222.333.444-55",
        birthDate: "02/02/2012",
        balance: 300
    }
]

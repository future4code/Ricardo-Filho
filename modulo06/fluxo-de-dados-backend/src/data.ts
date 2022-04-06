import {v4 as generateId} from "uuid";

export type Product = {
    id: string,
    name: string,
    price:number
}

export const products: Product [] = [
    {
        id: generateId(),
        name: "Processador I9 - F11",
        price: 1890
    },
    {
        id: generateId(),
        name: "Motherboard Intel",
        price: 950
    },
    {
        id: generateId(),
        name: "RTX3060",
        price: 3560
    },
    {
        id: generateId(),
        name: "RAM DDR4 16GB",
        price: 699
    },
]

import Place from "./Place";

export default class Commerce extends Place {
    constructor(
        private floorsQuantity: number,
        cep: string
    ) {
        super(cep);
    }

    getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}
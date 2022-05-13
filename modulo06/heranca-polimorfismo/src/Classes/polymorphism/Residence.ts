import Place from "./Place";

export default class Residence extends Place {
    constructor(
        private residentsQuantity: number,
        cep: string
    ) {
        super(cep);
    }



    getResidentsQuantity() {
        return this.residentsQuantity
    }
}
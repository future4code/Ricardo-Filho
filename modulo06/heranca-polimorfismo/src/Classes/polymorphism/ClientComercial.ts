import Client from "./ClientInterface";
import Commerce from "./Commerce";

export default class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    getCnpj(): string {
        return this.cnpj
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}
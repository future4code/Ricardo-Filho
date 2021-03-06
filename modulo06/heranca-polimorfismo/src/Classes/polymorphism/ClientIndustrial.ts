import Client from './ClientInterface';
import Industry from "./Industry";

export default class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: number,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    public getIndustryNumber(): number {
        return this.industryNumber;
    }


    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
}
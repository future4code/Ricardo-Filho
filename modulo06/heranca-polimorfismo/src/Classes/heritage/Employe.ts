import  User  from "./Users"

export default class Employe extends User {
    constructor(
        protected admissionDate: string,
        protected baseSalary: number,
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        super(id, email, name, password)
    }

    public getAdmissionDate(): string {
        return this.admissionDate
    }

    public getBaseSalary(): number {
        return this.baseSalary
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + 400
    }
}
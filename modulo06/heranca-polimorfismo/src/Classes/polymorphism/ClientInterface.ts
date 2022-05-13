export default interface Client {
    name: string
    registrationNumber: number
    consumedEnergy: number
    calculateBill(): number
}
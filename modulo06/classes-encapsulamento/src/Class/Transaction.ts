export default class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(
        description: string,
        value: number,
        date: string
               )
    {
        this.description = description;
        this.value = value;
        this.date = date;
    }
    public getDescription = () => this.description;
    public getValue = () => this.value;
    public getDate = () => this.date;

}
  
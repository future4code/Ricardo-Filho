import Transaction from "./Transaction";
import UserAccount from "./UserAccount";


export default class Bank {
    private accounts: UserAccount[];
    private transactions: Transaction[] = [];

    constructor(accounts: UserAccount[], transactions: Transaction[]) {
      this.accounts = accounts;
      this.transactions = transactions
    }
    public getAccount =():UserAccount[]=> this.accounts
    public getTransaction =():Transaction[]=> this.transactions
  }
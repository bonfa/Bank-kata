import {Transaction} from "./Transaction";

export class Transactions {
  private constructor(private transactions: Transaction[]) {
  }

  add(transaction: Transaction) {
    this.transactions = this.transactions.concat(transaction);
  }

  static empty(): Transactions {
    return new Transactions([]);
  }

  static from(transactions: Transaction[]) {
    return new Transactions(transactions)
  }

  toArray(): Transaction[] {
    return (<any>Object).assign([], this.transactions);
  }


}
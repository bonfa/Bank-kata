import {Transaction} from "./Transaction";

export class Transactions {
  private transactions: Transaction[];

  constructor(...transaction: Transaction[]) {
    this.transactions = transaction ? transaction : [];
  }

  add(transaction: Transaction) {
    this.transactions = this.transactions.concat(transaction);
  }
}
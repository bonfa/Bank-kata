import {Transaction} from "./Transaction";
import {Transactions} from "./Transactions";

export class TransactionRepository {
  private readonly transactions: Transactions;

  constructor() {
    this.transactions = Transactions.empty();
  }

  addTransaction(transaction: Transaction): void {
    this.transactions.add(transaction);
  }

  allTransactions(): Transactions {
    return this.transactions;
  }
}
import {Transaction} from "./Transaction";
import {Transactions} from "../Transactions";

export interface TransactionRepository {
  addTransaction(transaction: Transaction): void;
  allTransactions(): Transactions;
}
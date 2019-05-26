import {Transaction} from "./Transaction";

export interface TransactionRepository {
  addTransaction(transaction: Transaction): void;
}
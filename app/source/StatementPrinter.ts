import {Transactions} from "../Transactions";

export interface StatementPrinter {
  printStatement(transactions: Transactions): void;
}
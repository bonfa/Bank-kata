import {TransactionRepository} from "./TransactionRepository";
import {Transaction} from "./Transaction";
import {StatementPrinter} from "./StatementPrinter";

export class Account {
  constructor(private readonly transactionRepository: TransactionRepository, private readonly statementPrinter: StatementPrinter) {
  }

  deposit(number: number): void {
    this.transactionRepository.addTransaction(Transaction.depositOf(number))
  }

  withdraw(number: number): void {
    this.transactionRepository.addTransaction(Transaction.withdrawOf(number))
  }

  printStatement(): void {
    let allTransactions = this.transactionRepository.allTransactions();
    this.statementPrinter.printStatement(allTransactions);
  }
}
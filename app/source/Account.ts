import {TransactionRepository} from "./TransactionRepository";
import {Transaction} from "./Transaction";
import {StatementPrinter} from "./StatementPrinter";
import {Calendar} from "./Calendar";

export class Account {
  constructor(private readonly transactionRepository: TransactionRepository,
              private readonly statementPrinter: StatementPrinter,
              private readonly calendar: Calendar) {
  }

  deposit(number: number): void {
    this.transactionRepository.addTransaction(Transaction.depositOf(number, this.calendar.now()))
  }

  withdraw(number: number): void {
    this.transactionRepository.addTransaction(Transaction.withdrawOf(number, this.calendar.now()))
  }

  printStatement(): void {
    let allTransactions = this.transactionRepository.allTransactions();
    this.statementPrinter.printStatementOf(allTransactions);
  }
}
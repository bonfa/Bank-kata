import {TransactionRepository} from "./TransactionRepository";
import {Transaction} from "./Transaction";
import {StatementPrinter} from "./StatementPrinter";
import {Calendar} from "../__test__/AccountTest";

export class Account {
  constructor(private readonly transactionRepository: TransactionRepository,
              private readonly statementPrinter: StatementPrinter,
              private readonly calendar: Calendar) {
  }

  deposit(number: number): void {
    this.transactionRepository.addTransaction(Transaction.depositOf(number, this.calendar.now()))
  }

  withdraw(number: number): void {
    this.transactionRepository.addTransaction(Transaction.withdrawOf(number))
  }

  printStatement(): void {
    let allTransactions = this.transactionRepository.allTransactions();
    this.statementPrinter.printStatement(allTransactions);
  }
}
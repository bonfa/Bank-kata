import {TransactionRepository} from "./TransactionRepository";
import {Transaction} from "./Transaction";

export class Account {
  constructor(private readonly transactionRepository: TransactionRepository) {
  }

  deposit(number: number): void {
    this.transactionRepository.addTransaction(Transaction.depositOf(number))
  }

  withdraw(number: number): void {
    this.transactionRepository.addTransaction(Transaction.withdrawOf(number))
  }

  printBalance(): void {

  }
}
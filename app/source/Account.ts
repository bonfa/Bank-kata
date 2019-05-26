import {Transaction, TransactionRepository} from "../__test__/AccountTest";

export class Account {
  constructor(private readonly transactionRepository: TransactionRepository) {
  }

  deposit(number: number): void {
    this.transactionRepository.addTransaction(new Transaction(number))
  }

  withdraw(number: number): void {

  }

  printBalance(): void {

  }
}
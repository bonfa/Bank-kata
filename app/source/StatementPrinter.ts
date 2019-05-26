import {Transactions} from "./Transactions";
import {Output} from "./Output";

const HEADER = "Date | Amount | Balance";

export class StatementPrinter {
  constructor(private readonly output: Output) {
  }

  printStatementOf(transactions: Transactions): void {
    this.output.printLine(HEADER);
    let transactionsArray = transactions.toArray();

    let balanceAfterTransaction = 0;
    for (let index = 0; index < transactionsArray.length; index++) {
      let transaction = transactionsArray[index];
      balanceAfterTransaction = balanceAfterTransaction + transaction.getAmount();
      this.printTransaction(transaction, balanceAfterTransaction);
    }
  }

  private printTransaction(transaction, balanceAfterTransaction) {
    this.output.printLine(this.formatDate(transaction.getDate()) + " | " + transaction.getAmount() + " | " + balanceAfterTransaction);
  }

  private formatDate(date: Date): string {
    return date.getDate() + "." + this.formatTwoDigits(date.getMonth() + 1) + "." + date.getFullYear();
  }

  private formatTwoDigits(number: number): string {
    return number > 9
      ? ("" + number)
      : ("0" + number);
  }
}
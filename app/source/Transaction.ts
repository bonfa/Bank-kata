export class Transaction {
  constructor(private readonly amount: number, private readonly date: Date) {
  }

  static depositOf(amount: number, onDate: Date) {
    return new Transaction(amount, onDate);
  }

  static withdrawOf(number: number, onDate: Date) {
    return new Transaction(-number, onDate);
  }

  getDate(): Date {
    return this.date;
  }

  getAmount(): number {
    return this.amount;
  }
}
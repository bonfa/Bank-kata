export class Transaction {
  constructor(private readonly amount: number, private readonly onDate: Date) {
  }

  static depositOf(amount: number, onDate: Date) {
    return new Transaction(amount, onDate);
  }

  static withdrawOf(number: number) {
    return new Transaction(-number, null);
  }
}
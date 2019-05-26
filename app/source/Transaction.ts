export class Transaction {
  private constructor(private readonly amount: number) {
  }

  static depositOf(amount: number) {
    return new Transaction(amount);
  }

  static withdrawOf(number: number) {
    return new Transaction(-number);
  }
}
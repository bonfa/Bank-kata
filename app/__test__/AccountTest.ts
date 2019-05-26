import {Account} from "../source/Account";
import {Mock, Times} from "typemoq";

export class Transaction {
  constructor(private readonly amount: number) {
  }
}

export interface TransactionRepository {
  addTransaction(transaction: Transaction): void;
}

describe('Account', () => {
  describe('when deposit some money', () => {
    it('should store the transaction in the repository', () => {
      let transactionRepository = Mock.ofType<TransactionRepository>();
      let account = new Account(transactionRepository.object);

      account.deposit(400);

      transactionRepository.verify(it => it.addTransaction(new Transaction(400)), Times.once());
    });
  });
});
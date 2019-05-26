import {Account} from "../source/Account";
import {Mock, Times} from "typemoq";
import {TransactionRepository} from "../source/TransactionRepository";
import {Transaction} from "../source/Transaction";

describe('Account', () => {
  describe('when deposit some money', () => {
    it('should store the transaction in the repository', () => {
      let transactionRepository = Mock.ofType<TransactionRepository>();
      let account = new Account(transactionRepository.object);

      account.deposit(400);

      transactionRepository.verify(it => it.addTransaction(Transaction.depositOf(400)), Times.once());
    });
  });

  describe('when withdraw some money', () => {
    it('should store the transaction in the repository', () => {
      let transactionRepository = Mock.ofType<TransactionRepository>();
      let account = new Account(transactionRepository.object);

      account.withdraw(300);

      transactionRepository.verify(it => it.addTransaction(Transaction.withdrawOf(300)), Times.once());
    });
  });
});
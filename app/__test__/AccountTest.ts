import {Account} from "../source/Account";
import {IMock, Mock, Times} from "typemoq";
import {TransactionRepository} from "../source/TransactionRepository";
import {Transaction} from "../source/Transaction";

describe('Account', () => {
  let transactionRepository: IMock<TransactionRepository>;
  let account: Account;

  beforeEach(() => {
    transactionRepository = Mock.ofType<TransactionRepository>();
    account = new Account(transactionRepository.object);
  });

  describe('when depositing some money', () => {
    it('should store the transaction in the repository', () => {
      account.deposit(400);

      transactionRepository.verify(it => it.addTransaction(Transaction.depositOf(400)), Times.once());
    });
  });

  describe('when withdrawing some money', () => {
    it('should store the transaction in the repository', () => {
      account.withdraw(300);

      transactionRepository.verify(it => it.addTransaction(Transaction.withdrawOf(300)), Times.once());
    });
  });

  // describe('when printing the statement', () => {
  //   it('it should call the statement printer with the proper transaction', () => {
  //   });
  // });
});
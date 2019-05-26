import {TransactionRepository} from "../source/TransactionRepository";
import {Transactions} from "../source/Transactions";
import {Transaction} from "../source/Transaction";

describe('TransactionRepository', () => {
  describe('when no transactions are added', () => {
    it('returns an empty transactions', () => {
      let transactionRepository = new TransactionRepository();

      let allTransactions = transactionRepository.allTransactions();

      expect(allTransactions).toEqual(Transactions.empty())
    });
  });

  describe('when one transaction is added', () => {
    it('returns the transactions containing such item', () => {
      let transactionRepository = new TransactionRepository();
      transactionRepository.addTransaction(Transaction.withdrawOf(400, A_DATE));

      let allTransactions = transactionRepository.allTransactions();

      expect(allTransactions).toEqual(Transactions.from([Transaction.withdrawOf(400, A_DATE)]))

    });
  });

  describe('when many transactions are added', () => {
    it('returns the transactions containing all the items sorted by order of insertion', () => {
      let transactionRepository = new TransactionRepository();
      transactionRepository.addTransaction(Transaction.depositOf(1000, A_DATE));
      transactionRepository.addTransaction(Transaction.withdrawOf(400, A_DATE));
      transactionRepository.addTransaction(Transaction.withdrawOf(300, ANOTHER_DATE));

      let allTransactions = transactionRepository.allTransactions();

      expect(allTransactions).toEqual(
        Transactions.from([
          Transaction.depositOf(1000, A_DATE),
          Transaction.withdrawOf(400, A_DATE),
          Transaction.withdrawOf(300, ANOTHER_DATE)]
        )
      )
    });
  });
});

const A_DATE = new Date();

const ANOTHER_DATE = new Date();

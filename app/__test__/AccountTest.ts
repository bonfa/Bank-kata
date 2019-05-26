import {Account} from "../source/Account";
import {IMock, Mock, Times} from "typemoq";
import {TransactionRepository} from "../source/TransactionRepository";
import {Transaction} from "../source/Transaction";
import {Transactions} from "../Transactions";
import {StatementPrinter} from "../source/StatementPrinter";

export interface Calendar {
  now(): Date;
}

describe('Account', () => {
  let transactionRepository: IMock<TransactionRepository>;
  let statementPrinter: IMock<StatementPrinter>;
  let calendar: IMock<Calendar>;
  let account: Account;

  beforeEach(() => {
    transactionRepository = Mock.ofType<TransactionRepository>();
    statementPrinter = Mock.ofType<StatementPrinter>();
    calendar = Mock.ofType<Calendar>();

    account = new Account(transactionRepository.object, statementPrinter.object, calendar.object);
  });

  describe('when depositing some money', () => {
    it('should store the transaction in the repository', () => {
      calendar.setup(it => it.now()).returns(() => A_DATE);

      account.deposit(400);

      transactionRepository.verify(it => it.addTransaction(Transaction.depositOf(400, A_DATE)), Times.once());
    });
  });

  describe('when withdrawing some money', () => {
    it('should store the transaction in the repository', () => {
      calendar.setup(it => it.now()).returns(() => A_DATE);

      account.withdraw(300);

      transactionRepository.verify(it => it.addTransaction(Transaction.withdrawOf(300, A_DATE)), Times.once());
    });
  });

  describe('when printing the statement', () => {
    it('it should call the statement printer with the proper transaction', () => {
      transactionRepository.setup(it => it.allTransactions()).returns(() => someTransactions());

      account.printStatement();

      statementPrinter.verify(it => it.printStatement(someTransactions()), Times.once());
    });
  });
});

const A_DATE = new Date();

const someTransactions: () => Transactions = () => {
  return new Transactions()
};

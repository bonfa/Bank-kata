import {Mock, Times} from "typemoq";
import {Account} from "../source/Account";
import {Output} from "../source/Output";
import {TransactionRepository} from "../source/TransactionRepository";
import {StatementPrinter} from "../source/StatementPrinter";
import {Calendar} from "../source/Calendar";

class TestableCalendar extends Calendar {
  constructor() {
    super();
  }

  now(): Date {
    return new Date(2016, 7, 23);
  }
}

describe('It works', () => {
  const output = Mock.ofType<Output>();
  const account = new Account(new TransactionRepository(), new StatementPrinter(output.object), new TestableCalendar());
  account.deposit(500);
  account.withdraw(100);

  account.printStatement();

  output.verify(it=>it.printLine("Date | Amount | Balance"), Times.exactly(1));
  output.verify(it=>it.printLine("23.08.2016 | +500 | 500"), Times.exactly(1));
  output.verify(it=>it.printLine("23.08.2016 | -100 | 400"), Times.exactly(1));
});

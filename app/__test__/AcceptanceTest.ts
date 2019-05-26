import {Mock, Times} from "typemoq";
import {Account} from "../source/Account";
import {Output} from "../source/Output";

describe('It works', () => {
  const output = Mock.ofType<Output>();
  const account = new Account(transactionRepository.object);
  account.deposit(500);
  account.withdraw(100);

  account.printBalance();

  output.verify(it=>it.print("Date | Amount | Balance"), Times.exactly(1));
  output.verify(it=>it.print("24.12.2015 | +500 | 500"), Times.exactly(1));
  output.verify(it=>it.print("23.8.2016 | -100 | 400"), Times.exactly(1));
});
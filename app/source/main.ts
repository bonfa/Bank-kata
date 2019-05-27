import {Output} from "./Output";
import {Account} from "./Account";
import {TransactionRepository} from "./TransactionRepository";
import {StatementPrinter} from "./StatementPrinter";
import {Calendar} from "./Calendar";

const account = new Account(new TransactionRepository(), new StatementPrinter(new Output()), new Calendar());
account.deposit(500);
account.withdraw(100);

account.printStatement();
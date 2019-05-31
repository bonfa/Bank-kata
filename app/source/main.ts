import {Account} from "./Account";
import {TransactionRepository} from "./TransactionRepository";
import {StatementPrinter} from "./StatementPrinter";
import {Calendar} from "./Calendar";
import {ConsoleOutput} from "./ConsoleOutput";

const account = new Account(new TransactionRepository(), new StatementPrinter(new ConsoleOutput()), new Calendar());
account.deposit(500);
account.withdraw(100);
account.withdraw(130);

account.printStatement();
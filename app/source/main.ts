import {Account} from "./Account";
import {TransactionRepository} from "./TransactionRepository";
import {StatementPrinter} from "./StatementPrinter";
import {ConsoleOutput} from "./ConsoleOutput";
import {CalendarImpl} from "./CalendarImpl";

const account = new Account(new TransactionRepository(), new StatementPrinter(new ConsoleOutput()), new CalendarImpl());
account.deposit(500);
account.withdraw(100);
account.withdraw(130);

account.printStatement();
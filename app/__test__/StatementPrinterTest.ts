import {StatementPrinter} from "../source/StatementPrinter";
import {Transactions} from "../source/Transactions";
import {Output} from "../source/Output";
import {Mock, Times} from "typemoq";
import {Transaction} from "../source/Transaction";

describe('StatementPrinter', () => {
  it('always prints the header', () => {
    let output = Mock.ofType<Output>();
    let statementPrinter = new StatementPrinter(output.object);

    statementPrinter.printStatementOf(Transactions.empty());

    output.verify(it => it.printLine("Date | Amount | Balance"), Times.once())
  });

  it('prints the header and the transactions', () => {
    let output = Mock.ofType<Output>();
    let statementPrinter = new StatementPrinter(output.object);

    statementPrinter.printStatementOf(Transactions.from([
        Transaction.depositOf(200, ANOTHER_DATE),
        Transaction.depositOf(100, A_DATE)
      ])
    );

    output.verify(it => it.printLine("Date | Amount | Balance"), Times.once());
    output.verify(it => it.printLine("24.05.2019 | +200 | 200"), Times.once());
    output.verify(it => it.printLine("26.05.2019 | +100 | 300"), Times.once());
  });
});

const A_DATE = new Date(2019, 4, 26);

const ANOTHER_DATE = new Date(2019, 4, 24);

import {Output} from "./Output";

export class ConsoleOutput implements Output {
  printLine(statement: string): void {
    console.log(statement)
  }
}
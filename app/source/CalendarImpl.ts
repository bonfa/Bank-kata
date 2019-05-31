import {Calendar} from "./Calendar";

export class CalendarImpl implements Calendar {
  now(): Date {
    return new Date();
  }
}

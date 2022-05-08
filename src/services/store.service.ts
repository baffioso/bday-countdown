/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import {
  addYears,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds
} from 'date-fns';
import { BehaviorSubject, combineLatest, interval, Observable } from 'rxjs';
import {TimeUnit} from 'src/models/time-unit';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _dateOfBirth$ = new BehaviorSubject<Date>(null);
  dateOfBirth$: Observable<Date> = this._dateOfBirth$.asObservable();

  private _timeUnit$ = new BehaviorSubject<TimeUnit>(TimeUnit.days);
  timeUnit$: Observable<TimeUnit> = this._timeUnit$.asObservable();

  nextBday$ = this.dateOfBirth$.pipe(
    map(this.nextBday)
  );

  timeToBday$ = combineLatest([
    interval(1000),
    this.nextBday$,
    this.timeUnit$
  ]).pipe(
    filter(([, time, unit]) => !!time || !!unit),
    map(([, time, unit]) => this.timeToBday(time, unit)),
  );

  constructor() { }

  setBday(bday: Date): void {
    this._dateOfBirth$.next(bday);
  }

  setTimeUnit(unit: TimeUnit): void {
    this._timeUnit$.next(unit);
  }

  private nextBday(bday: Date): Date {
    const now = new Date();
    const bdayMonth = bday.getMonth();
    const bdayDay = bday.getDate();
    const currentYearBday = new Date(now.getFullYear(), bdayMonth, bdayDay);

    return currentYearBday.getTime() - now.getTime() > 0 ?
      currentYearBday :
      addYears(currentYearBday, 1);
  }

  private timeToBday(nextBday: Date, timeUnit: TimeUnit): number {

    let timeToBday: number;
    const now = new Date();

    switch (timeUnit) {
      case TimeUnit.seconds:
        timeToBday = differenceInSeconds(nextBday, now);
        break;
      case TimeUnit.minutes:
        timeToBday = differenceInMinutes(nextBday, now);
        break;
      case TimeUnit.hours:
        timeToBday = differenceInHours(nextBday, now);
        break;
      case TimeUnit.days:
        timeToBday = differenceInDays(nextBday, now) + 1;
        break;
      case TimeUnit.months:
        timeToBday = differenceInMonths(nextBday, now);
        break;
      default:
        break;
    }

    return timeToBday;
  }
}

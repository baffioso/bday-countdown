import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeUnit } from 'src/models/time-unit';
import { StoreService } from 'src/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {

  dateOfBirth$: Observable<Date>;
  nextBday$: Observable<Date>;
  timeToBday$: Observable<number>;
  timeUnit$: Observable<TimeUnit>;

  timeUnit = TimeUnit;

  constructor(
    private store: StoreService
  ) {}

  ngOnInit(): void {
    this.dateOfBirth$ = this.store.dateOfBirth$;
    this.nextBday$ = this.store.nextBday$;
    this.timeToBday$ = this.store.timeToBday$;
    this.timeUnit$ = this.store.timeUnit$;
  }

  onTimeUnitChanged(event: any) {
    this.store.setTimeUnit(event.detail.value);
  }

  onDateChanged(event: any) {
    this.store.setBday(new Date(event.detail.value));
  }



}

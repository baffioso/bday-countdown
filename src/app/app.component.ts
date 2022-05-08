import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { TimeUnit } from 'src/models/time-unit';
import { StorageService } from 'src/services/storage.service';
import { StoreService } from 'src/services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: StoreService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.storage.get('bday').pipe(
      filter(res => res.value !== null),
      tap(res => {
          this.store.setBday(new Date(res.value));
      })
    ).subscribe();

    this.storage.get('unit').pipe(
      filter(res => res.value !== null),
      tap(res => {
          this.store.setTimeUnit(res.value as TimeUnit);
      })
    ).subscribe();
  }
}

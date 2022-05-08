import { Injectable } from '@angular/core';
import { GetResult, Storage } from '@capacitor/storage';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: any): void {
      Storage.set({key, value: JSON.stringify(value)});
  }

  get(key: string): Observable<GetResult> {
    return from(Storage.get({key})).pipe(
      map(res => ({value: JSON.parse(res.value)}))
    );
  }
}

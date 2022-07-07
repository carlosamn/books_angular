import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as fromStore from './../store';

@Injectable({
  providedIn: 'root',
})
export class ListResolver implements Resolve<boolean> {
  constructor(private store: Store) {}
  resolve(): Observable<boolean> {
    this.store.dispatch(fromStore.loadBooks());
    return of(true);
  }
}

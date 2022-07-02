import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BooksService } from '../services/books.service';

@Injectable({
  providedIn: 'root',
})
export class ListResolver implements Resolve<boolean> {
  constructor(private _booksService: BooksService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this._booksService.getBooks().subscribe(() => {});

    return of(true);
  }
}

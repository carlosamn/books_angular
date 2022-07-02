import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { BooksService } from './services/books.service';
import * as actions from '../app/store/actions';
import { BookI } from './models/book-interface';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private bookService: BooksService) {}

  loadBooks$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.loadBooks),
        exhaustMap(() => {
          return this.bookService.getBooks().pipe(
            map((book: BookI[]) => {
              return actions.loadBooksSuccess({ book });
            }),
            catchError((error) => {
              return of(
                actions.loadBooksFailure({
                  error,
                })
              );
            })
          );
        })
      ),
    { useEffectsErrorHandler: false }
  );
}

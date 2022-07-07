import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { exhaustMap, map, catchError, switchMap } from 'rxjs/operators';
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
            map((bookList: BookI[]) => {
              return actions.loadBooksSuccess({ bookList });
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

  addBook$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.addBook),
        exhaustMap(({ book }) => {
          return this.bookService.postBooks(book).pipe(
            map((book: any) => {
              return actions.addBookSuccess({ book });
            }),
            catchError((error) => {
              return of(
                actions.addBookFailure({
                  error,
                })
              );
            })
          );
        })
      ),
    { useEffectsErrorHandler: false }
  );

  updateBook$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.updateBook),
        exhaustMap(({ book }) => {
          return this.bookService.updateBooks(book).pipe(
            map(() => {
              return actions.updateBookSucces({ book });
            }),
            catchError((error) => {
              return of(
                actions.addBookFailure({
                  error,
                })
              );
            })
          );
        })
      ),
    { useEffectsErrorHandler: false }
  );

  deleteBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteBook),
      exhaustMap(({ id }) => {
        return this.bookService.deleteBooks(id).pipe(
          switchMap(() => {
            let log = {
              id: id,
              title: `id: ${id}`,
              authors: [],
              changeDetails: 'Book deleted',
              updatedAt: new Date(),
            };

            return this.bookService.postLog(log).pipe(
              switchMap((log) => {
                return of(
                  actions.deleteBookSucces({ id }),
                  actions.addLogSuccess({ log })
                );
              })
            );
          }),
          catchError((error) => {
            return of(
              actions.deleteBookFailure({
                error,
              })
            );
          })
        );
      })
    )
  );

  loadLogs$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.loadLogs),
        exhaustMap(() => {
          return this.bookService.getLogs().pipe(
            map((logs: BookI[]) => {
              return actions.loadLogsSuccess({ logs });
            }),
            catchError((error) => {
              return of(
                actions.loadLogsFailure({
                  error,
                })
              );
            })
          );
        })
      ),
    { useEffectsErrorHandler: false }
  );

  addLog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.addLog),
        exhaustMap(({ log }) => {
          return this.bookService.postLog(log).pipe(
            map((book: any) => {
              return actions.addLogSuccess({ log });
            }),
            catchError((error) => {
              return of(
                actions.addLogFailure({
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

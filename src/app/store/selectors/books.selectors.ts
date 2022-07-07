import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from '../reducers/books.reducer';

export const getBooksState = createFeatureSelector<BookState>('books');

export const getBooks = createSelector(getBooksState, (book) => {
  return book.bookList;
});

export const getLogs = createSelector(getBooksState, (book) => {
  return book.logs;
});

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers/index';
import * as booksReducer from '../reducers/books.reducer';
import { BookI } from 'src/app/models/book-interface';

export const getBooksState =
  createFeatureSelector<booksReducer.BookState>('books');

export const getBooks = createSelector(getBooksState, (book) => book.bookList);

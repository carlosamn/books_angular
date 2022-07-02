import { createReducer, on } from '@ngrx/store';
import * as BooksActions from '../actions';
import { BookI } from 'src/app/models/book-interface';

export const booksFeatureKey = 'books';

export interface BookState {
  bookList: BookI[];
}

export const initialState: BookState = {
  bookList: [],
};

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.loadBooksSuccess, (state, { book }) => ({
    ...state,
    book: [...state.bookList, book],
  }))
);

export const getBooks = (state: BookState) => state.bookList;

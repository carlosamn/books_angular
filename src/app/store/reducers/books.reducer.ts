import { createReducer, on } from '@ngrx/store';
import * as BooksActions from '../actions';
import { BookI } from 'src/app/models/book-interface';

export const booksFeatureKey = 'books';

export interface BookState {
  bookList: BookI[];
  logs: BookI[];
}

export const initialState: BookState = {
  bookList: [],
  logs: [],
};

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.loadBooksSuccess, (state, { bookList }) => ({
    ...state,
    bookList,
  })),
  on(BooksActions.loadBooksFailure, (state, error) => ({
    ...state,
    error,
  })),
  on(BooksActions.addBookSuccess, (state, { book }) => ({
    ...state,
    bookList: [...state.bookList, book],
  })),
  on(BooksActions.deleteBookSucces, (state, { id }) => ({
    ...state,
    bookList: state.bookList.filter((books) => books.id !== id),
  })),
  on(BooksActions.updateBookSucces, (state, { book }) => ({
    ...state,
    bookList: state.bookList.map((x) => (x.id === book.id ? book : x)),
  })),
  on(BooksActions.loadLogsSuccess, (state, { logs }) => ({
    ...state,
    logs,
  })),
  on(BooksActions.loadLogsFailure, (state, error) => ({
    ...state,
    error,
  })),
  on(BooksActions.addLogSuccess, (state, { log }) => ({
    ...state,
    logs: [...state.logs, log],
  }))
);

export function getBooks(state: BookState, action: any) {
  return booksReducer(state, action);
}

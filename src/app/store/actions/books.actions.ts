import { createAction, props } from '@ngrx/store';
import { BookI } from 'src/app/models/book-interface';

export const loadBooks = createAction('[Books] Load Books', props);

export const loadBooksSuccess = createAction(
  '[Books] Load Books Success',
  props<{ book: BookI[] }>()
);

export const loadBooksFailure = createAction(
  '[Books] Load Books Failure',
  props<{ error: any }>()
);

export const addBook = createAction(
  '[Books] add Book',
  props<{ book: BookI }>()
);

export const addBookSuccess = createAction(
  '[Books] add Book success',
  props<{ book: BookI }>()
);

export const addBookFailure = createAction(
  '[Books] add Book failure',
  props<{ error: any }>()
);

export const updateBook = createAction(
  '[Books] update Book',
  props<{ book: BookI }>()
);

export const updateBookSucces = createAction(
  '[Books] update Book success',
  props<{ data: any }>()
);

export const updateBookFailure = createAction(
  '[Books] add Book failure',
  props<{ error: any }>()
);

export const deleteBook = createAction(
  '[Books] delete Book',
  props<{ id: string }>()
);

export const deleteBookSucces = createAction(
  '[Books] update Book success',
  props<{ data: any }>()
);

export const deleteBookFailure = createAction(
  '[Books] add Book failure',
  props<{ error: any }>()
);

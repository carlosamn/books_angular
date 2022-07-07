import { createAction, props } from '@ngrx/store';
import { BookI } from 'src/app/models/book-interface';

export const loadBooks = createAction('[Books] Load Books', props);

export const loadBooksSuccess = createAction(
  '[Books] Load Books Success',
  props<{ bookList: BookI[] }>()
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
  props<{ book: BookI }>()
);

export const updateBookFailure = createAction(
  '[Books] update Book failure',
  props<{ error: any }>()
);

export const deleteBook = createAction(
  '[Books] delete Book',
  props<{ id: any }>()
);

export const deleteBookSucces = createAction(
  '[Books] delete Book success',
  props<{ id: any }>()
);

export const deleteBookFailure = createAction(
  '[Books] add Book failure',
  props<{ error: any }>()
);

export const loadLogs = createAction('[Logs] Load Logs', props);

export const loadLogsSuccess = createAction(
  '[Logs] Load Logs Success',
  props<{ logs: BookI[] }>()
);

export const loadLogsFailure = createAction(
  '[Logs] Load Logs Failure',
  props<{ error: any }>()
);

export const addLog = createAction('[Logs] add Logs', props<{ log: BookI }>());

export const addLogSuccess = createAction(
  '[Logs] Add Logs success',
  props<{ log: BookI }>()
);

export const addLogFailure = createAction(
  '[Logs] Add Logs failure',
  props<{ error: any }>()
);

import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';
import * as fromBooks from './books.reducer';

export interface BookState {
  books: fromBooks.BookState;
}

export function reducers(state: BookState, action: Action) {
  return combineReducers({
    books: fromBooks.booksReducer,
  })(state, action);
}
export const getBooksFeatureState = createFeatureSelector<BookState>('books');

// export const reducers: ActionReducerMap<State> = {};

// export const metaReducers: MetaReducer<State>[] = !environment.production
//   ? []
//   : [];

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  throwError,
  tap,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookI } from '../models/book-interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private _http: HttpClient) {}

  getBooks(): Observable<BookI[]> {
    return this._http
      .get(`${environment.apiUrl}/api/Book`)
      .pipe(tap((resp: any) => {}));
  }

  getBookById(id: string): Observable<BookI> {
    return this._http.get(`${environment.apiUrl}/api/Book/${id}`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((response) => {
        return throwError(() => response.error);
      })
    );
  }

  postBooks(book: BookI): Observable<BookI> {
    return this._http.post(`${environment.apiUrl}/api/Book`, book).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((response) => {
        return throwError(() => response.error);
      })
    );
  }

  updateBooks(book: BookI): Observable<BookI> {
    return this._http
      .put(`${environment.apiUrl}/api/Book/${book.id}`, book)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((response) => {
          return throwError(() => response.error);
        })
      );
  }

  deleteBooks(id: string): Observable<any> {
    return this._http.delete(`${environment.apiUrl}/api/Book/${id}`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error.error);
      })
    );
  }

  getLogs(): Observable<BookI[]> {
    return this._http
      .get(`${environment.apiUrl}/api/Logs`)
      .pipe(tap((resp: any) => {}));
  }

  postLog(log: BookI): Observable<BookI> {
    return this._http.post(`${environment.apiUrl}/api/Logs`, log).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((response) => {
        return throwError(() => response.error);
      })
    );
  }
}

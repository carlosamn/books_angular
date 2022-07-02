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
  private _books: BehaviorSubject<any> = new BehaviorSubject(null);
  private _logs: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _http: HttpClient) {}

  get books(): Observable<any> {
    return this._books.asObservable();
  }

  set books(book: any) {
    this._books.next(book);
  }

  get logs(): Observable<any> {
    return this._logs.asObservable();
  }

  set logs(book: any) {
    this._logs.next(book);
  }

  getBooks(): Observable<BookI[]> {
    return this._http.get(`${environment.apiUrl}/api/Book`).pipe(
      tap((resp: any) => {
        this._books.next(resp);
      })
    );
  }

  getBookById(id: string): Observable<BookI> {
    return this._http.get(`${environment.apiUrl}/api/Book/${id}`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((response) => {
        return throwError(response.error);
      })
    );
  }

  postBooks(bookData: BookI): Observable<BookI> {
    return this._http.post(`${environment.apiUrl}/api/Book`, bookData).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((response) => {
        return throwError(response.error);
      })
    );
  }

  updateBooks(bookData: BookI): Observable<BookI> {
    return this._http
      .put(`${environment.apiUrl}/api/Book/${bookData.id}`, bookData)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }

  deleteBooks(id: string): Observable<any> {
    return this._http.delete(`${environment.apiUrl}/api/Book/${id}`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((response) => {
        return throwError(response.error);
      })
    );
  }

  getLogs(): Observable<BookI[]> {
    return this._http.get(`${environment.apiUrl}/api/Logs`).pipe(
      tap((resp: any) => {
        this._logs.next(resp);
      })
    );
  }

  postLog(logData: BookI): Observable<BookI> {
    return this._http.post(`${environment.apiUrl}/api/Logs`, logData).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((response) => {
        return throwError(response.error);
      })
    );
  }
}

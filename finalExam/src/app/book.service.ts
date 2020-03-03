import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  URL = 'http://localhost:8081/books';


  constructor(private httpClient: HttpClient) {
  }

  getBookList(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL);
  }

  createBook(book: Partial<IBook>): Observable<any> {
    return this.httpClient.post<any>(this.URL, book);
  }

  getBook(id: number): Observable<any> {
    return this.httpClient.get<any>(this.URL + id);
  }


  updateBook(id: number, name: string, read: string): Observable<any> {
    const book = {
      id,
      name,
      read
    };
    return this.httpClient.put<any>(this.URL, book);
  }

}

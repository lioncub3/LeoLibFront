import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl: string;

  constructor(private http: HttpClient) {
    this.booksUrl = 'http://localhost:8080/books';
  }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  public findByGategoryId(categoryId: Int32Array): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl + "/" + categoryId);
  }

  public save(book: Book) {
    return this.http.post<Book>(this.booksUrl, book);
  }

  public delete(id: Int32Array) {
    return this.http.delete(this.booksUrl + "/" + id);
  }
}

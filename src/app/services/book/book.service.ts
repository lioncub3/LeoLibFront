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

  public findOne(id: number): Observable<Book> {
    return this.http.get<Book>("http://localhost:8080/book" + "/" + id);
  }

  public findByGategoryId(categoryId: number): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl + "/" + categoryId);
  }

  public save(book: Book) {
    return this.http.post<Book>(this.booksUrl, book);
  }

  public delete(id: number) {
    return this.http.delete(this.booksUrl + "/" + id);
  }

  public update(book: Book) {
    console.log(book);
    return this.http.put(this.booksUrl, book);
  }
}

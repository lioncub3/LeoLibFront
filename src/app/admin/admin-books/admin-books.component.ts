import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book/book';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnInit {

  books : Book[];

  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.bookService.findAll().subscribe(data => {
      this.books = data;
    });
  }

  removeBook(id : Int32Array) {
    this.bookService.delete(id).subscribe();
  }
}

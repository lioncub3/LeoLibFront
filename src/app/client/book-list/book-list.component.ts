import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book/book';
import { BookService } from '../../services/book/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books : Book[];

  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.bookService.findAll().subscribe(data => {
      this.books = data;
    });
  }

  getBookByCategoryId(id : number) {
    this.bookService.findByGategoryId(id).subscribe(data => {
      this.books = data;
    });
  }
}

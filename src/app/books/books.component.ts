import { Component, OnInit, ViewChild } from '@angular/core';
import { Genre } from '../models/genre/genre';
import { GenreService } from '../services/genre/genre.service';
import { Book } from '../models/book/book';
import { BookService } from '../services/book/book.service';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  @ViewChild(BookListComponent, {static: false}) private bookListComponent: BookListComponent;
  genres : Genre[];

  constructor(private genreService : GenreService) { }

  ngOnInit() {
    this.genreService.findAll().subscribe(data => {
      this.genres = data;
    });
  }

  onChangeGenre(genreId) {
    this.bookListComponent.getBookByCategoryId(genreId);
  }
}

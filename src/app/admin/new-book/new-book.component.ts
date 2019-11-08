import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { GenreService } from 'src/app/services/genre/genre.service';
import { Genre } from 'src/app/models/genre/genre';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  book: Book;
  genres: Genre[];

  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
    private genreService : GenreService) { 
    this.book = new Book();
    this.book.genre = new Genre();
  }

  ngOnInit() {
    this.genreService.findAll().subscribe(data => {
      this.genres = data;
    });
  }

  addBook() {
    this.bookService.save(this.book).subscribe(result => this.gotoBooksList());
  }

  gotoBooksList() {
    this.router.navigate(['/admin/books']);
  }
}

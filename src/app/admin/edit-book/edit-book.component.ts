import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book/book';
import { BookService } from 'src/app/services/book/book.service';
import { Genre } from 'src/app/models/genre/genre';
import { GenreService } from 'src/app/services/genre/genre.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book : Book;
  genres : Genre[];
  private id: number;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
    private genreService : GenreService) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.book = new Book();
    this.book.genre = new Genre();
  }

  ngOnInit() {
    this.bookService.findOne(this.id).subscribe(data => {
      this.book = data;
    });

    this.genreService.findAll().subscribe(data => {
      this.genres = data;
    });
  }

  editBook() {
    this.bookService.update(this.book).subscribe(result => this.gotoBooksList());
  }

  gotoBooksList() {
    this.router.navigate(['/admin/books']);
  }
}

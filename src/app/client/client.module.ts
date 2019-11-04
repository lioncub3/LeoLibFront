import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BooksComponent, BookListComponent, RegistrationComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [ BooksComponent]
})
export class ClientModule { }

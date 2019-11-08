import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewBookComponent } from './new-book/new-book.component';



@NgModule({
  declarations: [AdminBooksComponent, EditBookComponent, NewBookComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AdminModule { }

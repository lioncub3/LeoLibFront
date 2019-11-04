import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminBooksComponent, EditBookComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }

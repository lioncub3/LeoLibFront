import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BooksComponent } from './client/books/books.component';
import { RegistrationComponent } from './client/registration/registration.component';
import { AdminBooksComponent } from './admin/admin-books/admin-books.component';
import { EditBookComponent } from './admin/edit-book/edit-book.component';
import { NewBookComponent } from './admin/new-book/new-book.component';


const routes: Routes = [
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: '/admin/books', pathMatch: 'full' },
      { path: 'books', component: AdminBooksComponent },
      { path: 'books/new-book', component: NewBookComponent},
      { path: 'books/edit-book/:id', component: EditBookComponent},
      { path: '**', component: NotFoundComponent }
    ]
  },
  {
    path: '',
    children: [
      { path: '', redirectTo: '/books', pathMatch: 'full' },
      { path: 'books', component: BooksComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: '**', component: NotFoundComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

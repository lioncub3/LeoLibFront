import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { BookService } from './services/book/book.service';
import { UserService } from './services/user/user.service';
import { GenreService } from './services/genre/genre.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    ClientModule,
  ],
  providers: [
    HttpClientModule,
    BookService,
    UserService,
    GenreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

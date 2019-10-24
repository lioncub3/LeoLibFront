import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/models/genre/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private genresUrl: string;
 
  constructor(private http: HttpClient) {
    this.genresUrl = 'http://localhost:8080/genres';
  }

  public findAll(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genresUrl);
  }
 
  public save(genre: Genre) {
    return this.http.post<Genre>(this.genresUrl, genre);
  }
}

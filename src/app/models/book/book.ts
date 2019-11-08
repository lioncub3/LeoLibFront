import { Genre } from '../genre/genre';

export class Book {
    id : number;
    name : String;
    description : String;
    publishDate : number;
    author : String;
    photoAddress : String;
    genre : Genre;
}

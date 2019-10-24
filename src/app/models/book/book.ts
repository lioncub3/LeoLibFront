import { Genre } from '../genre/genre';

export class Book {
    id : Int32Array;
    name : String;
    descrition : String;
    publishDate : Int32Array;
    author : String;
    photoAddress : String;
    genre : Genre;
}

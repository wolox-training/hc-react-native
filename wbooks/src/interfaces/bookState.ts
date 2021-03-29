import { Book } from '@interfaces/books';

export interface BookState {
  books: Book[];
  searchedBook: string;
}

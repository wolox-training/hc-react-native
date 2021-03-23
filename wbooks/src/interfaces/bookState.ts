import { Book } from '@interfaces/books';

export interface BookState {
  books: Book[];
  error: string;
}

import { Book } from '@interfaces/books';

export interface BookState {
  books: Book[];
  booksLoading: boolean;
  booksError: null | string;
}

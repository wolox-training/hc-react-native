import { Book } from '@interfaces/books';

interface ActionTypes {
  GET_BOOKS: '@@BOOKS/GET_BOOKS';
}

export const actions: ActionTypes = {
  GET_BOOKS: '@@BOOKS/GET_BOOKS'
};

function getBooks(books: Book[]) {
  return {
    type: actions.GET_BOOKS,
    books
  };
}

export default getBooks;

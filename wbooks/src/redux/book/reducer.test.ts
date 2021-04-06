import { Book } from '@interfaces/books';

import { actions } from './actions';
import booksReducer from './reducer';

const mockedBook: Book[] = [
  {
    id: 1,
    author: 'Stephen King',
    genre: 'Psychological horror',
    imageUrl: null,
    publisher: 'Doubleday',
    title: 'The Shining',
    year: '1977'
  }
];

const testActions = {
  getBooks: {
    type: actions.GET_BOOKS,
    target: 'books'
  },
  getBooksSuccess: {
    type: actions.GET_BOOKS_SUCCESS,
    target: 'books',
    payload: mockedBook
  },
  getBooksFailure: {
    type: actions.GET_BOOKS_FAILURE,
    target: 'books',
    payload: 'Something went wrong'
  },
  searchBooks: {
    type: actions.SEARCH_BOOKS,
    target: 'searchedBooks',
    payload: 'The Martian'
  }
};

describe('@@BOOKS/GET_BOOKS', () => {
  test('GET_BOOKS', () => {
    expect(booksReducer(undefined, testActions.getBooks)).toMatchObject({
      books: [],
      booksError: null,
      booksLoading: true
    });
  });

  test('GET_BOOKS_SUCCESS', () => {
    expect(booksReducer(undefined, testActions.getBooksSuccess)).toMatchObject({
      books: mockedBook,
      booksError: null,
      booksLoading: false
    });
  });

  test('GET_BOOKS_FAILURE', () => {
    expect(booksReducer(undefined, testActions.getBooksFailure)).toMatchObject({
      books: [],
      booksError: 'Something went wrong',
      booksLoading: false
    });
  });
});

describe('@@BOOKS/SEARCH_BOOKS', () => {
  test('SEARCH_BOOKS', () => {
    expect(booksReducer(undefined, testActions.searchBooks)).toMatchObject({
      searchedBooks: 'The Martian'
    });
  });
});

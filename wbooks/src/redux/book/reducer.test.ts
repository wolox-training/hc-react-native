import { actions } from './actions';
import booksReducer from './reducer';

const testActions = {
  getBooks: {
    type: actions.GET_BOOKS,
    target: 'books'
  },
  getBooksSuccess: {
    type: actions.GET_BOOKS_SUCCESS,
    target: 'books'
  },
  getBooksFailure: {
    type: actions.GET_BOOKS_FAILURE,
    target: 'books'
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
      books: undefined,
      booksError: null,
      booksLoading: false
    });
  });

  test('GET_BOOKS_FAILURE', () => {
    expect(booksReducer(undefined, testActions.getBooksFailure)).toMatchObject({
      books: [],
      booksError: undefined,
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

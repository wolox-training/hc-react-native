import { AnyAction } from 'redux';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/books';

import { actions } from './actions';

const initialState: Book[] = BOOKS_MOCK;

function booksReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return action.books;
    default:
      return state;
  }
}

export default booksReducer;

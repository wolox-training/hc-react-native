import { AnyAction } from 'redux';
import { BookState } from '@interfaces/bookState';

import { actions } from './actions';

const initialState: BookState = {
  books: [],
  error: ''
};

function booksReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return state;
    case actions.GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload };
    case actions.GET_BOOKS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default booksReducer;

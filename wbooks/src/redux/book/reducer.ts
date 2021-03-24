import { AnyAction } from 'redux';
import { BookState } from '@interfaces/bookState';

import { actions } from './actions';

const initialState: BookState = {
  books: [],
  error: '',
  loading: false
};

function booksReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return { ...state, loading: true };
    case actions.GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload, loading: false };
    case actions.GET_BOOKS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export default booksReducer;

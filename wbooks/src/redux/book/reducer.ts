import { completeReducer, completeState, createReducer, onReadValue } from 'redux-recompose';
import { BookState } from '@interfaces/bookState';

import { actions } from './actions';

export const initialState: BookState = completeState({
  description: {
    books: []
  },
  ignoredTargets: {
    searchedBook: ''
  }
});

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS],
  override: {
    [actions.SEARCH_BOOKS]: onReadValue()
  }
};

const completedReducer = completeReducer(reducerDescription);

export default createReducer(initialState, completedReducer);

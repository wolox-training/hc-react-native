import { completeReducer, completeState, createReducer } from 'redux-recompose';
import { BookState } from '@interfaces/bookState';

import { actions } from './actions';

const initialState: BookState = completeState({
  books: []
});

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS]
};

const completedReducer = completeReducer(reducerDescription);

export default createReducer(initialState, completedReducer);

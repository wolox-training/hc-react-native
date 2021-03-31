import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import actionCreators, { actions } from './actions';
import { initialState } from './reducer';

const middlewares = [thunk, fetchMiddleware];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

beforeEach(() => store.clearActions());

describe('@@BOOKS', () => {
  test('Action: GET_BOOKS', () => {
    store.dispatch(actionCreators.getBooks());

    expect(store.getActions()).toEqual([{ type: actions.GET_BOOKS, target: 'books' }]);
  });

  test('Action: SEARCH_BOOKS', () => {
    store.dispatch(actionCreators.searchBooks('The Martian'));

    expect(store.getActions()).toEqual([
      { type: actions.SEARCH_BOOKS, target: 'searchedBook', payload: 'The Martian' }
    ]);
  });
});

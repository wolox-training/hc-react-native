import { completeTypes, createTypes } from 'redux-recompose';
import BookService from '@services/BookService';

const completedActions = completeTypes({
  primaryActions: ['GET_BOOKS'],
  ignoredActions: ['SEARCH_BOOKS']
});

export const actions = createTypes(completedActions, '@@BOOKS');

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: BookService.getBooks
  }),
  searchBooks: (search: string) => ({
    type: actions.SEARCH_BOOKS,
    target: 'searchedBook',
    payload: search
  })
};

export default actionCreators;

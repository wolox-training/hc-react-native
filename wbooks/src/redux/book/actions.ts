import { completeTypes, createTypes } from 'redux-recompose';
import BookService from '@services/BookService';

const completedActions = completeTypes({ primaryActions: ['GET_BOOKS'] });

export const actions = createTypes(completedActions, '@@BOOKS');

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: BookService.getBooks
  })
};

export default actionCreators;

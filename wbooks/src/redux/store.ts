import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import Reactotron from '@config/reactotronConfig';

import booksReducer from './book/reducer';

export const rootReducer = combineReducers({
  books: booksReducer
});

const middlewares = [applyMiddleware(thunk, fetchMiddleware)];

if (__DEV__) {
  middlewares.push(Reactotron.createEnhancer(true));
}

const store = createStore(rootReducer, compose(...middlewares));

export default store;

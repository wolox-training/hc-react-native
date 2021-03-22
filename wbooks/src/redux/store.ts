import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';

import booksReducer from './book/reducer';

const rootReducer = combineReducers({
  books: booksReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const middlewares = [applyMiddleware(thunk)];

if (__DEV__) {
  middlewares.push(Reactotron.createEnhancer(true));
}

const store = createStore(rootReducer, compose(...middlewares));

export default store;

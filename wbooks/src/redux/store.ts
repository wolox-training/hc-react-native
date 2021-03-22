import { createStore, combineReducers } from 'redux';
import Reactotron from '@config/reactotronConfig';

import booksReducer from './book/reducer';

const rootReducer = combineReducers({
  books: booksReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, Reactotron.createEnhancer());

export default store;

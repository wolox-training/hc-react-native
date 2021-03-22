/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from './src/app';

const mockStore = configureMockStore([]);
const store = mockStore({
  bookReducer: []
});

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

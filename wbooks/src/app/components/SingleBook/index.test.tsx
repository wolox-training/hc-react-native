import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react-native';
import { Book } from '@interfaces/books';

import SingleBook from './index';

const mockedBook: Book = {
  id: 1,
  author: 'Stephen King',
  genre: 'Psychological horror',
  imageUrl: null,
  publisher: 'Doubleday',
  title: 'The Shining',
  year: '1977'
};

const mockStore = configureMockStore([thunk]);
const store = mockStore({ books: { books: [mockedBook] } });

const onPressBook = jest.fn();

const renderSingleBook = (
  <Provider store={store}>
    <SingleBook
      bookCover={mockedBook.imageUrl}
      bookTitle={mockedBook.title}
      bookAuthor={mockedBook.author}
      onPressBook={onPressBook}
    />
  </Provider>
);

describe('SingleBook component', () => {
  test('Displays book author and name', () => {
    const { getByText, queryByText } = render(renderSingleBook);

    expect(getByText(mockedBook.title)).toBeDefined();
    expect(getByText(mockedBook.author)).toBeDefined();
    expect(queryByText(/Some random text/)).toBeNull();
  });

  test('Does not display id nor genre', () => {
    const { queryByText } = render(renderSingleBook);

    expect(queryByText(String(mockedBook.id))).toBeNull();
    expect(queryByText(mockedBook.genre)).toBeNull();
  });
});

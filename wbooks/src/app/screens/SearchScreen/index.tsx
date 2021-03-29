import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import BookList from '@components/BookList';
import SearchEmpty from '@components/SearchEmpty';
import useFilteredBooks from '@hooks/useFilteredBooks';
import { BookState } from '@interfaces/bookState';
import { RootState } from '@interfaces/rootState';

import styles from './styles';

function SearchScreen() {
  const filteredBooks = useFilteredBooks();

  const { searchedBook } = useSelector<RootState, BookState>(state => state.books);

  return (
    <SafeAreaView style={styles.container}>
      {searchedBook.length >= 1 ? <BookList data={filteredBooks} /> : <SearchEmpty />}
    </SafeAreaView>
  );
}

export default SearchScreen;

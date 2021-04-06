import React from 'react';
import { SafeAreaView } from 'react-native';
import BookList from '@components/BookList';
import SearchEmpty from '@components/SearchEmpty';
import useBooks from '@hooks/useBooks';

import styles from './styles';

function SearchScreen() {
  const { searchedBook, filteredBooks } = useBooks();

  return (
    <SafeAreaView style={styles.container}>
      {searchedBook.length >= 1 ? <BookList data={filteredBooks} /> : <SearchEmpty />}
    </SafeAreaView>
  );
}

export default SearchScreen;

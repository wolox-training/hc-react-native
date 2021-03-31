import React from 'react';
import { SafeAreaView } from 'react-native';
import BookList from '@components/BookList';
import useBooks from '@hooks/useBooks';

import styles from './styles';

function Library() {
  const { books } = useBooks();

  return (
    <SafeAreaView style={styles.container}>
      <BookList data={books} />
    </SafeAreaView>
  );
}

export default Library;

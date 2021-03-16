import React from 'react';
import { View } from 'react-native';
import SingleBook from '@components/SingleBook';
import { BOOKS_MOCK } from '@constants/mockBooks';

import styles from './styles';

function Library() {
  return (
    <View style={styles.container}>
      <SingleBook
        bookCover={BOOKS_MOCK[0].imageUrl}
        bookTitle={BOOKS_MOCK[0].title}
        bookAuthor={BOOKS_MOCK[0].author}
      />
    </View>
  );
}

export default Library;

import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import SingleBook from '@components/SingleBook';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/books';
import { trimLineBreaks } from '@utils/stringUtils';

import styles from './styles';

function Library() {
  const renderBooks: ListRenderItem<Book> = ({ item }) => (
    <SingleBook bookCover={item.imageUrl} bookTitle={trimLineBreaks(item.title)} bookAuthor={item.author} />
  );
  const keyExtractor = ({ id }: Book) => String(id);

  return (
    <FlatList
      style={styles.container}
      data={BOOKS_MOCK}
      renderItem={renderBooks}
      keyExtractor={keyExtractor}
    />
  );
}

export default Library;

import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenWrapper from '@components/ScreenWrapper';
import SingleBook from '@components/SingleBook';
import { BOOKS_MOCK } from '@constants/mockBooks';
import SCREENS, { LibraryType } from '@constants/screens';
import { Book } from '@interfaces/books';
import { RootStackParamList } from '@interfaces/rootStackParamList';
import { trimLineBreaks } from '@utils/stringUtils';

import styles from './styles';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, LibraryType>;
}

function Library({ navigation }: Props) {
  const renderBooks: ListRenderItem<Book> = ({ item }) => (
    <SingleBook
      bookCover={item.imageUrl}
      bookTitle={trimLineBreaks(item.title)}
      bookAuthor={item.author}
      onPressProp={() => navigation.navigate(SCREENS.BOOK_DETAILS)}
    />
  );
  const keyExtractor = ({ id }: Book) => String(id);

  return (
    <ScreenWrapper>
      <FlatList
        style={styles.container}
        data={BOOKS_MOCK}
        renderItem={renderBooks}
        keyExtractor={keyExtractor}
      />
    </ScreenWrapper>
  );
}

export default Library;

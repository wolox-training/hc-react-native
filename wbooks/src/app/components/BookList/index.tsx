import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ContainedText from '@components/ContainedText';
import SingleBook from '@components/SingleBook';
import SCREENS from '@constants/screens';
import { Book } from '@interfaces/books';
import { trimLineBreaks } from '@utils/stringUtils';

import styles from './styles';

interface Props {
  data: Book[];
}

function BookList({ data }: Props) {
  const navigation = useNavigation();
  const renderBooks: ListRenderItem<Book> = ({ item, index }) => (
    <SingleBook
      bookCover={item.imageUrl}
      bookTitle={trimLineBreaks(item.title)}
      bookAuthor={item.author}
      onPressBook={() => navigation.navigate(SCREENS.BOOK_DETAILS)}
      style={index === 0 ? styles.firstItem : {}}
    />
  );
  const keyExtractor = ({ id }: Book) => String(id);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderBooks}
        keyExtractor={keyExtractor}
        ListEmptyComponent={() => <ContainedText text="No books found" />}
      />
    </SafeAreaView>
  );
}

export default BookList;

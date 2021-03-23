import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import SingleBook from '@components/SingleBook';
import SCREENS, { HomeType } from '@constants/screens';
import { Book } from '@interfaces/books';
import { BookState } from '@interfaces/bookState';
import { RootState } from '@interfaces/rootState';
import { RootStackParamList } from '@interfaces/navigatorParamLists';
import actionCreators from '@redux/book/actions';
import { trimLineBreaks } from '@utils/stringUtils';

import styles from './styles';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, HomeType>;
}

function Library({ navigation }: Props) {
  const dispatch = useDispatch();
  const { books, error } = useSelector<RootState, BookState>(state => state.books);

  React.useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch, books, error]);

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
      <FlatList data={books} renderItem={renderBooks} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

export default Library;

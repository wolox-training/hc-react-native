import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '@components/BookList';
import { BookState } from '@interfaces/bookState';
import { RootState } from '@interfaces/rootState';
import actionCreators from '@redux/book/actions';

import styles from './styles';

function Library() {
  const dispatch = useDispatch();
  const { books } = useSelector<RootState, BookState>(state => state.books);

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <BookList data={books} />
    </SafeAreaView>
  );
}

export default Library;

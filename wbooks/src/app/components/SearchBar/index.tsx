import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import closeSearch from '@assets/ic_close_search.png';
import searchPlaceholderIcon from '@assets/ic_search_placeholder.png';
import { BookState } from '@interfaces/bookState';
import { RootState } from '@interfaces/rootState';
import actionCreators from '@redux/book/actions';

import styles from './styles';

const SearchBar = () => {
  const dispatch = useDispatch();
  const onSearch = (text: string) => dispatch(actionCreators.searchBooks(text));
  const onCleanInput = () => dispatch(actionCreators.searchBooks(''));
  const { searchedBook } = useSelector<RootState, BookState>(state => state.books);

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.searchIconLeft} source={searchPlaceholderIcon} />
      <TextInput style={styles.input} onChangeText={onSearch} value={searchedBook} />
      <TouchableOpacity onPress={onCleanInput}>
        <Image
          resizeMode="contain"
          style={[styles.clearIconRight, searchedBook.length >= 1 && styles.clearIconActive]}
          source={closeSearch}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

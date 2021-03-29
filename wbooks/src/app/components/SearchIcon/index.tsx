import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import searchIcon from '@assets/ic_search.png';
import SCREENS from '@constants/screens';

import styles from './styles';

function SearchIcon() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(SCREENS.SEARCH)}>
      <Image style={styles.searchIcon} source={searchIcon} />
    </TouchableOpacity>
  );
}

export default SearchIcon;

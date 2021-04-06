import React from 'react';
import { Image, Text, View } from 'react-native';
import searchPlaceholderIcon from '@assets/ic_search_placeholder.png';

import styles from './styles';

function SearchEmpty() {
  return (
    <View style={styles.container}>
      <Image style={styles.searchIcon} source={searchPlaceholderIcon} />
      <Text style={styles.primaryTitle}>Search in Wbooks</Text>
      <Text style={styles.secondaryTitle}>Find your favorite writers and books!</Text>
    </View>
  );
}

export default SearchEmpty;

import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import placeholderImage from '@assets/img_book_placeholder.png';

import styles from './styles';

interface Props {
  bookCover: string | null;
  bookTitle: string;
  bookAuthor: string;
  onPressBook: () => void;
}

function SingleBook({ bookCover, bookTitle, bookAuthor, onPressBook }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressBook} activeOpacity={0.8}>
      <Image
        style={styles.bookCover}
        resizeMode="contain"
        source={bookCover ? { uri: bookCover } : placeholderImage}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.bookTitle}>{bookTitle}</Text>
        <Text style={styles.bookAuthor}>{bookAuthor}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SingleBook;

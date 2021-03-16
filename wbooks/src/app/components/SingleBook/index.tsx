import React from 'react';
import { Image, Text, View } from 'react-native';
import placeholderImage from '@assets/img_book_placeholder.png';

import styles from './styles';

interface Props {
  bookCover: string | null;
  bookTitle: string;
  bookAuthor: string;
}

function SingleBook({ bookCover, bookTitle, bookAuthor }: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bookCover}
        resizeMode="contain"
        source={bookCover ? { uri: bookCover } : placeholderImage}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.bookTitle}>{bookTitle}</Text>
        <Text style={styles.bookAuthor}>{bookAuthor}</Text>
      </View>
    </View>
  );
}

export default SingleBook;

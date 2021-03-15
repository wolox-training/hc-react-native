import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

interface Props {
  bookCover: string | null;
  bookTitle: string;
  bookAuthor: string;
}

function SingleBook({ bookCover, bookTitle, bookAuthor }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image style={styles.bookCover} source={{ uri: bookCover as string }} />
        <View style={styles.textWrapper}>
          <Text style={styles.bookTitle}>{bookTitle}</Text>
          <Text style={styles.bookAuthor}>{bookAuthor}</Text>
        </View>
      </View>
    </View>
  );
}

export default SingleBook;

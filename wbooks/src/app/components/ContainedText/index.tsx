import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface Props {
  text: string;
}

function ContainedText({ text }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{text}</Text>
    </View>
  );
}

export default ContainedText;

import React from 'react';
import { Image } from 'react-native';
import backButton from '@assets/ic_back.png';
import headerBackground from '@assets/bc_nav_bar.png';
import colors from '@constants/colors';

import styles from '../styles';

const customHeader = {
  headerStyle: {
    height: 90
  },
  headerTintColor: colors.white,
  headerBackImage: () => <Image style={styles.backButton} resizeMode="cover" source={backButton} />,
  headerBackground: () => <Image style={styles.headerImage} resizeMode="stretch" source={headerBackground} />,
  headerTitleStyle: {
    textTransform: 'uppercase'
  }
};

export default customHeader;

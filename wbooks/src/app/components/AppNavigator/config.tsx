import React from 'react';
import { Image } from 'react-native';
import backButton from '@assets/ic_back.png';
import headerBackground from '@assets/bc_nav_bar.png';
import SearchBar from '@components/SearchBar';
import colors from '@constants/colors';

import styles from './styles';

const sharedHeaderProperties = {
  headerStyle: {
    height: 90
  },
  headerBackground: () => <Image style={styles.headerImage} resizeMode="stretch" source={headerBackground} />,
  headerTitleStyle: {
    textTransform: 'uppercase'
  }
};

const mainHeader = {
  ...sharedHeaderProperties,
  headerTintColor: colors.white,
  headerBackImage: () => <Image style={styles.backButton} resizeMode="cover" source={backButton} />
};

export const searchHeader = {
  ...sharedHeaderProperties,
  headerLeft: () => null,
  headerTitle: () => <SearchBar />
};

export default mainHeader;

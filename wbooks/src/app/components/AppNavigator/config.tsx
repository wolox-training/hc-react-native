import React from 'react';
import { Image } from 'react-native';
import backButton from '@assets/ic_back.png';
import headerBackground from '@assets/bc_nav_bar.png';
import SearchBar from '@components/SearchBar';
import SearchIcon from '@components/SearchIcon';
import colors from '@constants/colors';
import { SCREEN_TITLES } from '@constants/screens';

import styles from './styles';

export const mainHeader = {
  headerStyle: {
    height: 90
  },
  headerBackground: () => <Image style={styles.headerImage} resizeMode="stretch" source={headerBackground} />,
  headerTitleStyle: {
    textTransform: 'uppercase'
  },
  headerTintColor: colors.white,
  headerBackImage: () => <Image style={styles.backButton} resizeMode="cover" source={backButton} />
};

export const libraryHeader = {
  headerRight: () => <SearchIcon />,
  title: SCREEN_TITLES.LIBRARY
};

export const searchHeader = {
  headerLeft: () => null,
  headerTitle: () => <SearchBar />
};

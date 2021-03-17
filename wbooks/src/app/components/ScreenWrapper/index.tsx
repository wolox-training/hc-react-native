import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import styles from './styles';

interface Props {
  children: React.ReactNode;
}

function ScreenWrapper({ children }: Props) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>{children}</SafeAreaView>
    </>
  );
}

export default ScreenWrapper;

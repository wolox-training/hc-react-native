import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import backButton from '@assets/ic_back.png';
import headerBackground from '@assets/bc_nav_bar.png';
import colors from '@constants/colors';
import SCREENS from '@constants/screens';
import { RootStackParamList } from '@interfaces/rootStackParamList';
import BookDetails from '@screens/BookDetails';
import Library from '@screens/Library';

import styles from './styles';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.LIBRARY}
      screenOptions={{
        headerStyle: {
          height: 90
        },
        headerTintColor: colors.white,
        headerBackImage: () => <Image style={styles.backButton} resizeMode="cover" source={backButton} />,
        headerBackground: () => (
          <Image style={styles.headerImage} resizeMode="stretch" source={headerBackground} />
        ),
        headerTitleStyle: {
          textTransform: 'uppercase'
        }
      }}>
      <Stack.Screen name={SCREENS.LIBRARY} component={Library} options={{ title: 'Library' }} />
      <Stack.Screen name={SCREENS.BOOK_DETAILS} component={BookDetails} options={{ title: 'Book Detail' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

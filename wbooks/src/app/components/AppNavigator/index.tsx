import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import backButton from '@assets/ic_back.png';
import headerBackground from '@assets/bc_nav_bar.png';
import TabNavigator from '@components/TabNavigator';
import colors from '@constants/colors';
import SCREENS from '@constants/screens';
import { RootStackParamList } from '@interfaces/navigatorParamLists';
import BookDetails from '@screens/BookDetails';

import styles from './styles';
import getHeaderTitle from './utils/getHeaderTitle';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.HOME}
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
      <Stack.Screen
        name={SCREENS.HOME}
        component={TabNavigator}
        options={({ route }) => ({ headerTitle: getHeaderTitle(route) })}
      />
      <Stack.Screen name={SCREENS.BOOK_DETAILS} component={BookDetails} options={{ title: 'Book Detail' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

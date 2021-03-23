import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import backButton from '@assets/ic_back.png';
import headerBackground from '@assets/bc_nav_bar.png';
import TabIcon from '@components/TabIcon';
import colors from '@constants/colors';
import SCREENS, { SCREEN_TITLES } from '@constants/screens';
import { BottomTabParamList, RootStackParamList } from '@interfaces/navigatorParamLists';
import BookDetails from '@screens/BookDetails';
import Library from '@screens/Library';
import WishList from '@screens/WishList';

import styles from './styles';
import getHeaderTitle from './utils/getHeaderTitle';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

function LibraryStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={SCREENS.LIBRARY} component={Library} options={{ title: SCREEN_TITLES.LIBRARY }} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} /> }}
      tabBarOptions={{ activeTintColor: colors.cerulean, inactiveTintColor: colors.dustyGray }}>
      <Tab.Screen
        name={SCREENS.LIBRARY}
        component={LibraryStack}
        options={{ title: SCREEN_TITLES.LIBRARY }}
      />
      <Tab.Screen name={SCREENS.WISHLIST} component={WishList} options={{ title: SCREEN_TITLES.WISHLIST }} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
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
      <Stack.Screen
        name={SCREENS.LIBRARY}
        component={TabNavigator}
        options={({ route }) => ({ headerTitle: getHeaderTitle(route) })}
      />
      <Stack.Screen
        name={SCREENS.BOOK_DETAILS}
        component={BookDetails}
        options={{ title: SCREEN_TITLES.BOOK_DETAILS }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;

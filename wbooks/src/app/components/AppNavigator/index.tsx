import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SearchBar from '@components/SearchBar';
import SearchIcon from '@components/SearchIcon';
import TabIcon from '@components/TabIcon';
import colors from '@constants/colors';
import SCREENS, { SCREEN_TITLES } from '@constants/screens';
import { BottomTabParamList, LibraryStackParamList } from '@interfaces/navigatorParamLists';
import BookDetails from '@screens/BookDetails';
import Library from '@screens/Library';
import SearchScreen from '@screens/SearchScreen';
import WishList from '@screens/WishList';

import mainHeader, { searchHeader } from './config';

const TabNavigator = createBottomTabNavigator<BottomTabParamList>();
const LibraryStackNavigator = createStackNavigator<LibraryStackParamList>();

function LibraryStackScreen() {
  return (
    <LibraryStackNavigator.Navigator screenOptions={mainHeader as object}>
      <LibraryStackNavigator.Screen
        name={SCREENS.LIBRARY}
        component={Library}
        options={{ title: SCREEN_TITLES.LIBRARY, headerRight: () => <SearchIcon /> }}
      />
      <LibraryStackNavigator.Screen
        name={SCREENS.BOOK_DETAILS}
        component={BookDetails}
        options={{ title: SCREEN_TITLES.BOOK_DETAILS }}
      />
      <LibraryStackNavigator.Screen
        name={SCREENS.SEARCH}
        component={SearchScreen}
        options={{ ...searchHeader, headerTitle: () => <SearchBar /> } as object}
      />
    </LibraryStackNavigator.Navigator>
  );
}

function AppNavigator() {
  return (
    <TabNavigator.Navigator
      initialRouteName={SCREENS.LIBRARY}
      screenOptions={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} /> }}
      tabBarOptions={{ activeTintColor: colors.cerulean, inactiveTintColor: colors.dustyGray }}>
      <TabNavigator.Screen name={SCREENS.LIBRARY} component={LibraryStackScreen} />
      <TabNavigator.Screen name={SCREENS.WISHLIST} component={WishList} />
    </TabNavigator.Navigator>
  );
}

export default AppNavigator;

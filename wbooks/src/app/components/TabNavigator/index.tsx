import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import libraryIcon from '@assets/ic_library.png';
import libraryIconActive from '@assets/ic_library_active.png';
import wishlistIcon from '@assets/ic_wishlist.png';
import wishlistIconActive from '@assets/ic_wishlist_active.png';
import TabIcon from '@components/TabIcon';
import colors from '@constants/colors';
import SCREENS from '@constants/screens';
import { bottomTabParamList } from '@interfaces/navigatorParamLists';
import EmptyView from '@screens/EmptyView';
import Library from '@screens/Library';

const Tab = createBottomTabNavigator<bottomTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: colors.cerulean, inactiveTintColor: colors.dustyGray }}>
      <Tab.Screen
        name={SCREENS.LIBRARY}
        component={Library}
        options={{
          title: 'Library',
          tabBarIcon: ({ focused }) => (
            <TabIcon active={libraryIconActive} inactive={libraryIcon} focused={focused} />
          )
        }}
      />
      <Tab.Screen
        name={SCREENS.WISHLIST}
        component={EmptyView}
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ focused }) => (
            <TabIcon active={wishlistIconActive} inactive={wishlistIcon} focused={focused} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

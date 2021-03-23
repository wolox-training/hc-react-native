import React from 'react';
import { Image } from 'react-native';
import { useRoute } from '@react-navigation/core';

import TAB_ICONS from './constants';

interface Props {
  focused: boolean;
}

function TabIcon({ focused }: Props) {
  const route = useRoute();
  const source = focused ? TAB_ICONS[route.name].inactive : TAB_ICONS[route.name].active;

  return <Image resizeMode="contain" source={source} />;
}

export default TabIcon;

import React from 'react';
import { Image } from 'react-native';
import { useRoute } from '@react-navigation/core';

import TAB_ICONS from './constants';

interface Props {
  focused: boolean;
}

function TabIcon({ focused }: Props) {
  const route = useRoute();
  const source = TAB_ICONS[route.name][focused ? 'active' : 'inactive'];

  return <Image resizeMode="contain" source={source} />;
}

export default TabIcon;

import React from 'react';
import { Image, ImageProps } from 'react-native';

interface Props {
  active: ImageProps;
  inactive: ImageProps;
  focused: boolean;
}

const TabIcon = ({ active, inactive, focused }: Props) => {
  return <Image resizeMode="contain" source={focused ? active : inactive} />;
};

export default TabIcon;

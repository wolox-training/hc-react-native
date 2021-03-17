import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SCREENS from '@constants/screens';
import { RootStackParamList } from '@interfaces/rootStackParamList';
import BookDetails from '@screens/BookDetails';
import Library from '@screens/Library';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.LIBRARY}>
      <Stack.Screen name={SCREENS.LIBRARY} component={Library} options={{ title: 'Library' }} />
      <Stack.Screen name={SCREENS.BOOK_DETAILS} component={BookDetails} options={{ title: 'Book Detail' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

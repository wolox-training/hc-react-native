/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SCREENS from '@constants/screens';
import { RootStackParamList } from '@interfaces/rootStackParamList';
import BookDetails from '@screens/BookDetails';
import Library from '@screens/Library';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.LIBRARY}>
        <Stack.Screen name={SCREENS.LIBRARY} component={Library} />
        <Stack.Screen
          name={SCREENS.BOOK_DETAILS}
          component={BookDetails}
          options={{ title: 'Book Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

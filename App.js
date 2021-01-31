import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/utils/stackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

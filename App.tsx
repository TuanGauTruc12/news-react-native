import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './navigators';
import {NewsContext} from './components';

export default function App(): JSX.Element {
  return (
    <NewsContext>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </NewsContext>

  );
}

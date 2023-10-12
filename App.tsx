import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, ProfileScreen, SplashScreen} from './screens';

export type RootStackParams = {
  Home: any;
  Profile: any;
  Splash: any;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Splash">
        <RootStack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

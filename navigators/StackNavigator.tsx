import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  AuthorProfileScreen,
  CommentScreen,
  EditProfileScreen,
  ForgotPasswordScreen,
  InformationProfileScreen,
  LatestScreen,
  LoginScreen,
  NotificationScreen,
  SearchScreen,
  SettingScreen,
  SplashScreen,
  TrendingScreen,
  SignUpScreen,
  DetailNewsScreen,
  ChangeInformationProfileScreen,
} from '../screens';
import TabNavigator from './TabNavigator';
import {RootStackParams} from '../utils';

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function StackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="SearchScreen">
      <RootStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />

      <RootStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{headerShown: false}}
      />

      <RootStack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{headerShown: false}}
      />

      <RootStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="CommentScreen"
        component={CommentScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="DetailNewsScreen"
        component={DetailNewsScreen}
        options={{headerShown: false}}
      />

      <RootStack.Screen
        name="AuthorProfileScreen"
        component={AuthorProfileScreen}
        options={{headerShown: false}}
      />

      <RootStack.Screen
        name="LatestScreen"
        component={LatestScreen}
        options={{headerShown: false}}
      />

      <RootStack.Screen
        name="TrendingScreen"
        component={TrendingScreen}
        options={{headerShown: false}}
      />

      <RootStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />

      {/*       
      <RootStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="InformationProfileScreen"
        component={InformationProfileScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="ChangeInformationProfileScreen"
        component={ChangeInformationProfileScreen}
        options={{headerShown: false}}
      />




      <RootStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{headerShown: false}}
      />

      */}
    </RootStack.Navigator>
  );
}

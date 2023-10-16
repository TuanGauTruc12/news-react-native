import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState, useEffect, useRef} from 'react';
import {
  BookmarkScreen,
  ExploreScreen,
  HomeScreen,
  ProfileScreen,
} from '../screens';
import {RootTabParams, heightNavigationBottom, icons} from '../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text, View, Dimensions} from 'react-native';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator<RootTabParams>();
  const {faHouse, faBookmark, faCompass, faUser} = icons;

  const tabColors = {
    active: '#fa6a39',
    inactive: '#6FC7E1',
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = faHouse;
          } else if (route.name === 'Bookmark') {
            iconName = faBookmark;
          } else if (route.name === 'Explore') {
            iconName = faCompass;
          } else {
            iconName = faUser;
          }

          return (
            <FontAwesomeIcon
              icon={iconName}
              size={focused ? 24 : 20}
              color={focused ? tabColors.active : tabColors.inactive}
            />
          );
        },
        tabBarStyle: {height: heightNavigationBottom},
        tabBarLabel: ({focused}) => {
          return (
            <Text
              style={{
                color: focused ? tabColors.active : 'black',
                fontWeight: focused ? 'bold' : '400',
                fontSize: focused ? 18 : 16
              }}>
              {route.name}
            </Text>
          );
        },
      })}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

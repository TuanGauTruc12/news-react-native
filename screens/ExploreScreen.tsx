import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text} from 'react-native';
// import {RootStackParams, RootTabParams} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function ExploreScreen() {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootTabParams>>();

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>ExploreScreen</Text>
    </View>
  );
}

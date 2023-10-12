import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import {RootStackParams} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <TouchableOpacity
        style={{backgroundColor: 'blue', padding: 16}}
        onPress={(): void => {
          navigation.push('Profile');
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

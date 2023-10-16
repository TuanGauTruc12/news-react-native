import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import CustomCategoryItem from './CustomCategoryItem';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams, buttonOpacityActive} from '../utils';

interface CustomCategoryListProps {}

export default function CustomCategoryList({}: CustomCategoryListProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <>
      <View className="w-full mt-1 flex-1">
        <View className="justify-between flex-row items-center">
          <Text className="font-extrabold text-base text-black">Latest</Text>
          <TouchableOpacity
            className="py-2 px-1"
            activeOpacity={buttonOpacityActive}
            onPress={() => {
              navigation.replace('LatestScreen');
            }}>
            <Text>See all</Text>
          </TouchableOpacity>
        </View>
        <CustomCategoryItem />
      </View>
    </>
  );
}

import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import CustomCategoryItem from './CustomCategoryItem';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {buttonOpacityActive, navigation} from '../utils';

interface CustomCategoryListProps {
  checkSeeAll?: boolean;
}

export default function CustomCategoryList({
  checkSeeAll,
}: CustomCategoryListProps) {
  return (
    <>
      <View className="w-full mt-1 flex-1 bg-white">
        <View className="justify-between flex-row items-center">
          {checkSeeAll && (
            <>
              <Text className="font-extrabold text-base text-black">
                Latest
              </Text>
              <TouchableOpacity
                className="py-2 px-1"
                activeOpacity={buttonOpacityActive}
                onPress={() => {
                  navigation.push('LatestScreen');
                }}>
                <Text>See all</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <CustomCategoryItem />
      </View>
    </>
  );
}

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {icons, navigation} from '../utils';
import { CustomCategoryList } from '../components';
import { TabNavigator } from '../navigators';

export default function LatestScreen() {
  const {faArrowLeft} = icons;
  return (
    <View className='flex-1 flex-col'>
      <View className="h-14 bg-white items-center flex-row relative border-b-2 border-gray-300">
        <TouchableOpacity
          onPress={() => {
            navigation.replace('HomeScreen');
          }}
          className="h-full w-14 items-center justify-center z-10">
          <FontAwesomeIcon size={30} icon={faArrowLeft} />
        </TouchableOpacity>
        <View className="flex-1 h-full absolute w-full items-center justify-center -z-10">
          <Text className="text-xl font-bold">Latest</Text>
        </View>
      </View>
      <View className='ml-2 mr-5 flex-1'>
        <CustomCategoryList />
      </View>
    </View>
  );
}

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CustomImage from './CustomImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {icons, navigation} from '../utils';

export default function TrendingNewsItem() {
  const {faEllipsis, faClock} = icons;
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        navigation.replace('DetailNewsScreen');
      }}
      className="w-full flex-col">
      <CustomImage
        classNames={['px-2 my-2 w-full', 'w-full h-36 object-cover rounded-md']}
        url="https://picsum.photos/200/300"
      />
      <View className="flex-col justify-center mx-2">
        <Text>Europe</Text>
        <Text>Russian warship: Moskva sinks in Black Sea</Text>
        <View className="flex-row items-center justify-between mt-2">
          <View className="flex-row items-center">
            <CustomImage
              url="https://picsum.photos/200/300"
              classNames={['mr-2', 'h-8 w-8 object-cover rounded-full']}
            />

            <View className="flex-row gap-x-2">
              <Text>BBC News</Text>
              <View className="flex-row items-center gap-x-1">
                <FontAwesomeIcon icon={faClock} />
                <Text>4h ago</Text>
              </View>
            </View>
          </View>
          <FontAwesomeIcon icon={faEllipsis} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

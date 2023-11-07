import {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {NewsItem} from '../objects/NewsItem';
import CustomImage from './CustomImage';
import {icons, navigation} from '../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

interface CustomTopicNewsItemProps {
  topicNewsItem: NewsItem;
}

export default function CustomTopicNewsItem({
  topicNewsItem,
}: CustomTopicNewsItemProps) {
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
        url={topicNewsItem.imageNewsUrl}
      />
      <View className="flex-col justify-center mx-2">
        <Text>{topicNewsItem.title}</Text>
        <Text>{topicNewsItem.content}</Text>
        <View className="flex-row items-center justify-between mt-2">
          <View className="flex-row items-center">
            <CustomImage
              url={topicNewsItem.imageAuthorUrl}
              classNames={['mr-2', 'h-8 w-8 object-cover rounded-full']}
            />
            <View className="flex-row gap-x-2">
              <Text>{topicNewsItem.author}</Text>
              <View className="flex-row items-center gap-x-1">
                <FontAwesomeIcon icon={faClock} />
                <Text>{topicNewsItem.timer}</Text>
              </View>
            </View>
          </View>
          <FontAwesomeIcon icon={faEllipsis} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

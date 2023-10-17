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
        url="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRX3asNlJ2Ag1lyxNhVUUafaJMQVmrur7Lm53WU0ZyuzLzFc739"
      />
      <View className="flex-col justify-center mx-2">
        <Text>Europe</Text>
        <Text>Russian warship: Moskva sinks in Black Sea</Text>
        <View className="flex-row items-center justify-between mt-2">
          <View className="flex-row items-center">
            <CustomImage
              url="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/276160050_333915868766014_403614321434139472_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sv5bJ9ggVdEAX9MLuWI&_nc_ht=scontent.fsgn2-3.fna&_nc_e2o=f&oh=00_AfCFHLe36LgZdWqx0z2RlaHbs-lC7mdFH3pikP5Aj1jC3A&oe=65309220"
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

import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {heightNavigationBottom} from '../utils';
import {useState} from 'react';
import CustomTopicList from '../components/CustomTopicList';
import {Topic} from '../objects/Topic';
import CustomTopicNewsList from '../components/CustomTopicNewsList';

export default function ExploreScreen() {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootTabParams>>();

  return (
    <View
      className="bg-white h-full px-5"
      style={{
        marginBottom: heightNavigationBottom,
      }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View className="h-12 justify-center mt-2">
        <Text className="text-3xl font-extrabold text-black">Explore</Text>
      </View>
      <View className="flex-row justify-between mt-2">
        <Text>Topic</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('See all');
          }}>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1">
        <CustomTopicList />
      </View>
      <View className="flex-none my-1">
        <Text>Popular Topic</Text>
      </View>
      <View className="flex-1 mt-3">
        <CustomTopicNewsList />
      </View>
    </View>
  );
}

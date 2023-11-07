import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {heightNavigationBottom} from '../utils';
import {useState} from 'react';
import CustomTopicList from '../components/CustomTopicList';
import {Topic} from '../objects/Topic';
import CustomTopicNewsList from '../components/CustomTopicNewsList';

export default function ExploreScreen() {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootTabParams>>();

  const [topics] = useState<Topic[]>([
    {
      id: 1,
      topicImage: 'https://picsum.photos/200/300',
      topicTitle: 'Health',
      topicDescription: 'Get energizing workout moves, healthy recipes...',
      isSave: false,
    },
    {
      id: 2,
      topicImage: 'https://picsum.photos/200/300',
      topicTitle: 'Technology',
      topicDescription:
        'Get energizing workout moves, healthy recipes...Get energizing workout moves, healthy recipes...',
      isSave: true,
    },
    {
      id: 3,
      topicImage: 'https://picsum.photos/200/300',
      topicTitle: 'Art',
      topicDescription:
        'Art is a diverse range of human activity, and result...',
      isSave: true,
    },
    {
      id: 4,
      topicImage: 'https://picsum.photos/200/300',
      topicTitle: 'Health',
      topicDescription: 'Get energizing workout moves, healthy recipes...',
      isSave: true,
    },
    {
      id: 5,
      topicImage: 'https://picsum.photos/200/300',
      topicTitle: 'Health',
      topicDescription: 'Get energizing workout moves, healthy recipes...',
      isSave: true,
    },
    {
      id: 6,
      topicImage: 'https://picsum.photos/200/300',
      topicTitle: 'Health',
      topicDescription: 'Get energizing workout moves, healthy recipes...',
      isSave: true,
    },
  ]);

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
        <CustomTopicList topics={topics} />
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

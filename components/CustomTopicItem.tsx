import {View, Text, TouchableOpacity} from 'react-native';
import {Topic} from '../objects/Topic';
import CustomImage from './CustomImage';

interface CustomTopicItemProps {
  topic: Topic;
}

export default function CustomTopicItem({topic}: CustomTopicItemProps) {
  return (
    <View className="flex-row mb-3 py-2">
      <CustomImage
        url={topic.topicImage}
        classNames={['w-[72px] h-[72px]', 'w-full h-full object-cover rounded-lg']}
      />
      <View className="flex-1 mx-2">
        <Text className="text-black font-semibold text-lg">
          {topic.topicTitle}
        </Text>
        <Text className="font-medium">
          {topic.topicDescription.length > 60
            ? `${topic.topicDescription.slice(0, 60)}...`
            : topic.topicDescription}
        </Text>
      </View>
      <View className="items-center justify-center w-20">
        <TouchableOpacity
          activeOpacity={0.7}
          className={`${
            topic.isSave
              ? 'bg-primary-color'
              : 'bg-white border-primary-color border'
          } rounded-lg`}>
          <Text
            className={`py-3 px-5 font-extrabold ${
              topic.isSave ? 'text-white' : 'text-primary-color'
            }`}>
            {topic.isSave ? 'Saved' : 'Save'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

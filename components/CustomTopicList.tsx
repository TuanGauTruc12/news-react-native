import {View, Text, ScrollView} from 'react-native';
import {Topic} from '../objects/Topic';
import CustomTopicItem from './CustomTopicItem';

interface CustomTopicListProps {
  topics: Topic[];
}

export default function CustomTopicList({topics}: CustomTopicListProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="my-4">
      {topics.map((topic: Topic) => (
        <CustomTopicItem key={topic.id} topic={topic} />
      ))}
    </ScrollView>
  );
}

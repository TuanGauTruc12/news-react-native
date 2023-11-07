import {useState} from 'react';
import {ScrollView} from 'react-native';
import {NewsItem} from '../objects/NewsItem';
import CustomTopicNewsItem from './CustomTopicNewsItem';

export default function CustomTopicNewsList() {
  const [popularTopics] = useState<NewsItem[]>([
    new NewsItem(
      1,
      'https://picsum.photos/200/300',
      'Europe',
      'Russian warship: Moskva sinks in Black Sea',
      'https://picsum.photos/200/300',
      '2022-5-10 15:30',
      'BBC News',
    ),
    new NewsItem(
      2,
      'https://picsum.photos/200/300',
      'Europe',
      'Russian warship: Moskva sinks in Black Sea',
      'https://picsum.photos/200/300',
      '2022-5-10 15:30',
      'BBC News',
    ),
    new NewsItem(
      3,
      'https://picsum.photos/200/300',
      'Europe',
      'Russian warship: Moskva sinks in Black Sea',
      'https://picsum.photos/200/300',
      '2022-5-10 15:30',
      'BBC News',
    ),
    new NewsItem(
      4,
      'https://picsum.photos/200/300',
      'Europe',
      'Russian warship: Moskva sinks in Black Sea',
      'https://picsum.photos/200/300',
      '2022-5-10 15:30',
      'BBC News',
    ),
    new NewsItem(
      5,
      'https://picsum.photos/200/300',
      'Europe',
      'Russian warship: Moskva sinks in Black Sea',
      'https://picsum.photos/200/300',
      '2022-5-10 15:30',
      'BBC News',
    ),
    new NewsItem(
      6,
      'https://picsum.photos/200/300',
      'Europe',
      'Russian warship: Moskva sinks in Black Sea',
      'https://picsum.photos/200/300',
      '2022-5-10 15:30',
      'BBC News',
    ),
    new NewsItem(
      7,
      'https://picsum.photos/200/300',
      'Europe',
      'Russian warship: Moskva sinks in Black Sea',
      'https://picsum.photos/200/300',
      '2022-5-10 15:30',
      'BBC News',
    ),
    new NewsItem(
      8,
      'https://picsum.photos/200/300',
      'Europe',
      'Russian warship: Moskva sinks in Black Sea',
      'https://picsum.photos/200/300',
      '2022-5-10 15:30',
      'BBC News',
    ),
    new NewsItem(
      9,
      'https://picsum.photos/200/300',
      'Europe',
      'Russian warship: Moskva sinks in Black Sea',
      'https://picsum.photos/200/300',
      '2022-5-10 15:30',
      'BBC News',
    ),
  ]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 20}}>
      {popularTopics.map((news: NewsItem) => (
        <CustomTopicNewsItem key={news.id} topicNewsItem={news} />
      ))}
    </ScrollView>
  );
}

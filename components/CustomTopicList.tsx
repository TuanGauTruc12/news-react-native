import {useState, useEffect, useCallback, useRef, useLayoutEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {Topic} from '../objects/Topic';
import topicData from '../objects/topics.json';
import CustomTopicItem from './CustomTopicItem';
import Circle from './Circle';

interface CustomTopicListProps {
  searchQuery?: string;
  isSearch?: boolean;
  limit?: number;
  inputFocused?: boolean;
}

export default function CustomTopicList({
  isSearch,
  limit = 4,
  searchQuery,
  inputFocused,
}: CustomTopicListProps) {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (inputFocused && typeof inputFocused === 'boolean') return;
      if (loading) return;

      const offsetY = event.nativeEvent.contentOffset.y;
      const contentHeight = event.nativeEvent.contentSize.height;
      const containerHeight = event.nativeEvent.layoutMeasurement.height;
      const scrollEndPosition = contentHeight - containerHeight;

      if (offsetY + containerHeight >= contentHeight - 10) {
        setLoading(true);

        //call api pagination when scroll
        setTimeout(() => {
          setTopics(prev => [...prev, ...topicData]);
          setLoading(false);

          if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({
              y: scrollEndPosition,
              animated: true,
            });
          }
        }, 3000);
      }
    },
    [inputFocused],
  );

  useLayoutEffect(() => {
    let idTimeOut: any;
    if (typeof searchQuery === 'undefined') {
      idTimeOut = setTimeout(() => {
        setTopics(topicData.slice(0, limit));
      }, 2000);
    } else {
      setTopics(topicData);
    }

    return () => {
      clearTimeout(idTimeOut);
    };
  }, []);

  useEffect(() => {
    if (isSearch && typeof searchQuery === 'string') {
      if (searchQuery.length !== 0) {
        setTopics(
          topicData.filter((topic: Topic) =>
            topic.topicTitle.toLowerCase().includes(searchQuery?.toLowerCase()),
          ),
        );
      } else {
        setTopics(topicData);
      }
    }
  }, [searchQuery]);

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        onScroll={typeof isSearch === 'boolean' && isSearch ? handleScroll : () => {}}
        showsVerticalScrollIndicator={false}
        className={`pt-2`}>
        {!searchQuery && !isSearch
          ? topics.map((topic: Topic) => (
              <CustomTopicItem key={topic.id} topic={topic} />
            ))
          : topics.map((topic: Topic, index: number) => (
              <View key={topic.id + index}>
                <CustomTopicItem topic={topic} />
              </View>
            ))}
      </ScrollView>
      {typeof isSearch === 'boolean' && topics.length === 0 && (
        <View className="w-full h-1/2 items-center">
          <Text className="text-black text-lg">
            Không tìm thấy kết quả cần tìm
          </Text>
        </View>
      )}
      {loading && (
        <View className="w-full items-center bg-black flex-none absolute bottom-5">
          <Circle width={10} height={10} translateX={15} />
        </View>
      )}
    </>
  );
}

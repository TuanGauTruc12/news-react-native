import {useState, useEffect, useCallback, useRef, useLayoutEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import authorData from '../objects/authors.json';
import Circle from './Circle';
import {Author} from '../objects/Author';
import CustomAuthorItem from './CustomAuthorItem';

interface CustomAuthorListProps {
  searchQuery: string;
  inputFocused: boolean;
  limit: number;
}

export default function CustomAuthorList({
  searchQuery,
  inputFocused,
  limit,
}: CustomAuthorListProps) {
  const [authors, setAuthors] = useState<Author[]>([]);
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
          const newAuthors: Author[] = [];
          authorData.forEach(data => {
            const author = new Author(
              data.id,
              data.authorImage,
              data.authorName,
              data.numberOfFollower,
              data.isFollowed,
            );
            newAuthors.push(author);
          });

          setAuthors(prev => [...prev, ...newAuthors]);
          setLoading(false);

          if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({
              y: scrollEndPosition - 10,
              animated: true,
            });
          }
        }, 3000);
      }
    },
    [inputFocused],
  );

  useLayoutEffect(() => {
    const authorsData: Author[] = [];
    authorData.forEach(data => {
      const author = new Author(
        data.id,
        data.authorImage,
        data.authorName,
        data.numberOfFollower,
        data.isFollowed,
      );
      authorsData.push(author);
    });

    setAuthors(authorsData);
  }, []);

  useEffect(() => {
    //search query api when search change delay 1000s
    //   if (searchQuery.length !== 0) {
    //     setAuthors(
    //       authorData.filter((author: Author) =>
    //         author.authorName.toLowerCase().includes(searchQuery?.toLowerCase()),
    //       ),
    //     );
    //   } else {
    //     setAuthors(authorData);
    //   }
  }, [searchQuery]);

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        className={`pt-2`}>
        {authors.map((author: Author, index: number) => (
          <View key={author.id + index + Math.random()}>
            <CustomAuthorItem author={author} />
          </View>
        ))}
      </ScrollView>
      {authors.length === 0 && (
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

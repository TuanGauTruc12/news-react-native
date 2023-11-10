import {useCallback, useEffect, useRef, useState, useLayoutEffect} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
  Text,
} from 'react-native';
import {useNewsContext} from './NewsContext';
import {NewsItem} from '../objects/NewsItem';
import CustomNewsItem from './CustomNewsItem';
import newsData from '../objects/news.json';
import Circle from './Circle';
import {renderScreenNewsItem} from '../utils';

interface CustomNewsListProps {
  renderScreen: string;
  limit?: number;
  author?: {
    type: 'recent' | 'news';
    idAuthor: number;
  };
  latest?: {
    idCategory: number;
  };
  search?: string;
  inputFocused?: boolean;
}

export default function CustomNewsList({
  renderScreen,
  limit = 5,
  search,
  author,
  inputFocused,
}: CustomNewsListProps) {
  const {news, setNews} = useNewsContext();
  const [limitOnScreen, setLimitOnScreen] = useState<number>(limit);
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
          setNews(prev => [...prev, ...newsData]);
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
    //delay 1000 nếu user chưa nhập xong
    //=> call api search
    //type:news
    //limit = limit

    if (
      typeof search !== undefined &&
      renderScreen === renderScreenNewsItem.search &&
      search
    ) {
      setNews(prev =>
        prev.filter((newsItem: NewsItem) =>
          newsItem.title.toLowerCase().includes(search?.toLowerCase()),
        ),
      );
    }
  }, [search]);

  useLayoutEffect(() => {
    //fetch api dựa vô screenDataRenderNewsItem.
    //Mặc định là latest và hiển thị 5-10.
    //Nếu ấn see all thì hiển thị 20 lăn xuống thì load dần đần cho tới hết data.
    //Nếu đang load data thì hiển thị circle loadding
    //Nếu đã load xong thì ẩn thanh load đi
    //đường dẫn api -> ?type= limit

    setNews(newsData);
  }, []);

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        onScroll={
          renderScreen === renderScreenNewsItem.search ? handleScroll : () => {}
        }
        showsVerticalScrollIndicator={false}
        className={`pt-2`}>
        {news.map((newsData: NewsItem, index: number) => (
          <CustomNewsItem
            key={newsData.id + Math.random()}
            newsItem={newsData}
          />
        ))}
      </ScrollView>
      {renderScreen === renderScreenNewsItem.search && news.length === 0 && (
        <View className="w-full h-1/2 items-center">
          <Text className="text-black text-lg">
            Không tìm thấy kết quả cần tìm
          </Text>
        </View>
      )}
      {loading ? (
        <View className="w-full items-center bg-black flex-none absolute bottom-5">
          <Circle width={10} height={10} translateX={15} />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

/*

{news
          .slice(0, limitOnScreen)
          .map((newsItem: NewsItem, index: number) => (
            <CustomNewsItem
              key={newsItem.id + index + Math.random()}
              newsItem={newsItem}
            />
          ))}
*/

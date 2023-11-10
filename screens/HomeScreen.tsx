import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {CustomCategoryList, CustomImage, CustomInput} from '../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  RootStackParams,
  buttonOpacityActive,
  heightNavigationBottom,
  icons,
  navigation,
} from '../utils';
import {Category} from '../objects/Category';
import {useNewsContext} from '../components/NewsContext';

export default function HomeScreen() {
  const {faBell, faEllipsis, faClock, faMagnifyingGlass} = icons;
  const [search, setSearch] = useState<string>('');
  const {setCategories} = useNewsContext();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const arrayCategory = [
        new Category(0, 'All'),
        new Category(1, 'Entertainment'),
        new Category(2, 'News'),
        new Category(3, 'Business'),
        new Category(4, 'Sport'),
        new Category(5, 'Entertainment'),
        new Category(6, 'World'),
        new Category(7, 'Culture'),
        new Category(8, 'Life'),
        new Category(9, 'Education'),
        new Category(10, 'Car'),
        new Category(11, 'Information and communication'),
        new Category(12, 'Real estate'),
        new Category(13, 'Law'),
        new Category(14, 'Tourism'),
      ];
      setCategories(arrayCategory);
    }, 500);
    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <View
      className="px-5 flex-1 h-full w-full relative bg-white"
      style={{marginBottom: 0}}>
      <View className="w-full flex-col">
        <View className="h-16 justify-between mt-2 flex-row items-center">
          <CustomImage
            url="https://cdn-icons-png.flaticon.com/512/2540/2540832.png"
            classNames={['h-full justify-center', 'object-cover h-14 w-14']}
          />
          <FontAwesomeIcon icon={faBell} size={30} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.push('SearchScreen')}
          activeOpacity={buttonOpacityActive}
          className="h-14 w-full border border-primary-color my-3">
          <View className="justify-center h-full pl-4">
            <FontAwesomeIcon icon={faMagnifyingGlass} size={30} />
          </View>
        </TouchableOpacity>
      </View>

      <View className="w-full flex-1">
        <View className="flex-col w-full flex-1">
          <View className="justify-between flex-row items-center">
            <Text className="font-extrabold text-base text-black">
              Trending
            </Text>
            <TouchableOpacity
              className="p-1"
              activeOpacity={buttonOpacityActive}
              onPress={() => navigation.push('TrendingScreen')}>
              <Text>See all</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.replace('DetailNewsScreen');
            }}
            className="w-full flex-col">
            <CustomImage
              classNames={[
                'px-2 my-2 w-full',
                'w-full h-36 object-cover rounded-md',
              ]}
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
        </View>
        <CustomCategoryList checkSeeAll />
      </View>
    </View>
  );
}

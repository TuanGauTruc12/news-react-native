import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {CustomImage, CustomInput} from '../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {RootStackParams, icons} from '../utils';
import {Category} from '../objects/Category';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function HomeScreen() {
  const {faBell, faEllipsis, faClock} = icons;
  const [search, setSearch] = useState<string>('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [categories, setCategories] = useState<Category[]>([]);
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
    <View className="px-5 bg-white">
      <View className="w-full flex-col">
        <View className="h-20 justify-between mt-2 flex-row items-center">
          <CustomImage
            url="https://cdn-icons-png.flaticon.com/512/2540/2540832.png"
            classNames={['h-full justify-center', 'object-cover h-14 w-14']}
          />
          <FontAwesomeIcon icon={faBell} size={30} />
        </View>
        <View className="h-20 w-full">
          <CustomInput
            isSearch
            setInput={setSearch}
            input={search}
            placeholder="Search..."
          />
        </View>
      </View>
      <View className="w-full h-full flex-col gap-y-4">
        <View className="flex-col w-full">
          <View className="justify-between mt-2 flex-row items-center">
            <Text className="font-extrabold text-base text-black">
              Trending
            </Text>
            <Text>See all</Text>
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
                    classNames={['mr-2', 'h-12 w-12 object-cover rounded-full']}
                  />

                  <View className="flex-row gap-x-2">
                    <Text>BBC News</Text>
                    <View className="flex-row items-center gap-x-1">
                      <FontAwesomeIcon icon={faClock} />
                      <Text className="">4h ago</Text>
                    </View>
                  </View>
                </View>
                <FontAwesomeIcon icon={faEllipsis} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View className="w-full flex-1">
          <View className="justify-between mt-2 flex-row items-center">
            <Text className="font-extrabold text-base text-black">Latest</Text>
            <Text>See all</Text>
          </View>
          <View className="mt-2 flex-col px-1 py-2">
            <ScrollView
              horizontal={true}
              // className='flex-row w-full'
              
              >
              {categories.map((item: Category) => {
                return (
                  <View className="mr-4 py-2 overflow-scroll" key={item.id}>
                    <Text className="text-base font-semibold mx-3">
                      {item.nameCategory}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
            <View className="w-full mt-3 px-1">
              <Text>283838</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

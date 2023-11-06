import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import HeaderBack from '../components/HeaderBack';
import {icons} from '../utils';
import {CustomCategoryList, CustomImage} from '../components';
import CustomNewItem from '../components/CustomNewItem';
import CustomCategoryItem from '../components/CustomCategoryItem';

export default function AuthorProfileScreen() {
  const [selected, setSelected] = useState(true);

  const {faArrowLeft, faEllipsisVertical} = icons;

  return (
    <View className="flex-col flex h-full px-2 bg-slate-300">
      <HeaderBack
        icons={[faArrowLeft, faEllipsisVertical]}
        nameNavigate={'HomeScreen'}
      />
      <View className="px-2">
        {/* Information author details */}
        <View className="flex-row flex my-3">
          <CustomImage
            url="https://play-lh.googleusercontent.com/Alt_6SesU0dU3YlDEsPREYkEb2ZMN-K4PMdLtUKO6ts1UBrDUF8Sh6LzcDYHd03jfP7z"
            classNames={[
              'flex-none',
              'w-[100px] h-[100px] rounded-full object-cover',
            ]}
          />
          <View className="flex-1 flex-row mx-2 gap-1">
            <View className="items-center justify-center flex-1">
              <Text>1.2M</Text>
              <Text>Follower</Text>
            </View>
            <View className="items-center justify-center flex-1">
              <Text>1.2M</Text>
              <Text>Following</Text>
            </View>
            <View className="items-center justify-center flex-1">
              <Text>326</Text>
              <Text>News</Text>
            </View>
          </View>
        </View>

        {/* author details */}
        <View>
          <Text className="font-extrabold leading-8 text-base">BBC News</Text>
          <Text className="text-sm text-justify">
            is an operational business division of the British Broadcasting
            Corporation responsible for the gathering and broadcasting of news
            and current affairs.
          </Text>
        </View>

        {/* Button author */}
        <View className="flex-row gap-x-5 gap-y-1 mt-1 flex-none">
          <View
            className={`bg-primary-color justify-center items-center flex-1`}>
            <TouchableOpacity
              className="justify-center p-3 w-full items-center"
              activeOpacity={0.7}>
              <Text className="text-white text-lg font-extrabold">
                Following
              </Text>
            </TouchableOpacity>
          </View>
          <View
            className={`bg-primary-color justify-center items-center flex-1`}>
            <TouchableOpacity
              className="justify-center p-3 w-full items-center"
              activeOpacity={0.7}>
              <Text className="text-white text-lg font-extrabold">Website</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}
        <View className="flex-row flex-none mt-2 justify-center">
          <View className="mr-3">
            <TouchableOpacity
              onPress={() => {
                if (!selected) {
                  setSelected(true);
                }
              }}
              className="justify-center py-2 items-end">
              <Text
                className={`text-black text-lg font-semibold ${
                  selected && `border-b border-primary-color`
                }`}>
                News
              </Text>
            </TouchableOpacity>
          </View>
          <View className="ml-3">
            <TouchableOpacity
              onPress={() => {
                if (selected) {
                  setSelected(false);
                }
              }}
              className="justify-center py-2 w-full items-start">
              <Text
                className={`text-black text-lg font-semibold ${
                  !selected && `border-b border-primary-color`
                }`}>
                Recent
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex-1">
        <CustomNewItem />
      </View>
    </View>
  );
}

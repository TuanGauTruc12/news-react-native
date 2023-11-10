import {useNavigation} from '@react-navigation/core';
import {View, Text, TouchableOpacity, Touchable, StatusBar} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {heightNavigationBottom, renderScreenNewsItem} from '../utils';
import {CustomInput} from '../components';
import {useState} from 'react';
import CustomNewsList from '../components/CustomNewsList';

export default function BookmarkScreen() {
  const [search, setSearch] = useState<string>('');
  return (
    <View
      className="bg-white pt-6 px-5 h-full"
      style={{
        marginBottom: heightNavigationBottom,
      }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text className="text-black text-xl">Bookmark</Text>
      <View className="h-20 w-full mt-3 flex-none">
        <CustomInput
          isSearch
          setInput={setSearch}
          input={search}
          placeholder="Search..."
        />
      </View>
      <CustomNewsList
        // search={search}
        limit={10}
        renderScreenNewsItem={renderScreenNewsItem.bookMark}
      />
    </View>
  );
}

import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  Keyboard,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {CustomInput} from '../components';
import {listSearch, buttonOpacityActive, renderScreenNewsItem} from '../utils';
import CustomNewsList from '../components/CustomNewsList';
import CustomTopicList from '../components/CustomTopicList';
import CustomAuthorList from '../components/CustomAuthorList';

export default function SearchScreen() {
  const [checkSearch, setCheckSearch] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inputFocused, setInputFocused] = useState<boolean>(false);

  const handleInputFocus = useCallback(() => {
    setInputFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setInputFocused(false);
  }, []);

  const handleContainerPress = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View className="h-20 px-5 flex-none z-20 mt-6 items-center justify-center">
        <CustomInput
          isSearch
          placeholder="Search ..."
          input={searchQuery}
          setInput={setSearchQuery}
          handleInputFocus={handleInputFocus}
          handleInputBlur={handleInputBlur}
        />
      </View>
      <View className="bg-white h-full flex-1 w-full">
        <View className="my-3 w-full justify-center flex-row gap-x-4 bg-white flex-none">
          {listSearch.map((search: string, index: number) => (
            <TouchableOpacity
              onPress={() => {
                if (index !== checkSearch) setCheckSearch(index);
              }}
              activeOpacity={index === checkSearch ? 1 : buttonOpacityActive}
              key={index}
              className={`${
                checkSearch === index && 'border-b-4 border-primary-color'
              }`}>
              <Text className="text-black">{search}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="px-3 flex-1 relative">
          {checkSearch === 0 && (
            <CustomNewsList
              search={searchQuery}
              renderScreen={renderScreenNewsItem.search}
              limit={10}
            />
          )}

          {checkSearch === 1 && (
            <CustomTopicList
              isSearch
              inputFocused={inputFocused}
              limit={10}
              searchQuery={searchQuery}
            />
          )}

          {checkSearch === 2 && (
            <CustomAuthorList
              searchQuery={searchQuery}
              inputFocused={inputFocused}
              limit={10}
            />
          )}
        </View>
      </View>
      {inputFocused && (
        <View
          className={`absolute top-0 left-0 bottom-0 right-0 z-10`}
          onTouchStart={handleContainerPress}
        />
      )}
    </View>
  );
}

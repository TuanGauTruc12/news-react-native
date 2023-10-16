import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Category} from '../objects/Category';
import {useNewsContext} from './NewsContext';
import CustomNewItem from './CustomNewItem';
import { buttonOpacityActive } from '../utils';

export default function CustomCategoryItem() {
  const [checkCategory, setCheckCategory] = useState<number>(0);
  const {categories} = useNewsContext();
  return (
    <>
      <ScrollView
        className="flex-none"
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {categories.map((item: Category, index: number) => {
          return (
            <TouchableOpacity
              onPress={() => setCheckCategory(index)}
              activeOpacity={buttonOpacityActive}
              className={`py-2 overflow-scroll transition-all ${
                checkCategory === index
                  ? 'border-b-2 border-blue-600'
                  : 'border-0'
              } ${index === categories.length ? 'mr-3' : ''}`}
              key={item.id}>
              <Text className="text-base font-semibold mx-3">
                {item.nameCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <CustomNewItem />
    </>
  );
}

import React from 'react';
import {View, ScrollView} from 'react-native';
import {NavigationProp} from '@react-navigation/core';
import {ParamListBase} from '@react-navigation/native';

import TrendingNewsItem from '../components/TrendingNewsItem';
import HeaderBack from '../components/HeaderBack';
import {
  RootStackParams,
  icons,
  nameNavigationTitle,
  navigationTitle,
} from '../utils';

export default function TrendingScreen({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const hederBackTitle: string = nameNavigationTitle('TrendingScreen');
  const {faArrowLeft, faShareNodes, faEllipsisVertical} = icons;

  return (
    <View className="flex-1 w-full bg-white">
      <HeaderBack
        title={hederBackTitle}
        icons={[faArrowLeft]}
      />
      <ScrollView className="px-4 mb-1">
        {Array(12)
          .fill(0)
          .map((_, index) => {
            return <TrendingNewsItem key={index} />;
          })}
      </ScrollView>
    </View>
  );
}

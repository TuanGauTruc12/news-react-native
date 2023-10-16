import React from 'react';
import {View, Image} from 'react-native';

interface CustomImageProps {
  url: string;
  classNames?: string[];
}

export default function CustomImage({
  url,
  classNames,
}: CustomImageProps) {
  return (
    <View className={`${classNames?.[0]}`}>
      <Image
        source={{uri: url}}
        className={`${classNames?.[1]}`}
      />
    </View>
  );
}

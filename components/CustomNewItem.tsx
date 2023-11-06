import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import CustomImage from './CustomImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {buttonOpacityActive, icons} from '../utils';

export default function CustomNewItem() {
  const {faClock, faEllipsis} = icons;

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full flex-col mt-2">
        {Array(12)
          .fill(0)
          .map((_: any, index: number) => {
            return (
              <TouchableOpacity
                activeOpacity={buttonOpacityActive}
                key={index}
                className="w-full h-fit mx-1 justify-center flex-row items-center">
                {/* Image */}
                <CustomImage
                  url="https://static-images.vnncdn.net/files/publish/2023/10/16/tong-bi-thu-chu-tich-nuoc-tiep-chu-tich-duma-quoc-gia-nga-1385.jpg"
                  classNames={[
                    'h-20 w-20 flex-none',
                    'h-full w-full object-cover rounded-lg',
                  ]}
                />
                <View className="flex-1 w-full h-full ml-1 pl-2 gap-y-1">
                  <Text className="text-sm">Europe {index + 1}</Text>
                  <Text className="text-base text-justify">
                    {`${"Ukraine's President Zelensky to BBC: Blood money being paid...".slice(
                      0,
                      80,
                    )}...`}
                  </Text>
                  <View className="flex-row justify-between items-center mb-3">
                    <View className="flex-row items-center gap-x-3">
                      <View className="flex-row items-center">
                        <CustomImage
                          url="https://play-lh.googleusercontent.com/Iip-8Yn3PLAzecCMb4ZaHTvFObl3ETUWZmd5zLflhbB6BXKyNc5aM4hrGAA9NXSs7i0=w240-h480-rw"
                          classNames={[
                            'mr-2',
                            'h-8 w-8 object-cover rounded-full',
                          ]}
                        />
                        <Text>BBC News</Text>
                      </View>
                      <View className="flex-row items-center">
                        <FontAwesomeIcon icon={faClock} size={20} />
                        <Text>14m ago</Text>
                      </View>
                    </View>
                    <FontAwesomeIcon icon={faEllipsis} size={20} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </>
  );
}

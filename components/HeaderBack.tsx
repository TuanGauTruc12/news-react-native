import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {RootStackParams, navigation} from '../utils';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

interface HeaderBackProps {
  icons: IconDefinition[];
  title?: string | undefined;
  nameNavigate: keyof RootStackParams;
}

export default function HeaderBack({
  icons,
  title,
  nameNavigate,
}: HeaderBackProps) {
  const [faArrowLeft, faEllipsisVertical, faShareNodes] = icons;

  return (
    <View className="h-14 items-center flex-row relative w-full justify-between">
      <TouchableOpacity
        onPress={() => {
          navigation.replace(nameNavigate);
        }}
        className="h-full w-14 items-center justify-center px-3">
        <FontAwesomeIcon size={30} icon={faArrowLeft} />
      </TouchableOpacity>
      {title && (
        <View className="absolute items-center w-full">
          <Text className="text-base font-bold text-black">{title}</Text>
        </View>
      )}

      {icons.length > 1 && (
        <View className="absolute items-center justify-center right-0 flex-row top-0 bottom-0">
          {/* share */}
          {faShareNodes && (
            <TouchableOpacity className="w-12 h-full items-center justify-center">
              <FontAwesomeIcon size={30} icon={faShareNodes} color="" />
            </TouchableOpacity>
          )}
          {/* options */}
          <TouchableOpacity
            className={`w-12 h-full items-center justify-center ml-4`}>
            <FontAwesomeIcon size={30} icon={faEllipsisVertical} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

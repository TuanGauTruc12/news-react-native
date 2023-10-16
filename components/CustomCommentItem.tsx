import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {icons} from '../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import CustomCircleImage from './CustomImage';
import {User} from '../objects/User';
import {useNewsContext} from './NewsContext';

interface ICustomCommentItemProps {
  user: User;
  contentComment: string;
  countComment: number;
  countLiked: number;
  createAt: string;
}

export default function CustomCommentItem({
  user,
  contentComment,
  countComment,
  countLiked,
  createAt,
}: ICustomCommentItemProps) {
  const {faHeart, faReply, faComment, faCalendarDays} = icons;
  const {inputRef, reply, setReply} = useNewsContext();

  const showKeyboard = (idUser: number) => {
    if (inputRef.current) {
      setReply(idUser);
      inputRef.current.focus();
    }
  };

  return (
    <View className="flex-row mb-3 py-3">
      <CustomCircleImage
        url={user.avatar}
        classNames={['mt-4 mr-2', 'h-16 w-16 object-cover rounded-full']}
      />
      <View className="flex-1 flex-col justify-center pr-4">
        <Text className="font-bold text-base">{user.displayName}</Text>
        <Text className="text-sm font-semibold">{contentComment}</Text>
        <View className="flex-wrap">
          <View className="flex-row flex-wrap w-full">
            <View className="flex-row flex-1 my-1 items-center flex-wrap">
              <FontAwesomeIcon size={15} icon={faComment} />
              <Text className="ml-2 font-semibold">{`${countComment} comment`}</Text>
            </View>
            <View className="flex-row flex-1 my-1 items-center flex-wrap">
              <FontAwesomeIcon size={15} icon={faHeart} />
              <Text className="ml-2 font-semibold">{`${countLiked} like`}</Text>
            </View>
          </View>
          <View className="flex-row flex-wrap w-full">
            <View className="flex-row flex-1 my-1 items-center flex-wrap">
              <FontAwesomeIcon size={15} icon={faCalendarDays} />
              <Text className="ml-2 font-semibold">{createAt}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                showKeyboard(user.id);
              }}
              className="flex-row flex-1 my-1 items-center flex-wrap">
              <FontAwesomeIcon size={15} icon={faReply} />
              <Text className="ml-2 font-semibold">reply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

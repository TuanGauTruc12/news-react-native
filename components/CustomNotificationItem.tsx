import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomImage from './CustomImage';
import {buttonOpacityActive, icons} from '../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {User} from '../objects/User';

interface CustomNotificationItemProps {
  author: User;
  notification: string;
  timeNotification: string;
  isFollow: boolean;
}

export default function CustomNotificationItem({
  author,
  notification,
  timeNotification,
  isFollow,
}: CustomNotificationItemProps) {
  const {faPlus} = icons;

  return (
    <View className="h-24 flex-row my-1 items-center bg-gray-200 w-full rounded-md">
      <CustomImage
        classNames={['mx-3', 'h-16 w-16 object-cover rounded-full']}
        url={`${author.avatar}`}
      />
      <View className="flex-1 mr-2 text-justify">
        <Text className="">{`${notification.slice(0, 50)}....`}</Text>
        <Text>{timeNotification}</Text>
      </View>
      {isFollow && (
        <TouchableOpacity
          activeOpacity={buttonOpacityActive}
          className="flex-row p-3 items-center border-2 border-blue-500 rounded-md">
          <FontAwesomeIcon icon={faPlus} size={20} color="#3b82f6" />
          <Text className="ml-2">Follow</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

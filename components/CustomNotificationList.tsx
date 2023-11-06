import React from 'react';
import {Text, View} from 'react-native';
import CustomNotificationItem from './CustomNotificationItem';
import {User} from '../objects/User';
import {Notifications} from '../objects/Notifications';

interface CustomNotificationListProps {
  notifications: Notifications[];
}

export default function CustomNotificationList({
  notifications,
}: CustomNotificationListProps) {
  return (
    <View className="mx-3">
      {notifications.map((notifications: Notifications, index: number) => {
        return (
          <View key={index}>
            <Text className="text-black font-extrabold text-base mx-3 my-1">
              {notifications.timeNotification}
            </Text>

            {notifications.notifications.map((notification, index) => {
              return (
                <CustomNotificationItem
                  key={index}
                  timeNotification={notification.timeNotification}
                  isFollow
                  notification={notification.notification}
                  author={notification.author}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

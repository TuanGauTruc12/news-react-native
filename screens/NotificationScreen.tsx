import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import HeaderBack from '../components/HeaderBack';
import {CustomNotificationList} from '../components';
import {icons, nameNavigationTitle} from '../utils';
import {Notifications} from '../objects/Notifications';
import {Notification} from '../objects/Notification';
import {User} from '../objects/User';

export default function NotificationScreen() {
  const {faArrowLeft} = icons;
    // const notifications = [];
  const [notifications, setNotifications] = useState<Notifications[]>();

  const hederBackTitle: string = nameNavigationTitle('NotificationScreen');
  
  useEffect(() => {
    const fetchData = () => {
      const arrayNotifications = [
        new Notifications(
          [
            new Notification(
              "BBC News has posted new europe news “Ukraine's President Zele...”",
              '2021-10-10 15:30',
              new User(
                Math.random() * 1000,
                'BBC News',
                'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/04/hinh-nen-3d-11.jpg',
              ),
            ),
          ],
          '2021-10-10 15:30',
        ),
        new Notifications(
          [
            new Notification(
              "BBC News has posted new europe news “Ukraine's President Zele...”",
              '2021-10-10 15:30',
              new User(
                Math.random() * 1000,
                'BBC News',
                'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/04/hinh-nen-3d-11.jpg',
              ),
            ),
          ],
          '2021-10-10 15:30',
        ),
        new Notifications(
          [
            new Notification(
              "BBC News has posted new europe news “Ukraine's President Zele...”",
              '2021-10-10 15:30',
              new User(
                Math.random() * 1000,
                'BBC News',
                'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/04/hinh-nen-3d-11.jpg',
              ),
            ),
          ],
          '2021-10-10 15:30',
        ),
        new Notifications(
          [
            new Notification(
              "BBC News has posted new europe news “Ukraine's President Zele...”",
              '2021-10-10 15:30',
              new User(
                Math.random() * 1000,
                'BBC News',
                'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/04/hinh-nen-3d-11.jpg',
              ),
            ),
          ],
          '2021-10-10 15:30',
        ),
      ];
      setNotifications(arrayNotifications);
    };
    // fetchData();
  }, []);

  return (
    <View className="w-full h-full bg-white">
      <HeaderBack
        icons={[faArrowLeft]}
        title={hederBackTitle}
      />

      <ScrollView>
        {notifications && (
          <CustomNotificationList notifications={notifications} />
        )}
      </ScrollView>
    </View>
  );
}

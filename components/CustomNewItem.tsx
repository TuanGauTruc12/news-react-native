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
                          url="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/276160050_333915868766014_403614321434139472_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sv5bJ9ggVdEAX9MLuWI&_nc_ht=scontent.fsgn2-3.fna&_nc_e2o=f&oh=00_AfCFHLe36LgZdWqx0z2RlaHbs-lC7mdFH3pikP5Aj1jC3A&oe=65309220"
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

import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {Circle} from '../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../utils';

function SplashScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      navigation.push('HomeScreen');
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <View className="h-full justify-center items-center flex flex-col">
      <View className="justify-end items-center">
        <Image
          height={200}
          width={200}
          className="object-cover"
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2540/2540832.png',
          }}
        />
      </View>
      <View className="w-full h-[30%]">
        <Circle />
      </View>
    </View>
  );
}

export default SplashScreen;

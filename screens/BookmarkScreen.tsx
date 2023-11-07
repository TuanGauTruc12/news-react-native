import {useNavigation} from '@react-navigation/core';
import {View, Text, TouchableOpacity, Touchable, StatusBar} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {heightNavigationBottom} from '../utils';

export default function BookmarkScreen() {
  return (
    <View
      className='bg-white h-full px-4'
      style={{
        marginBottom: heightNavigationBottom,
      }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View className="h-12 justify-center mt-3">
        <Text className="text-3xl font-extrabold text-black">Explore</Text>
      </View>
      <View>
        <Text>Topic</Text>
        <TouchableOpacity onPress={()=>{
          console.log("See all");
          
        }}>
          See all
        </TouchableOpacity>
      </View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
}

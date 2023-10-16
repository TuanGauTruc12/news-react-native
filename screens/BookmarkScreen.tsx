import {useNavigation} from '@react-navigation/core';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { heightNavigationBottom } from '../utils';

export default function BookmarkScreen() {

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "black",
        marginBottom: heightNavigationBottom
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>BookmarkScreen</Text>
    </View>
  );
}

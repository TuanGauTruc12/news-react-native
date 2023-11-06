import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Keyboard, Button} from 'react-native';
import {CustomCommentList, CustomInput} from '../components';
import {icons, navigation} from '../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNewsContext} from '../components/NewsContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../utils';
import {useRoute, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  CommentScreen: {idNew: number};
};

type Screen2NavigationProp = StackNavigationProp<
  RootStackParamList,
  'CommentScreen'
>;

interface Screen2Props {
  route: RouteProp<RootStackParamList, 'CommentScreen'>;
  navigation: Screen2NavigationProp;
}

interface CommentScreenProps {
  route: {
    params: {
      idNew: number;
    };
  };
}

export default function CommentScreen() {

  const route = useRoute();

  const {idNew} = route.params as {idNew: number};

  const [commentInput, setCommentInput] = useState<string>('');

  const handleSubmitMessage = (input: string) => {};
  const {setReply, reply, user} = useNewsContext();

  const hideKeyboard = () => {
    Keyboard.dismiss();
    setReply(undefined);
  };

  const {faArrowLeft} = icons;

  return (
    <View className="flex-1 flex-col w-full">
      <View className="h-14 bg-white items-center flex-row relative border-b-2 border-gray-300">
        <TouchableOpacity
          onPress={() => {
            navigation.replace('DetailNewsScreen');
          }}
          className="h-full w-14 items-center justify-center z-10">
          <FontAwesomeIcon size={30} icon={faArrowLeft} />
        </TouchableOpacity>
        <View className="flex-1 h-full absolute w-full items-center justify-center -z-10">
          <Text className="text-xl font-bold">Comments</Text>
        </View>
      </View>
      <View className="bg-white flex-1">
        <View className="flex-1 ml-4">
          <CustomCommentList />
        </View>
        <TouchableOpacity
          className={`top-0 bottom-0 flex-1 right-0 left-0 ${
            reply !== undefined ? 'absolute' : 'hidden'
          }`}
          onPress={() => hideKeyboard()}
        />
      </View>
      <View>
        {user === undefined ? (
          <TouchableOpacity
            className="py-3 justify-center items-center bg-[#00bfff] border border-gray-500"
            onPress={() => {
              navigation.push('LoginScreen');
            }}>
            <Text className="text-2xl font-extrabold">Login</Text>
          </TouchableOpacity>
        ) : (
          <CustomInput
            handleSubmitMessage={handleSubmitMessage}
            isComment
            input={commentInput}
            setInput={setCommentInput}
          />
        )}
      </View>
    </View>
  );
}
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {
  buttonOpacityActive,
  icons,
  nameNavigationTitle,
  navigation,
  navigationTitle,
} from '../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {CustomImage} from '../components';
import HeaderBack from '../components/HeaderBack';

export default function DetailNewsScreen() {
  const {
    faArrowLeft,
    faShareNodes,
    faEllipsisVertical,
    faHeart,
    faHeartBold,
    faBookmark,
    faCommentDots,
  } = icons;

  const handleNavigateToAuthorScreen = () => {
    navigation.push('AuthorProfileScreen');
  };

  const hederBackTitle: string = nameNavigationTitle('DetailNewsScreen');

  return (
    <View className="flex-1 flex-col w-full bg-white">
      {/* Header */}
      <HeaderBack
        icons={[faArrowLeft, faEllipsisVertical, faShareNodes]}
        nameNavigate={'HomeScreen'}
        title={hederBackTitle}
      />

      <View className="flex-1 flex-col">
        {/* Header news */}
        <View className="w-full flex-col px-4">
          {/* Detail author */}
          <View className="flex-row">
            <TouchableOpacity
              onPress={() => handleNavigateToAuthorScreen()}
              activeOpacity={buttonOpacityActive}>
              <CustomImage
                classNames={['mr-2', 'h-16 w-16 object-cover rounded-full']}
                url="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/276160050_333915868766014_403614321434139472_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sv5bJ9ggVdEAX9MLuWI&_nc_ht=scontent.fsgn2-3.fna&_nc_e2o=f&oh=00_AfCFHLe36LgZdWqx0z2RlaHbs-lC7mdFH3pikP5Aj1jC3A&oe=65309220"
              />
            </TouchableOpacity>

            {/* author & time news post */}
            <View className="flex-col">
              <TouchableOpacity
                onPress={() => handleNavigateToAuthorScreen()}
                activeOpacity={buttonOpacityActive}>
                <Text className="text-xl font-extrabold">BBC News</Text>
              </TouchableOpacity>

              <Text className="text-base">14n ago</Text>
            </View>
            {/* Button following */}
            <View className="ml-auto justify-center">
              <TouchableOpacity
                onPress={() => {
                  //axios.put api follow author
                }}
                className="bg-[#1877F2] w-20 h-10 justify-center items-center">
                <Text className="text-white">Following</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{paddingHorizontal: 12}}
          className="mt-2">
          {/* Image primary */}
          <View className="w-full">
            <Image
              className="w-full h-64 object-cover"
              source={{
                uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRX3asNlJ2Ag1lyxNhVUUafaJMQVmrur7Lm53WU0ZyuzLzFc739',
              }}
            />
          </View>
          {/* news detail */}
          {/* nation */}
          <Text className="text-sm text-black mt-2">Europe</Text>
          {/* title */}
          <Text className="text-2xl font-semibold text-black mt-2">
            Ukraine's President Zelensky to BBC: Blood money being paid for
            Russian oil
          </Text>

          {/* content news */}
          <Text className="text-lg text-black tracking-wider text-justify">
            Ukrainian President Volodymyr Zelensky has accused European
            countries that continue to buy Russian oil of "earning their money
            in other people's blood". In an interview with the BBC, President
            Zelensky singled out Germany and Hungary, accusing them of blocking
            efforts to embargo energy sales, from which Russia stands to make up
            to £250bn ($326bn) this year. There has been a growing frustration
            among Ukraine's leadership with Berlin, which has backed some
            sanctions against Russia but so far resisted calls to back tougher
            action on oil sales.
          </Text>
        </ScrollView>
      </View>
      <View className="h-16 flex-row justify-between px-3">
        <View className="flex-1">
          <View className="flex-row items-center h-full">
            <TouchableOpacity
              onPress={() => {
                //call api send add one heart
              }}
              className="flex-row items-center justify-center h-full ml-2">
              <FontAwesomeIcon icon={faHeartBold} color="#ED2E7E" size={26} />
              <Text className="text-base ml-1">24.5 K</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                const idNew = 1;
                navigation.navigate('CommentScreen', {idNew});
                //navigate to CommentScreen, add to component comment one id news
              }}
              className="flex-row items-center justify-center h-full ml-3">
              <FontAwesomeIcon icon={faCommentDots} size={26} />
              <Text className="text-base ml-1">1 K</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-1 justify-end flex-row items-center">
          <TouchableOpacity
            onPress={() => {
              //add id new with user id
            }}>
            <FontAwesomeIcon icon={faBookmark} color="#1877F2" size={26} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

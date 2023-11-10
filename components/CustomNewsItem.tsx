import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity, Text, View} from 'react-native';
import CustomImage from './CustomImage';
import {buttonOpacityActive, icons} from '../utils';
import {NewsItem} from '../objects/NewsItem';

interface CustomNewsItemProps {
  newsItem: NewsItem;
}

export default function CustomNewsItem({newsItem}: CustomNewsItemProps) {
  const {faClock, faEllipsis} = icons;

  return (
    <TouchableOpacity
      activeOpacity={buttonOpacityActive}
      className="w-full mx-1 justify-center flex-row items-center my-1">
      {/* Image */}
      <CustomImage
        url={newsItem.imageNewsUrl}
        classNames={[
          'h-20 w-20 flex-none',
          'h-full w-full object-cover rounded-lg',
        ]}
      />
      <View className="flex-1 w-full h-full ml-1 pl-2 gap-y-1">
        <Text className="text-sm">{newsItem.title}</Text>
        <Text className="text-base text-justify">
          {`${newsItem.content.slice(0, 80)}...`}
        </Text>
        <View className="flex-row justify-between items-center mb-3">
          <View className="flex-row items-center gap-x-3">
            <View className="flex-row items-center">
              <CustomImage
                url={newsItem.imageAuthorUrl}
                classNames={['mr-2', 'h-8 w-8 object-cover rounded-full']}
              />
              <Text>{newsItem.author}</Text>
            </View>
            <View className="flex-row items-center">
              <FontAwesomeIcon icon={faClock} size={20} />
              <Text className="ml-1">{newsItem.timer}</Text>
            </View>
          </View>
          <FontAwesomeIcon icon={faEllipsis} size={20} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

import {View, Text, TouchableOpacity} from 'react-native';
import {Author} from '../objects/Author';
import CustomImage from './CustomImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {icons} from '../utils';

interface CustomAuthorItemProps {
  author: Author;
}

export default function CustomAuthorItem({author}: CustomAuthorItemProps) {
  const {faPlus} = icons;
  return (
    <View className="flex-row mb-3 py-2">
      <CustomImage
        url={author.authorImage}
        classNames={[
          'w-[72px] h-[72px] flex-none',
          'w-full h-full object-cover rounded-full',
        ]}
      />

      <View className="flex-1 mx-2">
        <Text className="text-black font-semibold text-lg">
          {author.authorName}
        </Text>
        <Text className="font-medium">{author.numberOfFollower}</Text>
      </View>

      <View className="items-center justify-center flex-none">
        <TouchableOpacity
          activeOpacity={0.7}
          className={`${
            author.isFollowed
              ? 'bg-primary-color'
              : 'bg-white border-primary-color border flex-row gap-x-2'
          } rounded-lg w-28 relative`}>
          {!author.isFollowed && (
            <View className="justify-center absolute h-full">
              <FontAwesomeIcon icon={faPlus} size={28} />
            </View>
          )}
          <View className="justify-center items-center w-full">
            <Text
              className={`py-3 font-extrabold ${
                author.isFollowed ? 'text-white' : 'text-primary-color'
              }`}>
              {author.isFollowed ? 'Following' : 'Follow'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

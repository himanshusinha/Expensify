import {View, Text, Image} from 'react-native';
import React from 'react';
import images from '../constants/images';

const EmptyList = ({message}) => {
  return (
    <View className="flex justify-center item-center my-5 space-y-3">
      <Image className="w-36 h-36 shadow" source={images.empty} />
      <Text className="font-bold text-gray-400">
        {message || 'data not found'}
      </Text>
    </View>
  );
};

export default EmptyList;

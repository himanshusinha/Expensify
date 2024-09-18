import {TouchableOpacity} from 'react-native';
import React from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import colors from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      className="bg-white rounded-full h-8 w-8 justify-center items-center">
      <ChevronLeftIcon size="20" color={colors.button} />
    </TouchableOpacity>
  );
};

export default BackButton;

import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const Loading = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', padding: 8}}>
      <ActivityIndicator size={'large'} color={colors.button} />
    </View>
  );
};

export default Loading;

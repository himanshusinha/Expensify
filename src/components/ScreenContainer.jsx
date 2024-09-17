import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

const ScreenContainer = ({children}) => {
  let statusBarHeight = StatusBar.currentHeight;
  return (
    <SafeAreaView style={{marginTop: statusBarHeight}}>{children}</SafeAreaView>
  );
};

export default ScreenContainer;

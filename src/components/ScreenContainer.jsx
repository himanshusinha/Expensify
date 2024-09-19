import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';

const ScreenContainer = ({children}) => {
  return <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set background color to white
  },
});

export default ScreenContainer;

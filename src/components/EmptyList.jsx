import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import images from '../constants/images';

const EmptyList = ({message}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.empty} />
      <Text style={styles.message}>{message || 'Data not found'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    marginVertical: 20,
    marginHorizontal: 16,
    marginTop: 100,
  },
  image: {
    width: 144, // Example size (36 * 4)
    height: 144, // Example size (36 * 4)
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  message: {
    fontWeight: '500',
    color: '#000', // Equivalent to gray-400
    marginTop: 10,
  },
});

export default EmptyList;

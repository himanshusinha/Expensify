import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../navigations/navigationStrings';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <View className="h-full justify-around">
        <View className="flex-row justify-center mt-10">
          <Image source={require('../../assets/images/welcome.gif')} />
        </View>
        <View className="mx-5 mb-20">
          <Text
            className={`text-center font-bold text-4xl ${colors.heading} mb-10`}>
            Expensify
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.LOGIN_SCREEN)}
            className="shadow p-3 rounded-full"
            style={{backgroundColor: colors.button}}>
            <Text className="text-center text-white text-lg font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.SIGNUP_SCREEN)}
            className="shadow p-3 rounded-full mt-5"
            style={{backgroundColor: colors.button}}>
            <Text className="text-center text-white text-lg font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default WelcomeScreen;

import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import colors from '../../constants/colors';
import BackButton from '../../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../navigations/navigationStrings';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (email && password) {
      navigation.goBack();
      navigation.navigate(navigationStrings.HOME_SCREEN);
    }
  };

  return (
    <ScreenContainer>
      <View className="flex justify-between h-full mx-4 mt-5">
        <View className="relative">
          <View className="absolute top-0 left-0 flex-row items-center">
            <BackButton />
            <Text
              className={`${colors.heading} text-xl font-bold text-center flex-1`}>
              Sign In
            </Text>
          </View>

          <View className="flex-row justify-center items-center mt-5">
            <Image
              className="h-72 w-72"
              source={require('../../assets/images/login.png')}
            />
          </View>
          <View className="space-y-2 mx-2 mt-10">
            <Text className={`${colors.heading} text-lg font-bold`}>Email</Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={value => setEmail(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              Password
            </Text>
            <TextInput
              placeholder="Password"
              value={password}
              secureTextEntry
              onChangeText={value => setPassword(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <TouchableOpacity className="flex-row justify-end">
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={{backgroundColor: colors.button}}
          className="my-6 rounded-full p-3 shadow-sm mx-2 mb-10">
          <Text className="text-center text-white text-lg font-bold">
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

export default LoginScreen;

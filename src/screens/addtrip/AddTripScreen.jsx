import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import colors from '../../constants/colors';
import BackButton from '../../components/BackButton';
import images from '../../constants/images';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../navigations/navigationStrings';

const AddTripScreen = () => {
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const navigation = useNavigation();

  const handleAddTrip = () => {
    if (place && country) {
      navigation.navigate(navigationStrings.HOME_SCREEN);
    }
  };

  return (
    <ScreenContainer>
      <View className="flex justify-between h-full mx-4">
        <View className="relative">
          <View className="absolute top-0 left-0 flex-row items-center">
            <BackButton />
            <Text
              className={`${colors.heading} text-xl font-bold text-center flex-1`}>
              Add Trip
            </Text>
          </View>

          <View className="flex-row justify-center items-center mt-5">
            <Image className="h-72 w-72" source={images.four} />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>
              Where On Earth?
            </Text>
            <TextInput
              placeholder="Place"
              value={place}
              onChangeText={value => setPlace(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              Where On Earth?
            </Text>
            <TextInput
              placeholder="Country"
              value={country}
              onChangeText={value => setCountry(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleAddTrip}
            style={{backgroundColor: colors.button}}
            className="my-6 rounded-full p-3 shadow-sm mx-2">
            <Text className="text-center text-white text-lg font-bold">
              Add Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default AddTripScreen;

import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import styles from './styles'; // Ensure styles are correctly defined
import images, {randomImage} from '../../constants/images';
import EmptyList from '../../components/EmptyList';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../navigations/navigationStrings';

const items = [
  {id: '1', place: 'Gujrat', country: 'India'},
  {id: '2', place: 'London Eye', country: 'England'},
  {id: '3', place: 'Washington DC', country: 'America'},
  {id: '4', place: 'New York', country: 'America'},
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSelectTrip = item => {
    // Navigate to the correct screen with place and country
    navigation.navigate(navigationStrings.TRIP_EXPENSE_SCREEN, {
      place: item.place,
      country: item.country,
    });
  };

  return (
    <ScreenContainer>
      <View className="flex-row justify-between items-center p-4">
        <Text style={styles.heading}>Expensify</Text>
        <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          resizeMode="contain"
          source={images.banner}
          style={{width: '100%', height: 250}}
        />
      </View>
      <View className="px-4">
        <View className="flex-row justify-between items-center mb-4">
          <Text style={[styles.heading, {fontSize: 20, fontWeight: 'bold'}]}>
            Recent Trips
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navigationStrings.ADD_TRIP_SCREEN, {});
            }}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text style={styles.logout}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={items}
            numColumns={2}
            ListEmptyComponent={
              <EmptyList message={"You don't have any trip yet"} />
            }
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View className="w-1/2 p-2">
                <TouchableOpacity
                  onPress={() => handleSelectTrip(item)}
                  className="bg-white p-3 rounded-2xl shadow-sm ">
                  <Image source={randomImage()} className="w-40 h-40 " />
                  <Text
                    style={[
                      styles.itemText,
                      {fontWeight: 'bold', marginVertical: 4},
                    ]}>
                    {item.place}
                  </Text>
                  <Text style={styles.itemText}>{item.country}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;

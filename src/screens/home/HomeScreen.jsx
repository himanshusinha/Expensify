import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
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
    navigation.navigate(navigationStrings.TRIP_EXPENSE_SCREEN, {
      place: item.place,
      country: item.country,
    });
  };

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Text style={styles.heading}>Expensify</Text>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          resizeMode="contain"
          source={images.banner}
          style={styles.bannerImage}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.recentTripsHeader}>
          <Text style={styles.recentTripsHeading}>Recent Trips</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navigationStrings.ADD_TRIP_SCREEN);
            }}
            style={styles.addTripButton}>
            <Text style={styles.logout}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          numColumns={2}
          ListEmptyComponent={
            <EmptyList message={"You don't have any trip yet"} />
          }
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.tripCardContainer}>
              <TouchableOpacity
                onPress={() => handleSelectTrip(item)}
                style={styles.tripCard}>
                <Image source={randomImage()} style={styles.tripImage} />
                <Text style={styles.tripPlace}>{item.place}</Text>
                <Text style={styles.tripCountry}>{item.country}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 8,
    backgroundColor: 'white',
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 50,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BFDBFE',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: 170,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  recentTripsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  recentTripsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addTripButton: {
    padding: 8,
    backgroundColor: 'white',
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 50,
  },
  tripCardContainer: {
    width: '50%',
    padding: 4,
  },
  tripCard: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  tripImage: {
    width: 160,
    height: 160,
  },
  tripPlace: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  tripCountry: {
    color: '#6B7280', // gray-600
  },
});

export default HomeScreen;

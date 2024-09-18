import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import BackButton from '../../components/BackButton';
import colors from '../../constants/colors';
import images from '../../constants/images';
import styles from './styles';
import ExpenseCard from '../../components/ExpenseCard';
import EmptyList from '../../components/EmptyList';
import {useNavigation, useRoute} from '@react-navigation/native';
import navigationStrings from '../../navigations/navigationStrings';

const items = [
  {
    id: 1,
    title: 'ate sandwich',
    amount: 4,
    category: 'food',
  },
  {
    id: 2,
    title: 'bought a jacket',
    amount: 50,
    category: 'shopping',
  },
  {
    id: 3,
    title: 'watched a movie',
    amount: 100,
    category: 'entertainment',
  },
];

const TripExpenseScreen = () => {
  const route = useRoute();
  const {place, country} = route.params || {};
  const navigation = useNavigation();
  return (
    <ScreenContainer className="flex-1">
      <View className="flex-row justify-center items-center mx-4">
        <BackButton />
        <View className="flex-1">
          <Text className={`${colors.heading}  text-xl font-bold text-center `}>
            {place}
          </Text>
          <Text
            className={`${colors.heading}  text-xs font-bold text-center mx-4`}>
            {country}
          </Text>
        </View>
      </View>
      <Image
        resizeMode="contain"
        source={images.seven}
        style={{width: '100%', height: 250}}
      />
      <View className="flex-row justify-between items-center mb-4 mx-4">
        <Text style={[styles.heading, {fontSize: 20, fontWeight: 'bold'}]}>
          Expenses
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(navigationStrings.ADD_EXPENSE_SCREEN);
          }}
          className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text style={styles.logout}>Add Expense</Text>
        </TouchableOpacity>
      </View>
      <View className="mx-4">
        <FlatList
          data={items}
          ListEmptyComponent={
            <EmptyList message={"You don't have any expenses yet"} />
          }
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ExpenseCard
              onPress={() =>
                navigation.navigate(navigationStrings.ADD_EXPENSE_SCREEN)
              }
              item={item}
            />
          )}
        />
      </View>
    </ScreenContainer>
  );
};

export default TripExpenseScreen;

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
import BackButton from '../../components/BackButton';
import colors from '../../constants/colors';
import images from '../../constants/images';
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
    <ScreenContainer style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <View style={styles.titleContainer}>
          <Text style={styles.placeText}>{place}</Text>
          <Text style={styles.countryText}>{country}</Text>
        </View>
      </View>
      <Image resizeMode="contain" source={images.seven} style={styles.image} />
      <View style={styles.expensesHeader}>
        <Text style={styles.expensesTitle}>Expenses</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(navigationStrings.ADD_EXPENSE_SCREEN)
          }
          style={styles.addExpenseButton}>
          <Text style={styles.addExpenseText}>Add Expense</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.expenseListContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  titleContainer: {
    flex: 1,
  },
  placeText: {
    color: colors.heading,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countryText: {
    color: colors.heading,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 250,
  },
  expensesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  expensesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addExpenseButton: {
    padding: 8,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 50,
  },
  addExpenseText: {
    color: colors.logout,
  },
  expenseListContainer: {
    marginHorizontal: 16,
  },
});

export default TripExpenseScreen;

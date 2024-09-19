import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import BackButton from '../../components/BackButton';
import colors from '../../constants/colors';
import images from '../../constants/images';
import ExpenseCard from '../../components/ExpenseCard';
import EmptyList from '../../components/EmptyList';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import navigationStrings from '../../navigations/navigationStrings';
import Loading from '../../components/Loading';
import {expensesRef} from '../../config/firebaseConfig';
import {getDocs, query, where} from 'firebase/firestore';
import {useSelector} from 'react-redux';

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
  const {user} = useSelector(state => state.user);
  const {id, place, country} = route.params || {id: null};
  const [loading, setLoading] = useState(false);
  const [expenses, setExpenses] = useState([]);
  console.log('Expense Screen ID:', id); // Verify id is defined
  const isFocused = useIsFocused();

  const fetchExpenses = async () => {
    const q = query(expensesRef, where('tripId', '==', id));
    const querySnapShot = await getDocs(q);
    let data = [];
    querySnapShot.forEach(doc => {
      data.push({...doc.data(), id: doc.id});
      setExpenses(data);
    });
  };

  useEffect(() => {
    if (isFocused) fetchExpenses();
  }, [isFocused]);

  const handleAddExpense = async () => {
    if (title && amount && category && id) {
      // Check for id here
      setLoading(true);
      try {
        let doc = await addDoc(expensesRef, {
          title,
          amount,
          category,
          tripId: id,
        });
        setLoading(false);
        if (doc && doc.id) {
          navigation.goBack();
        }
      } catch (error) {
        setLoading(false);
        Snackbar.show({
          text: 'Error adding expense. Please try again.',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    } else {
      Snackbar.show({
        text: 'Title, Amount, Category, and Trip ID are required',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };
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
        {loading ? (
          <Loading />
        ) : (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(navigationStrings.ADD_EXPENSE_SCREEN, {
                id,
                place,
                country,
              })
            }
            style={styles.addExpenseButton}>
            <Text style={styles.addExpenseText}>Add Expense</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.expenseListContainer}>
        <FlatList
          data={expenses}
          ListEmptyComponent={
            <EmptyList message={"You don't have any expenses yet"} />
          }
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ExpenseCard onPress={handleAddExpense} item={item} />
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

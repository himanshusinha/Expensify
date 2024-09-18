import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import colors from '../../constants/colors';
import BackButton from '../../components/BackButton';
import images from '../../constants/images';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../navigations/navigationStrings';
import Snackbar from 'react-native-snackbar';
import {categories} from '../../constants/list';

const AddExpenseScreen = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  const handleAddTrip = () => {
    if (title && amount && category) {
      navigation.navigate(navigationStrings.HOME_SCREEN);
    } else {
      Snackbar.show({
        text: 'Title,Amount and Category are required',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };

  return (
    <ScreenContainer style={styles.container}>
      <View>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.title}>Add Expense</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={images.four} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>For What?</Text>
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />
          <Text style={styles.label}>How Much?</Text>
          <TextInput
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
            style={styles.input}
          />
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.label}>Category</Text>
          <View style={styles.categoryButtons}>
            {categories.map(cat => {
              const bgColor = cat.value === category ? colors.button : 'white';
              const bgTextColor = cat.value === category ? 'white' : null;
              return (
                <TouchableOpacity
                  onPress={() => setCategory(cat.value)}
                  key={cat.value}
                  style={[styles.categoryButton, {backgroundColor: bgColor}]}>
                  <Text style={[styles.buttonText, {color: bgTextColor}]}>
                    {cat.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <TouchableOpacity onPress={handleAddTrip} style={styles.buttonSubmit}>
          <Text style={styles.buttonSubmitText}>Add Expense</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  header: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  title: {
    color: colors.heading,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    height: 180,
    width: 180,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  label: {
    color: colors.heading,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 50,
    marginBottom: 12,
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.button,
    borderRadius: 50,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 8,
    top: 280,
    marginHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginHorizontal: 20,
  },
  categoryButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  categoryButton: {
    borderRadius: 50,
    padding: 10,
    marginBottom: 8,
    marginRight: 8,
  },
  buttonSubmit: {
    backgroundColor: colors.button,
    borderRadius: 50,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 8,
    marginHorizontal: 20,
    top: 190,
  },
  buttonSubmitText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default AddExpenseScreen;

import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import colors from '../../constants/colors';
import BackButton from '../../components/BackButton';
import images from '../../constants/images';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../navigations/navigationStrings';
import {categories} from '../../constants/list';

const AddExpenseScreen = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const handleAddExpense = () => {
    if (title && amount && category) {
      navigation.goBack();
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
              Add Expense
            </Text>
          </View>

          <View className="flex-row justify-center items-center mt-5">
            <Image
              className="h-72 w-72"
              source={require('../../assets/images/expenseBanner.png')}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>
              For What?
            </Text>
            <TextInput
              placeholder="Title"
              value={title}
              onChangeText={value => setTitle(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              How Much?
            </Text>
            <TextInput
              placeholder="Amount"
              value={amount}
              onChangeText={value => setAmount(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
          <View className="mx-2 space-x-2">
            <Text className="text-lg font-bold">Category</Text>
            <View className="flex-row flex-wrap items-center">
              {categories.map(cat => {
                let bgColor = 'bg-white';
                if (cat.value == category) bgColor = 'bg-green-200';
                return (
                  <TouchableOpacity
                    onPress={() => setCategory(cat.value)}
                    key={cat.value}
                    className={`rounded-full ${bgColor} px-4 p-3 mb-2 mr-2`}>
                    <Text>{cat.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleAddExpense}
            style={{backgroundColor: colors.button}}
            className="my-6 rounded-full p-3 shadow-sm mx-2">
            <Text className="text-center text-white text-lg font-bold">
              Add Expense
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default AddExpenseScreen;

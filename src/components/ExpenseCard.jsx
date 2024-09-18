import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import colors, {categoryBG} from '../constants/colors';

const ExpenseCard = ({item}) => {
  return (
    <View
      style={{backgroundColor: categoryBG[item.category]}}
      className="flex-row justify-between items-center mb-3 p-3 px-5  border border-gray-200 rounded-2xl">
      <View style={{flex: 1}}>
        <Text className={`${colors.heading} font-bold`}>{item.title}</Text>
        <Text className={`${colors.heading} text-xs`}>{item.category}</Text>
      </View>
      <View>
        <Text>$ {item.amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;

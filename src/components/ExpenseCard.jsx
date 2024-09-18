import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors, {categoryBG} from '../constants/colors';

const ExpenseCard = ({item}) => {
  return (
    <View style={[styles.card, {backgroundColor: categoryBG[item.category]}]}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
      <View>
        <Text style={styles.amount}>$ {item.amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    padding: 12,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    color: colors.heading,
    fontWeight: 'bold',
  },
  category: {
    color: colors.heading,
    fontSize: 12,
  },
  amount: {
    // Add any specific styles for amount if needed
    fontSize: 12,
  },
});

export default ExpenseCard;

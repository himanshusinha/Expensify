import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../navigations/navigationStrings';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenContainer style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/welcome.gif')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Expensify</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.LOGIN_SCREEN)}
            style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.SIGNUP_SCREEN)}
            style={[styles.button, styles.buttonMargin]}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  textContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32, // Adjusted for larger title
    color: colors.heading,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.button,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonMargin: {
    marginTop: 10,
  },
});

export default WelcomeScreen;

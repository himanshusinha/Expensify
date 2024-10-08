import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../navigations/navigationStrings';
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';
import {auth} from '../../config/firebaseConfig';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: process.env.WEB_CLIENT_ID,
    });
  }, []);

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const response = await GoogleSignin.signIn();
      console.log('Google Sign-In response:', response);

      const {idToken} = response.data;
      if (!idToken) {
        console.log('No ID token retrieved');
        return;
      }

      const googleCredentials = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(
        auth,
        googleCredentials,
      );

      console.log('User signed in: ', userCredential.user); // Log signed-in user
    } catch (error) {
      console.log('Got error:', error.message);
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            console.log('Sign in is already in progress.');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log('Play services not available.');
            break;
          default:
            console.log('Some other error happened:', error);
        }
      } else {
        console.error('An error occurred:', error);
      }
    }
  };

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

          <TouchableOpacity
            onPress={googleSignIn}
            style={[styles.googleButton, styles.buttonMargin]}>
            <View style={styles.googleContainer}>
              <Image
                style={styles.googleIcon}
                source={require('../../assets/images/googleIcon.png')}
              />
              <Text style={styles.googleText}>Sign In With Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default WelcomeScreen;

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
    fontSize: 32,
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
  googleContainer: {
    marginStart: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIcon: {
    width: 30,
    height: 30,
  },
  googleButton: {
    backgroundColor: 'white',
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
  googleText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 0.9,
    marginEnd: 40,
  },
});

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import colors from '../../constants/colors';
import BackButton from '../../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../navigations/navigationStrings';
import Snackbar from 'react-native-snackbar';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {auth} from '../../config/firebaseConfig';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLoading} from '../../redux/slices/user';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between sign-up and sign-in

  const {userLoading} = useSelector(state => state?.user);
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    if (email && password) {
      try {
        dispatch(setUserLoading(true));
        if (isSignUp) {
          // Use createUserWithEmailAndPassword for sign up
          await createUserWithEmailAndPassword(auth, email, password);
          Snackbar.show({
            text: 'Sign Up Successful!',
            duration: Snackbar.LENGTH_SHORT,
          });
        } else {
          // Use signInWithEmailAndPassword for sign in
          await createUserWithEmailAndPassword(auth, email, password);
          Snackbar.show({
            text: 'Sign In Successful!',
            duration: Snackbar.LENGTH_SHORT,
          });
        }
        dispatch(setUserLoading(false));
        // Optionally navigate to the next screen
      } catch (error) {
        dispatch(setUserLoading(false));
        console.log('Error in signup/signin:', error);
        Snackbar.show({
          text: 'Please enter correct details',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    } else {
      Snackbar.show({
        text: 'Email and Password are required',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };

  return (
    <ScreenContainer style={styles.container}>
      <View>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.title}>Sign Up</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/signup.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={value => setEmail(value)}
            style={styles.input}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={value => setPassword(value)}
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          {userLoading ? (
            <Loading />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    color: colors.heading,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 0.93,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    height: 240,
    width: 240,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  label: {
    color: colors.heading,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.button,
    borderRadius: 50,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    top: 150,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;

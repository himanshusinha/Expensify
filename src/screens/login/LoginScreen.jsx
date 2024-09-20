import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import BackButton from '../../components/BackButton';
import Snackbar from 'react-native-snackbar';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config/firebaseConfig';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../components/Loading';
import {setUserLoading} from '../../redux/slices/user';
import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {userLoading} = useSelector(state => state?.user);
  const [isSignUp, setIsSignUp] = useState(true);

  const dispatch = useDispatch();
  const handleSubmit = async () => {
    if (email && password) {
      try {
        dispatch(setUserLoading(true));
        if (isSignUp) {
          await signInWithEmailAndPassword(auth, email, password);
          Snackbar.show({
            text: 'Sign In Successful!',
            duration: Snackbar.LENGTH_SHORT,
          });
        } else {
          await signInWithEmailAndPassword(auth, email, password);
          Snackbar.show({
            text: 'Sign In Successful!',
            duration: Snackbar.LENGTH_SHORT,
          });
        }
        dispatch(setUserLoading(false));
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
          <Text style={styles.title}>Login</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/login.png')}
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
            <Text style={styles.buttonText}>Sign In</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

export default LoginScreen;

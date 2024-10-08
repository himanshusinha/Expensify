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
import Snackbar from 'react-native-snackbar';
import Loading from '../../components/Loading';
import {useSelector} from 'react-redux';
import {addDoc} from 'firebase/firestore';
import {tripRef} from '../../config/firebaseConfig';

const AddTripScreen = () => {
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {user} = useSelector(state => state?.user);
  const handleAddTrip = async () => {
    if (place && country) {
      setLoading(true);
      let doc = await addDoc(tripRef, {
        place,
        country,
        userId: user.uid,
      });
      setLoading(false);
      if (doc && doc.id) {
        navigation.goBack();
      }
    } else {
      Snackbar.show({
        text: 'Place and Country are required',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };

  return (
    <ScreenContainer style={styles.container}>
      <View>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.title}>Add Trip</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={images.four} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Where On Earth?</Text>
          <TextInput
            placeholder="Place"
            value={place}
            onChangeText={setPlace}
            style={styles.input}
          />
          <Text style={styles.label}>Where In Country?</Text>
          <TextInput
            placeholder="Country"
            value={country}
            onChangeText={setCountry}
            style={styles.input}
          />
        </View>
      </View>
      {loading ? (
        <Loading />
      ) : (
        <TouchableOpacity onPress={handleAddTrip} style={styles.button}>
          <Text style={styles.buttonText}>Add Trip</Text>
        </TouchableOpacity>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
    borderWidth: 0.5,
    borderColor: '#cfcfcf',
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddTripScreen;

import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

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
export default styles;

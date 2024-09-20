import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

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
    borderWidth: 0.5,
    borderColor: '#cfcfcf',
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

export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginHorizontal: 20,
  },
  categoryButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  categoryButton: {
    borderRadius: 50,
    padding: 10,
    marginBottom: 8,
    marginRight: 8,
  },
  buttonSubmit: {
    backgroundColor: colors.button,
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 8,
    marginHorizontal: 20,
    top: 180,
  },
  buttonSubmitText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;

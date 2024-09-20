import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  heading: {
    color: colors.heading,
    fontSize: 30,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },

  logoutButton: {
    padding: 8,
    backgroundColor: 'white',
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 50,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BFDBFE',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: 170,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  recentTripsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  recentTripsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addTripButton: {
    padding: 8,
    backgroundColor: 'white',
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 50,
  },
  tripCardContainer: {
    width: '50%',
    padding: 4,
  },
  tripCard: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  tripImage: {
    width: 130,
    height: 130,
  },
  tripPlace: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  tripCountry: {
    color: '#6B7280', // gray-600
  },
});

export default styles;

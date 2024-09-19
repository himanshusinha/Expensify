import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Ensure you're using AsyncStorage correctly
import {getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD58zG4de8ERzfDLfPjL6ri2OeJ1x0IXoA',
  authDomain: 'expensify-c3cb1.firebaseapp.com',
  projectId: 'expensify-c3cb1',
  storageBucket: 'expensify-c3cb1.appspot.com',
  messagingSenderId: '1001245530282',
  appId: '1:1001245530282:web:6bd5b407f8ac983bf198d3',
  measurementId: 'G-1BKRJXSH0M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage), // This line enables persistent authentication
});

// Firestore collections
export const tripRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

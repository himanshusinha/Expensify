// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
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
export const auth = getAuth(app);

export const tripRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

export default app;

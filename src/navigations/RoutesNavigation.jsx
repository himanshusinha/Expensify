import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../config/firebaseConfig';
import {setUser, setUserLoading} from '../redux/slices/user';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import {ActivityIndicator} from 'react-native';

const RoutesNavigation = () => {
  const dispatch = useDispatch();
  const {user, userLoading} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(setUserLoading(true)); // Set loading to true

    const unsubscribe = onAuthStateChanged(auth, u => {
      if (u) {
        const {uid, email, displayName = null} = u;
        dispatch(setUser({uid, email, displayName}));
      } else {
        dispatch(setUser(null)); // User is not authenticated
      }
      dispatch(setUserLoading(false)); // Set loading to false
    });

    return () => unsubscribe();
  }, [dispatch]);

  // Optionally handle loading state if needed
  if (userLoading) {
    return <ActivityIndicator />; // Replace with your loading component
  }

  return <>{user ? <AppNavigation /> : <AuthNavigation />}</>;
};

export default RoutesNavigation;

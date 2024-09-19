import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../config/firebaseConfig';
import {setUser, setUserLoading} from '../redux/slices/user';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import {ActivityIndicator} from 'react-native';
import {onAuthStateChanged} from 'firebase/auth';

const RoutesNavigation = () => {
  const dispatch = useDispatch();
  const {user, userLoading} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(setUserLoading(true));

    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const {uid, email, displayName = null} = user;
        dispatch(setUser({uid, email, displayName}));
      } else {
        dispatch(setUser(null));
      }
      dispatch(setUserLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (userLoading) {
    return <ActivityIndicator />;
  }

  return <>{user ? <AppNavigation /> : <AuthNavigation />}</>;
};

export default RoutesNavigation;

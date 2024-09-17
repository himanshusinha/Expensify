import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from './navigationStrings';
import * as Screens from '../screens';
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={navigationStrings.LOGIN_SCREEN}
          component={Screens.LoginScreen}
        />
        <Stack.Screen
          name={navigationStrings.SIGNUP_SCREEN}
          component={Screens.SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;

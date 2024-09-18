import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';
import navigationStrings from './navigationStrings';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={navigationStrings.WELCOME_SCREEN}
          component={Screens.WelcomeScreen}
        />
        <Stack.Screen
          options={{presentation: 'modal'}}
          name={navigationStrings.LOGIN_SCREEN}
          component={Screens.LoginScreen}
        />
        <Stack.Screen
          options={{presentation: 'modal'}}
          name={navigationStrings.SIGNUP_SCREEN}
          component={Screens.SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;

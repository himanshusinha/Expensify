import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from './navigationStrings';
import * as Screens from '../screens';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
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
        <Stack.Screen
          name={navigationStrings.HOME_SCREEN}
          component={Screens.HomeScreen}
        />
        <Stack.Screen
          name={navigationStrings.ADD_TRIP_SCREEN}
          component={Screens.AddTripScreen}
        />
        <Stack.Screen
          name={navigationStrings.ADD_EXPENSE_SCREEN}
          component={Screens.AddExpenseScreen}
        />
        <Stack.Screen
          name={navigationStrings.TRIP_EXPENSE_SCREEN}
          component={Screens.TripExpenseScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

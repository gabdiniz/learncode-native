import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from '../screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='signUp' component={SignUp} />
    </Navigator>
  );
}
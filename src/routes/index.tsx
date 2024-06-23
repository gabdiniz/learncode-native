import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

interface Props {
    isAuth: boolean;
}

export function Routes({ isAuth }: Props) {

  return (
    <NavigationContainer>
      {
        isAuth
          ?
          <AppRoutes />
          :
          <AuthRoutes />
      }
    </NavigationContainer>
  );
}
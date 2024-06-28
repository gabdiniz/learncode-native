import React from 'react';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  });

  return (
    <Background>
      <StatusBar
        style='light'
        backgroundColor='transparent'
        translucent={true}
      />
      {
        fontsLoaded &&
        <>
          <Routes isAuth={false} />
        </>
      }
    </Background>
  );
}
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation';

export default function App() {
  const [loaded] = useFonts({
    JosefinSans: require('./assets/fonts/JosefinSans-Regular.ttf'),
    JosefinSansBold: require('./assets/fonts/JosefinSans-Bold.ttf')
  });

  if(!loaded) return <AppLoading />

  return (
    <MainNavigator />
  )
}
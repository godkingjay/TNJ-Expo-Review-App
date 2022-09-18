import React , { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { globalStyles } from './assets/styles/global';
import Home from './screens/home';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from './routes/homeStack';

SplashScreen.preventAutoHideAsync();

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await getFonts();
        await new Promise(resolve => setTimeout(resolve, 2));
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    <Navigator
      onLayout={onLayoutRootView}
    />
  );
}
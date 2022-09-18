import styles from './assets/styles/global';
import Home from './screens/home';
import * as Font from 'expo-font';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

export default function App() {
  return (
    <Home />
  );
}
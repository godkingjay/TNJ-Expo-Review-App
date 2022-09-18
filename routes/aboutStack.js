import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: 'About',
    }
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#ff4040',
      height: 100,
    }
  }
});

export default AboutStack;
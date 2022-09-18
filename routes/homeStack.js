import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  Home: {
    screen: Home,
  },
  'Review Details': {
    screen: ReviewDetails,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
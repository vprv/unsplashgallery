import {createStackNavigator} from 'react-navigation';

import HomeScreen from './HomeScreen';
import ImageScreen from './ImageScreen';

import {HOME_SCREEN, IMAGE_SCREEN} from '../routes';

export default createStackNavigator({
        [HOME_SCREEN]: HomeScreen,
        [IMAGE_SCREEN]: ImageScreen,
    },
    {
        headerMode: 'none',
    },
);


import { StackNavigator } from 'react-navigation';
//import { LoginScreen, DetailScreen } from '../screens/index';
import LoginScreen from '../screens/LoginScreen';
import DetailScreen from '../screens/DetailScreen';

const RootNavigator = StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerTitle: 'Please login',
        },
    },
    Details: {
        screen: DetailScreen,
        navigationOptions: {
            headerTitle: 'All employees',
        },
    },


});

export default RootNavigator;
// Libary
import { createStackNavigator} from 'react-navigation';
import { createNavigationReducer } from 'react-navigation-redux-helpers';


// Components
// Screens
import LoginScreen from '@login/components/LoginScreen';
import ProfileScreen from '@profile/components/ProfileScreen';
import SidebarNavigator from '@navigators/components/SidebarNavigator';


// Main NavigatorReducer.js
const RootStackNavigator = createStackNavigator({

});

const NavigatorReducer = createNavigationReducer(RootStackNavigator);


export default NavigatorReducer;

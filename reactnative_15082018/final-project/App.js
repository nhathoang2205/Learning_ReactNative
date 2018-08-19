// Library
import React from 'react';
import { StyleSheet, 
    Text, 
    View, 
    Image 
} from 'react-native';
import { 
    createDrawerNavigator, 
    createBottomTabNavigator, 
    createStackNavigator 
} from 'react-navigation';
import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { 
    Provider, 
    connect 
} from 'react-redux';

import HomeScreen from './scr/screens/Home/HomeScreen';
import LoginScreen from './scr/screens/Login/LoginScreen';
import ProfileScreen from './scr/screens/Profile/ProfileScreen';

const BottomTabNav = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ focused }) => (
            focused
            ? <Image source={require('./scr/assets/home.png')} />
            : <Image source={require('./scr/assets/home.png')} />
        )
        }
    },
    Profile: { screen: ProfileScreen }
}, {
        tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
            backgroundColor: '#fff',
            height: 65
        },
        }
    }
)

const DrawerNav = createDrawerNavigator({
    BottomTab: { screen: BottomTabNav }
}, {
    contentComponent: LoginScreen
    }
)

const RootStackNav = createStackNavigator({
    Login: { screen: LoginScreen },
    Drawer: { screen: DrawerNav }
}, {
    initialRouteName: 'Drawer',
    headerMode: 'none'
    }
)

const navReducer = createNavigationReducer(RootStackNav)
const appReducer = combineReducers({
    nav: navReducer,
})

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const MainApp = reduxifyNavigator(RootStackNav, "root");

const mapStateToProps = (state) => ({
    state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(MainApp);

const store = createStore(
    appReducer,
    applyMiddleware(middleware),
);

export default class App extends React.Component {
    render() {
        return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
        );
    }
}
// Library
import React, { Component } from 'react';
import { 
    createStackNavigator,
    createBottomTabNavigator 
} from 'react-navigation';

// Compponent
import HomeScreen from '@home/components/HomeScreen.js';
import ProfileScreen from '@profile/components/ProfileScreen.js';
import Login from '@login/components/ProfileScreen.js';

const Tabs = createBottomTabNavigator({

    Home: { 
        screen: HomeScreen 
    },

    Profile: { 
        screen: ProfileScreen 
    }
});

const RootStack = createStackNavigator({

    Login: { 
        screen: Login 
    },

    Tabs: { 
        screen: Tabs 
    }
});

export default class App extends Component {

    render() {

        return (

            <RootStack />
        );
    };
};

// Library
import React, { Component } from 'react';
import { 
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator 
} from 'react-navigation';

// Compponent
import HomeScreen from '@home/components/HomeScreen.js';
import ProfileScreen from '@profile/components/ProfileScreen.js';
import Login from '@login/components/ProfileScreen.js';
import DrawerContent from '@navigation/DrawerContent.js';

const Tabs = createBottomTabNavigator({

    Home: {
        screen: HomeScreen,
        navigationOptions: {

            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => (
                focused
                ? <Image source={require('./src/assets/images/icon-home-active.png')} />
                : <Image source={require('./src/assets/images/icon-home.png')} />
            )
        }
    },

    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                focused
                ? <Image source={require('./src/assets/images/icon-activity-active.png')} />
                : <Image source={require('./src/assets/images/icon-activity.png')} />
            )
        }
    },

    }, {
        initialRouteName: 'Home',
        tabBarOptions: {
            upperCaseLabel: false,
            showIcon: true,
            showLabel: false,
            style: {

            }
        }
    }
);

const Drawer = createDrawerNavigator({

    Tabs: { 
        screen: Tabs 
    }
    }, {
        drawerWidth: width - 100,
        contentComponent: props => <DrawerContent {...props} />
    }
);

const RootStack = createStackNavigator({

    Login: {
        screen: Login,
    },

    Drawer: {
        screen: Drawer,
    }

    }, {
        initialRouteName: 'Drawer',
        headerMode: 'none'
    }
);

export default class App extends Component {

    render() {

        return (

            <View style={{ marginTop: 0, backgroundColor: '#f3f3f3', flex: 1, justifyContent: 'flex-start' }}>
                
                <RootStack />

            </View>
        );
    };
};
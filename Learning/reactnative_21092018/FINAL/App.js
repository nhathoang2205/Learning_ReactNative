// Library
import React from 'react';
import { 
  View,
} from 'react-native';
import {
  createDrawerNavigator, createBottomTabNavigator, createStackNavigator,
} from "react-navigation";

// Components
// Screens
import WellcomeScreen from '@wellcome/components/WellcomeScreen';
import LoginScreen from '@login/components/LoginScreen';
import HomeScreen from '@home/components/HomeScreen';
import ActivityScreen from '@activity/components/ActivityScreen';
import ProfileScreen from '@profile/components/ProfileScreen';
import BarcodeScanScreen from '@scan/components/BarcodeScanScreen';


// Define Navigators
// Bottom navigation
// Sidebar navigation


// Main App.js
export default class App extends React.Component {

  render() {

    return (

      <View style={{ flex: 1, }}>

        <LoginScreen />

      </View>
    );
  };
};

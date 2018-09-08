// Library

// react
import React from 'react';

// react-native
import { 
  View, StatusBar, Platform 
} from 'react-native';


// Component

// Customize 
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

// Main Status bar custom
const StatusBarCustom = (props) => {

  return (

  <View style={{ height: STATUSBAR_HEIGHT, backgroundColor: 'rgb(32, 46, 62)', }}>
    <StatusBar 
      barStyle="light-content"
    />
  </View>
  )
};


export default StatusBarCustom;

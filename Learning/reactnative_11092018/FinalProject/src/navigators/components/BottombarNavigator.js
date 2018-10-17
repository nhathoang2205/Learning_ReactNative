// Library
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';


// Components
// Screens
import HomeScreen from '@home/components/HomeScreen';
import QRSCreen from '@qrcode/components/QRSCreen';
import ActivityScreen from '@activity/components/ActivityScreen';
// Button
import homeInactiveBtn from '@assets/icons/icon-home.png';
import homeActiveBtn from '@assets/icons/icon-home-active.png';
import checkinInActiveBtn from '@assets/icons/icon-checkin.png';
import checkinActiveBtn from '@assets/icons/icon-checkin-active.png';
import activityInactiveBtn from '@assets/icons/icon-activity.png';
import activityActiveBtn from '@assets/icons/icon-activity-active.png';


// Main BottombarNavigator.js
const BottombarNavigator = createBottomTabNavigator({

  Home: {

    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ focused }) => (
        focused
          ? <Image source={homeActiveBtn} />
          : <Image source={homeInactiveBtn} />
      )
    }
  },

  QrScan: {

    screen: QRSCreen,
    navigationOptions: {
      tabBarLabel: "QRScreen",
      tabBarIcon: ({ focused }) => (
        focused
          ? <Image source={checkinActiveBtn} />
          : <Image source={checkinInActiveBtn} />
      )
    }
  },
  
  Activity: {

    screen: ActivityScreen,
    navigationOptions: {
      tabBarLabel: "ActivityScreen",
      tabBarIcon: ({ focused }) => (
        focused
          ? <Image source={activityActiveBtn} />
          : <Image source={activityInactiveBtn} />
      )
    }
  }, 
});


export default BottombarNavigator;

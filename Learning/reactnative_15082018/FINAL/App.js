// Library

// react
import React from 'react';

// react-native
import { 
  View, Text
} from 'react-native';

// react-navigation
import { 
  createDrawerNavigator, createBottomTabNavigator, createStackNavigator 
} from 'react-navigation';

// redux
import {
  createStore, applyMiddleware, combineReducers,
} from 'redux';

// react-redux
import { 
  Provider, connect 
} from 'react-redux';

// react-navigation-redux-helpers
import {
  reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer,
} from 'react-navigation-redux-helpers';

// redux-logger
import { 
  createLogger 
} from 'redux-logger';

// redux-saga
import createSagaMiddleware from 'redux-saga';


// Component

// Reducers
import mainReducer from '@reducers/mainReducer';
import filterFriendReducer from '@reducers/filterFriendReducer';

// Saga
import rootSaga from '@sagas/rootSaga';

// Screens
import ActivityScreen from '@activity/components/ActivityScreen';
import CiScreen from '@checkin/components/CiScreen';
import HomeScreen from '@home/components/HomeScreen';
import IMScreen from '@insidemerit/components/IMScreen';
import LoginScreen from '@login/components/LoginScreen';
import QRScreen from '@QRcode/components/QRScreen';
import WellcomeScreen from '@wellcome/components/WellcomeScreen';


// Main App
export default class App extends React.Component {
  
  render() {
    
    return (

      <View style={{ backgroundColor: 'red', }}>
        <Text>Go</Text>
      </View>
    )
  };
};



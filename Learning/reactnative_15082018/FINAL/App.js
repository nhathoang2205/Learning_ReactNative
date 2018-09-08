// Library

// react
import React from 'react';

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
import ActivityScreen from '@activity/ActivityScreen';
import CiScreen from '@checkin/CiScreen';
import HomeScreen from '@home/HomeScreen';
import IMScreen from '@insidemerit/IMScreen';
import LoginScreen from '@login/LoginScreen';
import QRScreen from '@QRcode/QRScreen';
import WellcomeScreen from '@wellcome/WellcomeScreen';

// Main App
export default class App extends React.Component {
  
  render() {
    
    return (

      <Provider store={store}>

        <ActivityScreen />

      </Provider>
    )
  };
};



// Library
import React from 'react';
import {
  createStore, applyMiddleware, combineReducers,
} from 'redux';
import {
  reduxifyNavigator, createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'


// Components
// Reducers
import NavigatorReducer from '@navigators/reducers/NavigatorReducer';
import filterFriendReducer from '@reducers/filterFriendReducer';
import handleObjectReducer from '@reducers/handleObjectReducer';
import handleUserReducer from '@reducers/handleUserReducer';
// Sagas
import rootSaga from '@sagas/rootSaga';
// Containers
import AppWithNavigationState from '@navigators/containers/NavigatorContainer';


// Main Appstore.js
// Reducers
const appReducer = combineReducers({

  navigators: NavigatorReducer,
  handleObject: handleObjectReducer,
  handleUser: handleUserReducer,
  filterFriend: filterFriendReducer,
})

// Sagas
const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(rootSaga);

// Store
export const store = createStore(

  appReducer,
  applyMiddleware(middleware, sagaMiddleware, createLogger()),
);

export default class Appstore extends React.Component {

  render() {

    return (

      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  };
};

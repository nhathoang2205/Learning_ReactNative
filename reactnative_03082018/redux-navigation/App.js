import {
    createStackNavigator,
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
import React from 'react';

import HomeContainer from '@home/HomeContainer';
import productsReducer from '@reducers/productsReducer';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from '@sagas/rootSaga';

const RootStatck = createStackNavigator({
    Home: HomeContainer
})

const navReducer = createNavigationReducer(RootStatck)

const rootReducers = combineReducers({
    nav: navReducer,
    products: productsReducer
})

const middleware = createReactNavigationReduxMiddleware(
    "root", 
    state => state.nav
)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducers,
    applyMiddleware(middleware, createLogger(), sagaMiddleware),
);

sagaMiddleware.run(rootSaga)

const MainApp = reduxifyNavigator(RootStatck, "root")

const mapStateToProps = (state) => ({
    state: state.nav
})

const MainAppContainer = connect(mapStateToProps)(MainApp)

export default class App extends React.Component {

    render() {
        return (
        <Provider store={store}>
            <MainAppContainer />
        </Provider>
        );
    }
};

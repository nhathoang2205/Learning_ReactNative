// Library
import {
  reduxifyNavigator, createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';


// Main NavigatorContainer.js
export const middleware = createReactNavigationReduxMiddleware(

  "root",
  state => state.navigators,
);

const mapStateToProps = (state) => ({

  state: state.navigators,
});

const MainApp = reduxifyNavigator(RootStackNav, "root");

export const AppWithNavigationState = connect(mapStateToProps)(MainApp);

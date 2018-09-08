// Library

// react-redux
import { connect } from 'react-redux';

// redux
import { bindActionCreators } from 'redux';


// Component
import LoginScreen from './../components/LoginScreen';
import { Types, Creators } from './../../../reducers/mainReducer';


mapStateToProps = (state, ownProps) => {

  return {


  }
};

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);


export default LoginContainer;

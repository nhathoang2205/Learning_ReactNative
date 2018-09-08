// Library

// react-redux
import { connect } from 'react-redux';

// redux
import { bindActionCreators } from 'redux';


// Component
import HomeScreen from './../components/HomeScreen';
import { Types, Creators } from './../../../reducers/mainReducer';


mapStateToProps = (state, ownProps) => {

  return {


  }
};

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


export default HomeContainer;

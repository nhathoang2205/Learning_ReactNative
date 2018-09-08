// Library

// react-redux
import { connect } from 'react-redux';

// redux
import { bindActionCreators } from 'redux';


// Component
import WellcomeScreen from './../components/WellcomeScreen';
import { Types, Creators } from './../../../reducers/mainReducer';


mapStateToProps = (state, ownProps) => {

  return {


  }
};

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

const WellcomeContainer = connect(mapStateToProps, mapDispatchToProps)(WellcomeScreen);


export default WellcomeContainer;

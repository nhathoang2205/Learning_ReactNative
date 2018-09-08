// Library

// react-redux
import { connect } from 'react-redux';

// redux
import { bindActionCreators } from 'redux';


// Component
import CiScreen from './../components/CiScreen';
import { Types, Creators } from './../../../reducers/mainReducer';


mapStateToProps = (state, ownProps) => {

  return {

    
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

const CiContainer = connect(mapStateToProps, mapDispatchToProps)(CiScreen);


export default CiContainer;

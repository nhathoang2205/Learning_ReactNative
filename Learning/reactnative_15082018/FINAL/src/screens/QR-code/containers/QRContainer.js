// Library

// react-redux
import { connect } from 'react-redux';

// redux
import { bindActionCreators } from 'redux';


// Component
import QRScreen from './../components/QRScreen';
import { Types, Creators } from './../../../reducers/mainReducer';


mapStateToProps = (state, ownProps) => {

  return {


  }
};

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

const QRContainer = connect(mapStateToProps, mapDispatchToProps)(QRScreen);


export default QRContainer;

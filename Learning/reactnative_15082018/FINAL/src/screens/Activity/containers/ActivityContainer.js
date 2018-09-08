// Library

// react-redux
import { connect } from 'react-redux';

// redux
import { bindActionCreators } from 'redux';


// Component
import ActivityScreen from './../components/ActivityScreen';
import { Types, Creators } from './../../../reducers/mainReducer';


mapStateToProps = (state, ownProps) => {

  return {


  }
};

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

const ActivityContainer = connect(mapStateToProps, mapDispatchToProps)(ActivityScreen);


export default ActivityContainer;

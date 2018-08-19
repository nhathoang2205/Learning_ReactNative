import { Creators } from '@reducers/productsReducer';
import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {

    return ({
        list: state.products.list,
        type: state.products.type
})}

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch)

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

export default HomeContainer;
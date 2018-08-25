import { connect } from 'react-redux';
import ListProductsScreen from './../components/ListProductsScreen.js';
import { deleteProduct, onRating } from './../../../actions/productsType.js';
import { handleOpenForm } from './../../../actions/editingProductType.js';

const mapStateToProps = (state, ownProps) => {
    
    return {
        
        listProducts: state.products.list,
        editingProduct: state.editingProduct
    };
};

const mapDispatchToProps = dispatch => ({
    
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    handleOpenForm: (product) => dispatch(handleOpenForm(product)),
    onRating: (point, id) => dispatch(onRating(point, id))
});

const ListProductsContainer = connect(mapStateToProps, mapDispatchToProps)(ListProductsScreen);

export default ListProductsContainer;
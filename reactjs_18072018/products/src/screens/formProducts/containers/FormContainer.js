import Form from './../components/Form';
import { connect } from 'react-redux';
import { closeForm, onChangeProduct } from './../../../actions/editingProductType.js';
import { editProduct } from './../../../actions/productsType.js';

const mapStateToProps = (state) => ({

    editingProduct: state.editingProduct
});

const mapDispatchToProps = (dispatch) => ({
    
    closeForm: () => dispatch(closeForm()),
    onChangeProduct: (productProperty, text) => dispatch(onChangeProduct(productProperty, text)),
    handleEdit: (product) => dispatch(editProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
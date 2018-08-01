import { combineReducers } from 'redux'
import productsReducer from './productsReducer.js'
import editingProductReducer from './editingProductReducer.js'

const reducers = combineReducers({

    products: productsReducer,
    editingProduct: editingProductReducer
});

export default reducers;
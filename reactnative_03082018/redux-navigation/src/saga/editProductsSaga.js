import { 
    put, 
    takeLatest 
} from 'redux-saga/effects';
import api from '@apiConfig/api';

function* editProduct (action) {

    try {
        const result = yield put(() => api.delete('products/' + action.id, {name: 'abc'}))
        console.log('delete ', result)
        if(result.status === 200) {
            yield put({
                type: 'EDIT_PRODUCT_SUCCESSED',
                editingProduct: result.data,
                id: action.id
            })
        } 
    } catch (error) {
        yield put({
            type: 'EDIT_PRODUCT_FAILED',
            error: error
        })
    }
}

function* editProductSaga () {
    yield takeLatest('EDIT_PRODUCT_REQUESTED', deleteProduct)
}

export default editProductSaga;


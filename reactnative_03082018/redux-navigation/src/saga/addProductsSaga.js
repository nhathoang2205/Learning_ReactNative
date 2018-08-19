import { call, 
    put, 
    takeLatest 
} from 'redux-saga/effects';
import api from '@apiConfig/api';

function* addProduct (action) {

    try {
        const result = yield call(() => api.delete('products/' + action.id))
    
        if(result.status === 200) {
            yield put({
                type: 'ADD_PRODUCT_SUCCESSED',
                id: action.id
            })
        } 
    } catch (error) {
        yield put({
            type: 'ADD_PRODUCT_FAILED',
            error: error
        })
    }
}

function* addProductSaga () {
    yield takeLatest('ADD_PRODUCT_REQUESTED', deleteProduct)
}

export default addProductSaga;
        
import { call, 
    put, 
    takeLatest 
} from 'redux-saga/effects';
import api from '@apiConfig/api';

function* deleteProduct (action) {

    try {
        const result = yield call(() => api.delete('products/' + action.id))

        if(result.status === 200) {
            yield put({
                type: 'DELETE_PRODUCT_SUCCESSED',
                id: action.id
            })
        } 
    } catch (error) {
        yield put({
            type: 'DELETE_PRODUCT_FAILED',
            error: error
        })
    }
}

function* deleteProductSaga () {
    yield takeLatest('DELETE_PRODUCT_REQUESTED', deleteProduct)
}

export default deleteProductSaga;


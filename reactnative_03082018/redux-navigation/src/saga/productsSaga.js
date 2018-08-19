import { call, 
    put, 
    takeLatest 
} from 'redux-saga/effects';
import api from '@apiConfig/api';

function* fetchProducts () {

    try {
        const result = yield call(() => api.get('products'))

        if(result.status === 200) {
            yield put({
                type: 'FETCH_PRODUCTS_SUCCESSED',
                products: result.data
            })
        }
    } catch(error) {
        yield put({
            type: 'FETCH_PRODUCTS_FAILED',
            error
        })
    }
}

function* fetchProductsSaga() {
    yield takeLatest("GET_LIST_PRODUCTS", fetchProducts);
}

export default fetchProductsSaga;
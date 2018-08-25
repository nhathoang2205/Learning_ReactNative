import { all } from 'redux-saga/effects';
import getProductsSaga from './productsSaga';
import addProductsSaga from './addProductsSaga';
import deleteProductsSaga from './deleteProductSaga';
import editProductsSaga from './editProductsSaga';

function* rootSaga () {

    yield all([
        getProductsSaga(),
        addProductsSaga(),
        deleteProductsSaga(),
        editProductsSaga()
    ])
}

export default rootSaga;
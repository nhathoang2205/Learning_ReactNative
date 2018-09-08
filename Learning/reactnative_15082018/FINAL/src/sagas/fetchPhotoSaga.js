// Library

// redux-saga
import { 
  call, put, takeLatest 
} from 'redux-saga/effects';


// Component
import api from '@apiConfig/api';


// Worker saga: will be fired on FETCH_PHOTO_REQUESTED action
function* fetchPhoto(action) {

  try {

    const result = yield call(() => api.get('photo'))

    if (result.status === 200) {

      yield put({

          type: 'FETCH_PHOTO_SUCCESSED',
          friends: result.data,
      })
    }
  }
  catch (error) {

    yield put({
      
        type: 'FETCH_PHOTO_FAILED',
        error,
    })
  }
};


// Starts fetchPhoto on each dispatched `FETCH_PHOTO_REQUESTED` action. If "FETCH_PHOTO_REQUESTED" gets dispatched while a fetch is already pending, that pending fetch is cancelled and only the latest one will be run.
function* fetchPhotoSaga() {

  yield takeLatest('FETCH_PHOTO_REQUESTED', fetchPhoto)
};


export default fetchPhotoSaga;
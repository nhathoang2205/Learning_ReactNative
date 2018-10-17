// Library
import { 
  call, put, takeLatest 
} from 'redux-saga/effects';


// Component
import api from '@apiConfig/api';


// Worker saga: will be fired on FETCH_USER_REQUESTED action
function* fetchUser(action) {

  try {

    const result = yield call(() => api.get('user'))
    
    if (result.status === 200) {

      yield put({

          type: 'FETCH_USER_SUCCESSED',
          friends: result.data,
      })
    }
  }
  catch (error) {

    yield put({
      
        type: 'FETCH_USER_FAILED',
        error,
    })
  }
};


// Starts fetchUser on each dispatched `FETCH_USER_REQUESTED` action. If "FETCH_USER_REQUESTED" gets dispatched while a fetch is already pending, that pending fetch is cancelled and only the latest one will be run.
function* fetchUserSaga() {

  yield takeLatest('FETCH_USER_REQUESTED', fetchUser)
};


export default fetchUserSaga;

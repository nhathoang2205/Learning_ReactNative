/// Library

// redux-saga
import { 
  call, put, takeLatest 
} from 'redux-saga/effects';


// Component
import api from '@apiConfig/api';


// Worker saga: will be fired on FETCH_NOTIFICATION_REQUESTED action
function* fetchNotification(action) {

  try {

    const result = yield call(() => api.get('notification'))

    if (result.status === 200) {

      yield put({

          type: 'FETCH_NOTIFICATION_SUCCESSED',
          friends: result.data,
      })
    }
  }
  catch (error) {

    yield put({
      
        type: 'FETCH_NOTIFICATION_FAILED',
        error,
    })
  }
};


// Starts fetchNotification on each dispatched `FETCH_NOTIFICATION_REQUESTED` action. If "FETCH_NOTIFICATION_REQUESTED" gets dispatched while a fetch is already pending, that pending fetch is cancelled and only the latest one will be run.
function* fetchNotificationSaga() {

  yield takeLatest('FETCH_NOTIFICATION_REQUESTED', fetchNotification)
};


export default fetchNotificationSaga;
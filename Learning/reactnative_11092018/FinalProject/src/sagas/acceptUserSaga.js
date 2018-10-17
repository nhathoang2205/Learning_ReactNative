// Library
import {
  call, put, takeLatest
} from 'redux-saga/effects';


// Component
import api from '@apiConfig/api';


// Worker saga: will be fired on ACCEPT_FRIEND_SUCCESSED action
function* acceptUser(action) {

try {

  const result = yield call(() => api.patch('friends/' + action.id, { status: 'ACTIVE', friend_date: 'mm/dd/yy' }))

  if (result.status === 200) {

    yield put({

        type: 'ACCEPT_USER_SUCCESSED',
        id: action.id,
    })
  }
  else {

    yield put({

        type: 'ACCEPT_USER_FAILED',
    })
  }
}
catch (error) {

  yield put({

      type: 'ACCEPT_USER_FAILED',
      error: error,
  })
}
};

// Starts acceptUser on each dispatched 'ACCEPT_USER_REQUESTED' action. If 'ACCEPT_USER_REQUESTED' gets dispatched while a fetch is already pending, that pending fetch is cancelled and only the latest one will be run.
function* acceptUserSaga() {

yield takeLatest('ACCEPT_USER_REQUESTED', acceptUser)
};


export default acceptUserSaga;

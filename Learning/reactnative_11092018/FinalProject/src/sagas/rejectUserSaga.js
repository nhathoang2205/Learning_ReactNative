// Library
import {
  call, put, takeLatest
} from 'redux-saga/effects';


// Component
import api from '@apiConfig/api';


// Worker saga: will be fired on REJECT_FRIEND_SUCCESSED action
function* rejectUser(action) {

  try {

    const result = yield call(() => api.patch('friends/' + action.id, { status: 'INACTIVE', reject_date: 'mm/dd/yy' }))

    if (result.status === 200) {

      yield put({

          type: 'REJECT_FRIEND_SUCCESSED',
          id: action.id,
      })
    }
    else {

      yield put({

          type: 'REJECT_FRIEND_FAILED',
      })
    }
  }
  catch (error) {

    yield put({

        type: 'REJECT_FRIEND_FAILED',
        error: error,
    })
  }
};

// Starts rejectFriend on each dispatched 'REJECT_FRIEND_REQUESTED' action. If 'REJECT_FRIEND_REQUESTED' gets dispatched while a fetch is already pending, that pending fetch is cancelled and only the latest one will be run.
function* rejectUserSaga() {

yield takeLatest('REJECT_FRIEND_REQUESTED', rejectUser)
};


export default rejectUserSaga;

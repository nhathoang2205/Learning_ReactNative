// Library

// redux-saga
import {
  call, put, takeLatest
} from 'redux-saga/effects';

// Component
import api from '@apiConfig/api';


// Worker saga: will be fired on REJECT_FRIEND_SUCCESSED action
function* rejectFriend(action) {

  try {

    const result = yield call(() => api.patch('friends/' + action.id, { status: 'REJECT', reject_date: '' }))

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

// Starts rejectFriend on each dispatched `REJECT_FRIEND_SUCCESSED` action. If "REJECT_FRIEND_SUCCESSED" gets dispatched while a fetch is already pending, that pending fetch is cancelled and only the latest one will be run.
function* rejectFriendSaga() {

yield takeLatest('REJECT_FRIEND_SUCCESSED', rejectFriend)
};


export default rejectFriendSaga;
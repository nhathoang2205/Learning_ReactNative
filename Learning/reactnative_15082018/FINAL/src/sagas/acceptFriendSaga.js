// Library

// redux-saga
import {
    call, put, takeLatest
} from 'redux-saga/effects';

// Component
import api from '@apiConfig/api';


// Worker saga: will be fired on ACCEPT_FRIEND_SUCCESSED action
function* acceptFriend(action) {

  try {

    const result = yield call(() => api.patch('friends/' + action.id, { status: 'ACTIVE', friend_date: '' }));

    if (result.status === 200) {

      yield put({

          type: 'ACCEPT_FRIEND_SUCCESSED',
          id: action.id,
      })
    }
    else {

      yield put({

          type: 'ACCEPT_FRIEND_FAILED',
      })
    }
  }
  catch (error) {

    yield put({

        type: 'ACCEPT_FRIEND_FAILED',
        error: error,
    })
  }
};

// Starts acceptFriend on each dispatched `ACCEPT_FRIEND_REQUESTED` action. If "ACCEPT_FRIEND_REQUESTED" gets dispatched while a fetch is already pending, that pending fetch is cancelled and only the latest one will be run.
function* acceptFriendSaga() {

  yield takeLatest('ACCEPT_FRIEND', acceptFriend)
};


export default acceptFriendSaga;
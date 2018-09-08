// Library

// redux-saga
import { 
    call, put, takeLatest 
} from 'redux-saga/effects';


// Component
import api from '@apiConfig/api';


// Worker saga: will be fired on FETCH_FRIEND_REQUESTED action
function* fetchFriend(action) {

  try {

    const result = yield call(() => api.get('friends'))
    
    if (result.status === 200) {
      
      yield put({

          type: 'FETCH_FRIEND_SUCCESSED',
          friends: result.data,
      })
    }
  }
  catch (error) {

    yield put({

        type: 'FETCH_FRIEND_FAILED',
        error,
    })
  }
};


// Starts fetchFriend on each dispatched `FETCH_FRIEND_REQUESTED` action. If "FETCH_FRIEND_REQUESTED" gets dispatched while a fetch is already pending, that pending fetch is cancelled and only the latest one will be run.
function* fetchFriendSaga() {

  yield takeLatest('FETCH_FRIEND_REQUESTED', fetchFriend)
};


export default fetchFriendSaga;
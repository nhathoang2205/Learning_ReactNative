// Library
import {
  all,
} from 'redux-saga/effects';


// Component
import fecthFriendSaga from '@sagas/fecthFriendSaga';
import fetchUserSaga from '@sagas/fetchUserSaga';
import fetchPhotoSaga from '@sagas/fetchPhotoSaga';
import fetchNotificationSaga from '@sagas/fetchNotificationSaga';
import acceptUserSaga from '@sagas/acceptUserSaga';
import rejectUserSaga from '@sagas/rejectUserSaga';


// Main root saga
function* rootSaga() {

  yield all([

      fecthFriendSaga(),
      fetchUserSaga(),
      fetchPhotoSaga(),
      fetchNotificationSaga(),
      acceptUserSaga(),
      rejectUserSaga(),
  ])
};


export default rootSaga;

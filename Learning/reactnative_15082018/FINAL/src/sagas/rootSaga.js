// Library

// redux-saga
import {
    all,
} from 'redux-saga/effects';


// Component
import fecthFriendSaga from './fecthFriendSaga';
import fetchUserSaga from './fetchUserSaga';
import fetchPhotoSaga from './fetchPhotoSaga';
import fetchNotificationSaga from './fetchNotificationSaga';


// Main root saga
function* rootSaga() {

    yield all([

        fecthFriendSaga(),
        fetchUserSaga(),
        fetchPhotoSaga(),
        fetchNotificationSaga(),
        acceptFriendSaga(),
        rejectFriendSaga(),
    ])
};


export default rootSaga;
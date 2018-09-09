// Library

// react
import { 
  createActions, createReducer 
} from 'reduxsauce';

// seamless-immutable
import Immutable from 'seamless-immutable';


// Main Reducers using ReduxSauce

// Determining intial state of reducer by using seamless-immutable
const INITIAL_STATE = Immutable({

  friend: [],
  user: {},
  photo: [],
  notification: [],
  type: 'INITIAL_STATE',
});

// Using createActions() to build an object which contains Types & Creators
export const { Types, Creators } = createActions({

  // fetch friend
  fetchFriendRequested: null,
  fetchFriendSuccessed: null,
  fetchFriendFailed: null,

  // fetch user
  fetchUserRequested: null,
  fetchUserSuccessed: null,
  fetchUserFailed: null,

  // fetch photo
  fetchPhotoRequested: null,
  fetchPhotoSuccessed: null,
  fetchPhotoFailed: null,

  // fetch notification
  fetchNotificationRequested: null,
  fetchNotificationSuccessed: null,
  fetchNotificationFailed: null,

  // accept friend request
  acceptFriendRequest: ['id'],
  acceptFriendSuccessed: null,
  acceptFriendFailed: null,

  // reject friend request
  rejectFriendRequest: ['id'],
  rejectFriendSuccessed: null,
  rejectFriendFailed: null,
});


// Create reducers

// fetch friend
const fetchFriendRequested = (state, action) => {

  return state.merge({

    type: action.type,
  })
};

const fetchFriendSuccessed = (state, action) => {

  return state.merge({

    friend: action.friend,
    type: action.type,
  })
};

const fetchFriendFailed = (state, action) => {

  return state.merge({

    type: action.type,
    error: action.error,
  })
};

// fecth user
const fetchUserRequested = (state, action) => {

  return state.merge({

    type: action.type,
  })
};

const fetchUserSuccessed = (state, action) => {

  return state.merge({

    user: action.user,
    type: action.type,
  })
};

const fetchUserFailed = (state, action) => {

  return state.merge({

    type: action.type,
    error: action.error,
  })
};

// fecth photo
const fetchPhotoRequested = (state, action) => {

  return state.merge({

    type: action.type,
  })
};

const fetchPhotoSuccessed = (state, action) => {

  return state.merge({

    photo: action.photo,
    type: action.type,
  })
};

const fetchPhotoFailed = (state, action) => {

  return state.merge({

    type: action.type,
    error: action.error,
  })
};

// fecth notification
const fetchNotificationRequested = (state, action) => {

  return state.merge({

    type: action.type,
  })
};

const fetchNotificationSuccessed = (state, action) => {

  return state.merge({

    notification: action.notification,
    type: action.type,
  })
};

const fetchNotificationFailed = (state, action) => {

  return state.merge({

    type: action.type,
    error: action.error,
  })
};

// accept friend request
const acceptFriendRequest = (state, action) => {
  
  return state.merge({

    type: action.type,
  })
};

const acceptFriendSuccessed = (state, action) => {


}

const acceptFriendFailed = (state, action) => {


}

// reject friend request
const rejectFriendRequest = (state, action) => {

  return state.merge({

    type: action.type,
  })
};

const rejectFriendSuccessed = (state, action) => {

  
}

const rejectFriendFailed = (state, action) => {


}


// Map action types to reducer functions
const HANDELER = {

  // fetch friend
  [Types.FETCH_FRIEND_REQUESTED]: fetchFriendRequested,
  [Types.FETCH_FRIEND_SUCCESSED]: fetchFriendSuccessed,
  [Types.FETCH_FRIEND_FAILED]: fetchFriendFailed,

  // fetch user
  [Types.FETCH_USER_REQUESTED]: fetchUserRequested,
  [Types.FETCH_USER_SUCCESSED]: fetchUserRequested,
  [Types.FETCH_USER_FAILED]: fetchUserFailed,

  // fetch photo
  [Types.FETCH_PHOTO_REQUESTED]: fetchPhotoRequested,
  [Types.FETCH_PHOTO_SUCCESSED]: fetchPhotoRequested,
  [Types.FETCH_PHOTO_FAILED]: fetchPhotoFailed,

  // fetch notification
  [Types.FETCH_NOTIFICATION_REQUESTED]: fetchNotificationRequested,
  [Types.FETCH_NOTIFICATION_SUCCESSED]: fetchNotificationSuccessed,
  [Types.FETCH_NOTIFICATION_FAILED]: fetchNotificationFailed,

  // accept friend request
  [Types.ACCEPT_FRIEND_REQUESTED]: acceptFriendRequest,
  [Types.ACCEPT_FRIEND_SUCCESSED]: acceptFriendSuccessed,
  [Types.ACCEPT_FRIEND_FAILED]: acceptFriendFailed,

  // reject friend request
  [Types.REJECT_FRIEND_SUCCESSED]: rejectFriendRequest,
  [Types.REJECT_FRIEND_SUCCESSED]: rejectFriendSuccessed,
  [Types.REJECT_FRIEND_FAILED]: rejectFriendFailed,
};

// Declutter reducers
const mainReducer = createReducer(INITIAL_STATE, HANDELER);


export default mainReducer;



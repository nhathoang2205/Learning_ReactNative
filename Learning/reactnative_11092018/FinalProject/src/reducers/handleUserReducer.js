// Library
import { 
  createActions, createReducer 
} from 'reduxsauce';
import Immutable from 'seamless-immutable';


// Main handleUserReducer.js

// Determining intial state of reducer by using seamless-immutable
const INITIAL_STATE = Immutable({

  user: {},
  type: 'INITIAL_STATE',
});

// Using createActions() to build an object which contains Types & Creators
export const { Types, Creators } = createActions({

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

// accept friend request
const acceptFriendRequest = (state, action) => {
  
  return state.merge({

    type: action.type,
  })
};

const acceptFriendSuccessed = (state, action) => {

  const index = state.friends.findIndex(friend => friend.id === action.id)

  const updateFriendStatus = state.friends[index].merge({ status: 'ACTIVE', friend_date: 'this is now' })

  const newFriendList = [...state.friends.slice(0, index), updateFriendStatus, ...state.friends.slice(index + 1)]

  return state.merge({
      friends: newFriendList,
  })
};

const acceptFriendFailed = (state, action) => {

  return state.merge({

    type: action.type,
    error: action.error,
  })
};

// reject friend request
const rejectFriendRequest = (state, action) => {

  return state.merge({

    type: action.type,
  })
};

const rejectFriendSuccessed = (state, action) => {

  const index = state.friends.findIndex(friend => friend.id === action.id)

  const updateFriendStatus = state.friends[index].merge({ status: 'INACTIVE', reject_date: 'this is date time reject' })

  const newFriendList = [...state.friends.slice(0, index), updateFriendStatus, ...state.friends.slice(index + 1)]

  return state.merge({

      friends: newFriendList,
  })
};

const rejectFriendFailed = (state, action) => {

  return state.merge({

    type: action.type,
  })
};


// Map action types to reducer functions
const HANDELER = {

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
const handleUserReducer = createReducer(INITIAL_STATE, HANDELER);


export default handleUserReducer;



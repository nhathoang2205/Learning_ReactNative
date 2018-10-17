// Library
import { 
  createActions, createReducer 
} from 'reduxsauce';
import Immutable from 'seamless-immutable';


// Main filterFriendReducer.js

// Determining intial state of reducer by using seamless-immutable
const INITIAL_STATE = Immutable({

  filterName: '',
  filterStatus: 'ACTIVE'
});

// Using createActions() to build an object which contains Types & Creators
const { Types, Creators } = createActions({

  // filter by name
  filterByName: ['name'],

  // filter by status
  filterByStatus: ['status'],
});


// Create reducers

// filter by name
const filterByName = (state, action) => {

  return state.merge({

    filterName: action.filterName,
  })
};

// filter by status
const filterByBrand = (state, action) => {

  return state.merge({

    filterStatus: action.filterStatus,
  })
};


// Map action types to reducer functions
const HANDELER = {

  // filter by name
  [Types.FILTER_BY_NAME]: filterByName,

  // filter by status
  [Types.FILTER_BY_STATUS]: filterByStatus,
};

// Declutter reducers
const filterFriendsReducer = createReducer(INITIAL_STATE, HANDELER);


export default filterFriendsReducer;

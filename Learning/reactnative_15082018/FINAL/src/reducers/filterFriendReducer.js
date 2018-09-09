// Library

// reduxsauce
import { 
  createActions, createReducer 
} from 'reduxsauce';

// seamless-immutable
import Immutable from 'seamless-immutable';


// Main Reducers using ReduxSauce

// Determining intial state of reducer by using seamless-immutable
const INIT_FILTER_STATE = Immutable({

  filterName: '',
  filterByStatus: 'ACTIVE'
});

// Using createActions() to build an object which contains Types & Creators
const { Types, Creators } = createActions({

  // filter by name
  filterByName: ['name'],

  // filter by status
  filterByStatus: ['status'],
});

export const CreatorsFilter = Creators;


// Create reducers

// filter by name
const filterByName = (state, action) => {

  return state.merge({

    filterByName: action.name,
  })
};

// filter by status
const filterByBrand = (state, action) => {

  return state.merge({

    filterByStatus: action.status,
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
const filterFriendsReducer = createReducer(INIT_FILTER_STATE, HANDELER);


export default filterFriendsReducer;

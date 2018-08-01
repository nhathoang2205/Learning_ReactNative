import { combineReducers } from 'redux';
import { todosReducer } from './todoReducer.js';
import { filterReducer } from './filterReducer.js'

export const reducers = combineReducers({

    todos: todosReducer,
    filter: filterReducer
});
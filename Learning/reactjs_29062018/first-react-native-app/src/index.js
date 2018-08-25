import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'; 
import { reducers } from './todo/reducers/main.js';
import TodosContainer from './todo/containers/TodosContainer.js';

const store = createStore(reducers);

ReactDOM.render(

    <Provider store={store}>
        <TodosContainer name={'abc'} />
    </Provider>,
    document.getElementById('root')
);


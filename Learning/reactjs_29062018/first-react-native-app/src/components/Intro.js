import React from 'react';
import './App.css';

// Stateless component: Không thao tác với this, render với UI
const Intro = (props) => {
    return (
        <div>
            <h2>Nhật Hoàng's Stand</h2>
            <h3>{props.list}</h3>
            <p className="App-intro">
            To update information, edit <code>src/App.js</code> and save to reload.
            </p>
    </div>
    );
};

export default Intro;
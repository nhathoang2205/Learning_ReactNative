import React from 'react';
import logoReact from './../logo-react.svg';
import logoRedux from './../logo-redux.svg';
import './../App.css';

const Header = () => {

    return (

        <header className="App-header">
            <img src={logoReact} className="App-logo-react" alt='logo' />
            <h1 className="App-title">Nhật Hoàng #VNMK</h1>
            <img src={logoRedux} className="App-logo-redux" alt='logo' />
        </header>
    );
}; 

export default Header;
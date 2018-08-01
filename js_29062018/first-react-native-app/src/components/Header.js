import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Stateless component: Không thao tác với this, render với UI
class Header extends Component {

    renderLogo = () => (
        <img src={logo} className="App-logo" alt='logo' />
    );

    render() {
        return (
            <header className="App-header">
                {this.renderLogo()}
                {/* <h1 className="App-title">{this.props.name}</h1> */}
                <h1 className="App-title">VietNam Mechanical Keyboard Marketplace</h1>
            </header>
        );
    };
};

export default Header;
import React, { Component } from 'react';

import HeaderNavigation from '../../navigation/HeaderNavigation';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HeaderNavigation navigation={this.props.navigation} title='HOME' />
        )
    }
}
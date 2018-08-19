// Library
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

// Component
import Header from '@common/Header.js';
import ButtonCustom from '@common/ButtonCustom.js';
import HeaderNavigation from '@navigation/HeaderNavigation.js';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
    };

    render() {

        return (

        <View style={styles.container}>

            <Header />

            <HeaderNavigation navigation={this.props.navigation} title='HOME'/>

            <Text>HOME SCREEN</Text>

            <ButtonCustom 
                name='Go to profile'
                onPress={() => this.props.navigation.navigate('Profile')} 
            />
            
        </View>
        );
    };
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
});
// Library
import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

// Component
import Header from '@common/Header.js';
import ButtonCustom from '@common/ButtonCustom.js';

export default class HomeScreen extends Component {

    render() {

        return (

        <View style={styles.container}>

            <Header />
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
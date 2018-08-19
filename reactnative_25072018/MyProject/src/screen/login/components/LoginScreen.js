// Library
import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

// Component
import ButtonCustom from '@common/ButtonCustom.js';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props)
    };

    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'LOGIN'
        return {
            headerTitle
    
        };
    };

    render() {

        const { navigation } = this.props;

        return (
    
            <View>

                <Text>LOGIN</Text>

                <ButtonCustom name="GO TO HOME" onPress={() => this.props.navigation.navigate('Tabs')} />
                
            </View>
        );
    };
};



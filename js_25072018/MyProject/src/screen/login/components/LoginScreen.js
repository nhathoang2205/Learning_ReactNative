// Library
import React from 'react';
import {
    View,
    Text,
} from 'react-native';

// Component
import ButtonCustom from '@common/ButtonCustom';

const LoginScreen = (props) => {

    return (
    
        <View>

            <Text>LOGIN</Text>

            <ButtonCustom name="GO TO HOME" onPress={() => this.props.navigation.navigate('Tabs')} />
            
        </View>
    );
};

export default LoginScreen;

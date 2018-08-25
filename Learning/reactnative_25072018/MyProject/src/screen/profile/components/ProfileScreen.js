// Library
import React from 'react';
import {
    View,
    Text,
} from 'react-native';

// Component
import ButtonCustom from '@common/ButtonCustom.js';

const ProfileScreen = (props) => {

    return (

        <View>

            <Text>PROFILE SCREEN</Text>

            <ButtonCustom name='BACK' onPress={() => this.props.navigation.navigate('Home')} />

        </View>
    );
};

export default ProfileScreen;
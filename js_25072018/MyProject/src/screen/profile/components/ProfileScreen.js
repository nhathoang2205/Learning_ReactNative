// Library
import React from 'react';
import {
    View,
    Text,
} from 'react-native';

// Component
import ButtonCustom from '@common/ButtonCustom';

const ProfileScreen = (props) => {

    return (

        <View>

            <Text>Profile screen </Text>

            <ButtonCustom name='BACK' onPress={() => this.props.navigation.navigate('Home')} />

        </View>
    );
};

export default ProfileScreen;
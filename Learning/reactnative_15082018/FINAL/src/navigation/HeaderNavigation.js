// Library
import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, StatusBar, Platform 
} from 'react-native';

// Component
// Button
import sidebarBtn from '@assets/icon/Hamburger.png';

// Customize header
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

// Main Header Navigation
const HeaderNavigation = (props) => {

    return (

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: STATUSBAR_HEIGHT, height: 65 + STATUSBAR_HEIGHT, backgroundColor: '#202E3E', }}>

            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <View style={{ paddingLeft: 20 }}>
                    <Image 
                        source={sidebarBtn} 
                    />
                </View>
            </TouchableOpacity>

            <View>
                <Text style={{ fontSize: 17, color: '#fff', }}>{props.title}</Text>
            </View>

        </View>
    )
};

export default HeaderNavigation;
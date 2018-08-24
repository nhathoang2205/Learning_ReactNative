// Library
import React from 'react';
import { 
    View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, Platform 
} from 'react-native';

// Component

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

// Main Header Navigation
const HeaderNavigation = (props) => {

    return (
        <View style={styles.wrapHeader} >
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <View style={styles.drawerBtn}>
                    <Image source={hamburgerBtn} style={styles.imageLogo} />
                </View>
            </TouchableOpacity>
            <View>
                <Text style={styles.titleText}>{props.title}</Text>
            </View>
            <View></View>
        </View>
    )
}

// Style Header Navigation
const styles = StyleSheet.create({
    wrapHeader: {
        backgroundColor: '#202E3E',
        height: 65 + STATUSBAR_HEIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: STATUSBAR_HEIGHT,
    },
    drawerBtn: {
        paddingLeft: 20
    },
    titleText: {
        color: '#fff',
        fontSize: 17,
    }
});

export default HeaderNavigation;
// Library
import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image 
} from 'react-native';

// Components
import CustomBtn from '@assets/images/images/Hamburger.png';

const HeaderNavigation = (props) => {

    return (
        
        <View style={styles.wrapHeader} >

        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <View style={styles.drawerBtn}>
                <Image source={CustomBtn} style={styles.imageLogo} />
            </View>
        </TouchableOpacity>

        <Text style={styles.textTitle}>{props.title}</Text>

        </View>
    );
};

export default HeaderNavigation;

const styles = StyleSheet.create({
    
    wrapHeader: {
        backgroundColor: 'orange',
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    drawerBtn: {
        paddingLeft: 20
    },
    textTitle: {
        fontSize: 20,
        color: "#fff"
    }
});
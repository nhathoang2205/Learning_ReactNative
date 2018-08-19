// Library
import React from 'react';
import { 
    View, 
    TouchableWithoutFeedback, 
    Text, 
    StyleSheet 
} from 'react-native';

// Component
import SearchInput from './SearchInput.js';

const Header = (props) => {

    return(

        <View style={styles.header}>

            <SearchInput />

            <TouchableWithoutFeedback onPress={props.onPressClose}>
                <View>
                    <Text style={styles.closeBtn}>Close</Text>
                </View>
            </TouchableWithoutFeedback>

        </View>
    );
};

const styles = StyleSheet.create({

    header: {
        backgroundColor: '#02737B',
        paddingTop: 30,
        paddingHorizontal: 15,
        paddingBottom:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 5
    },

    closeBtn: {
        color: '#fff',
        fontSize: 16,
        paddingLeft: 10
    }
})

export default Header;
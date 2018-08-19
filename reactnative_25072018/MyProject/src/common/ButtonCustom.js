// Library
import React from 'react';
import { 
    TouchableWithoutFeedback, 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';

const ButtonCustom = (props) => {

    return(

        <TouchableWithoutFeedback onPress={props.onPress}>

            <View style={styles.wraperBtn}>
                <Text style={styles.nameBtn}>{props.name}</Text>
            </View>

        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({

    wraperBtn: {
        justifyContent: 'flex-start',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 3,
        borderColor: '#777',
        flex: 0
    },
    
    nameBtn: {
        borderRadius: 3,
        borderColor: '#777',
        backgroundColor: '#fff',
        borderWidth: 1,
        padding: 5,
        color: '#777',
        fontSize: 16,
        flex: 0
    }
})

export default ButtonCustom;
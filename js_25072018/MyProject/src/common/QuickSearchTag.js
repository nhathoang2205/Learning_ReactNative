// Library
import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';

// Component
import ButtonCustom from './ButtonCustom.js';

const Tag = (props) => {

    return (
        <View style={styles.wrapper}>

            <Text style={styles.text}>Quick Search: </Text>

            <View style={styles.allTag}>

                <ButtonCustom name="tinh uy" />
                <ButtonCustom name="ba me viet nam anh hung" />
                <ButtonCustom name="tai nan" />
                <ButtonCustom name="cho biet" />
                <ButtonCustom name="Vu Thanh Long" />

            </View>

        </View >
    );
}
const styles = StyleSheet.create({

    wrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#fff',
        elevation: 5

    },

    text: {
        fontSize: 20,
    },

    allTag: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
});

export default Tag;

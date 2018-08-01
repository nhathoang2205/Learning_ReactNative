// Library
import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';

// Component
import ButtonCustom from './ButtonCustom.js';
import News from './News.js';

const ListNews = (props) => {

    return (

        <View style={styles.container}>

            <Text style={styles.Text}>Hot 24h:</Text>
            <News />
            <News />
            <News />
            <ButtonCustom name="Read More" />

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        padding: 10,
        elevation: 5,
    },
    
    Text: {
        fontSize: 20,
    }
});

export default ListNews;

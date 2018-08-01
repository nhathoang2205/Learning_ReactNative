// LIbrary
import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Image 
} from 'react-native';

// Component
import img1 from '../assets/imgNews/1.jpg';
import img2 from '../assets/imgNews/2.jpg';
import img3 from '../assets/imgNews/3.jpg';

const News = (props) => {

    return (
        <View style={styles.container} >

            <Image source={img1} style={styles.imgStyle} />

            <View style={styles.info}>

                <Text style={styles.title}>This is react native title of News.js</Text>

                <View style={{ flexDirection: 'row', }}>

                    <Text style={{ color: 'lightseagreen', fontSize: 15, marginRight: 10 }}>Zing</Text>
                    <Text style={{ fontSize: 15, marginRight: 15 }}>*   15 hours  *</Text>
                    <Text style={{ fontSize: 15, marginRight: 15 }}>757</Text>

                </View>

            </View>

        </View>
    );

};
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 0.5,
        borderColor: 'grey',
    },

    imgStyle: {
        width: 100, height: 100,
        flex: 0
    },

    info: {
        flexDirection: 'column',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        // backgroundColor: 'green',
        flex: 1,
    },

    title: {
        fontSize: 17,
        flex: 1
    }
});

export default News;

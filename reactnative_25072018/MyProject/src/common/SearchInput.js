// Library
import React from 'react';
import { 
    Image, 
    View, 
    TextInput, 
    StyleSheet 
} from 'react-native';

// Component
import iconSearch from '@assets/images/icon-black-search.png';

const SearchInput = (props) => (

    <View style={styles.wrapper}>
        <Image source={iconSearch} />
        <TextInput 
        placeholder='Search' 
        style={styles.textInput}
        value={props.value}
        onChangeText={(text) => props.onSearch(text)}
        />
    </View>
);

const styles = StyleSheet.create({

    wrapper: {
        flexDirection: 'row', 
        backgroundColor: '#00B388', 
        padding: 5, 
        borderRadius: 5, 
        alignItems: 'center',
        flex: 1
    },

    textInput: {
        paddingLeft: 10, 
        color: '#fff',
        flex: 1
    }
});

export default SearchInput;
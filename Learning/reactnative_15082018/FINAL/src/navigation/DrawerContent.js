// Libraty
import React from 'react';
import { 
    View, Text 
} from 'react-native';

// Main Drawer Content
const DrawerContent = (props) => {

    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 16 }}>Name: </Text>
            <Text style={{ fontSize: 20 }}>Your name</Text>
        </View>
    )
}

export default DrawerContent;
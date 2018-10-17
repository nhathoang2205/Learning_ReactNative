// Library
import React from 'react';
import {
  View, StatusBar, TouchableOpacity, Image, 
} from 'react-native';


// Component
// Pictures
import WellcomeLogo from '@assets/pictures/group.png';


// Main WellcomeScreen.js
const WellcomeScreen = () => {

  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(55, 78, 105)', }}>

        <StatusBar hidden={true} />

        <TouchableOpacity style={{ flex: 1/3, }} onPress={() => {this.props.openLoginScreen}}>
          {/* RENDER: Wellcome logo*/}
          <Image
              source={WellcomeLogo}
          />
        </TouchableOpacity>
    </View>
  );
};


export default WellcomeScreen;


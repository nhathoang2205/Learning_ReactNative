// Library
import React from 'react';
import { 
  View, Image, TouchableOpacity, StatusBar,
} from 'react-native';


// Component
// Button
import wellcomeBtn from '@assets/pictures/group.png';


// Main WellcomeScreen.js
export default class WellcomeScreen extends React.Component {

  render() {
    
    return (

      <View style={{ flex: 1, justifyContent:'center', alignItems: 'center', backgroundColor: 'rgb(55, 78, 105)', }}>
        <StatusBar hidden={true} />
        <TouchableOpacity 
          style={{ flex: 1/3, }}
          
          onPress={() => {this.props.openLoginScreen}}>
          {/* RENDER: Wellcome logo*/}
          <Image
              source={wellcomeBtn}
          />
        </TouchableOpacity>
      </View>
    )
  };
};


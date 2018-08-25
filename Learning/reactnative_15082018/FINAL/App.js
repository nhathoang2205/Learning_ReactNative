// Library
import React from 'react';
import { 
  View, Image, TouchableOpacity,
} from 'react-native';

// Component
// Button
import logoBtn from '@assets/wellcome/group.png';

// Main App
export default class App extends React.Component {
  
  render() {
    
    return (

      <View style={{flex: 1, justifyContent:'center', alignItems: 'center', backgroundColor: 'rgb(55, 78, 105)', }}>
        <TouchableOpacity style={{ flex: 1/3, }}>
          {/* RENDER: Wellcome logo*/}
          <Image
              source={logoBtn}
          />
        </TouchableOpacity>
      </View>
    )
  };
};

// Library

// react
import React from 'react';

// react-native
import { 
  View, Image, TouchableOpacity
} from 'react-native';


// Component

// Screen
import HeaderNavigation from '@navigation/HeaderNavigation';
import FooterNavigation from '@navigation/FooterNavigation'


// Main Activity Screen
export default class ActivityScreen extends React.Component {

  constructor(props) {

    super(props)
  }
  
  render() {
    
    return (

      <View style={{ flex: 1, }}>

        {/* RENDER: Activity header */}
        <HeaderNavigation
          style={{ flex: 1, }}
          title='ACTIVITY' 
        />

        {/* RENDER: Activity list */}


        {/* RENDER: Navigation bar */}
      
      </View>
    )
  };
};

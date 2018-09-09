// Library

// react
import React from 'react';

// react-native
import { 
  View, Text, TouchableOpacity, Image, Platform 
} from 'react-native';


// Component

// Screens
import StatusBarCustom from '@navigation/components/StatusBarCustom';

// Button
import sidebarBtn from '@assets/icon/Hamburger.png';

// Customize
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

// Main Header Navigation
const HeaderNavigation = (props) => {

  return (

    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'rgb(32, 46, 62)', }}>

      {/* RENDER: Status bar */}
      <StatusBarCustom />

      <View style={{ height: APPBAR_HEIGHT, backgroundColor: 'rgb(32, 46, 62)' }}>

        {/* RENDER: Sidebar logo */}
        <View style={{ backgroundColor: 'red', }}>
          <TouchableOpacity onPress={props.openSidebar}>
            <Image 
              source={sidebarBtn} 
            />
          </TouchableOpacity>
        </View>

        {/* RENDER: Header */}
        <View style={{ backgroundColor: 'green', }}>
          <Text style={{ fontSize: 18, color: '#rgb(255, 255, 255)', }}>{props.title}</Text>
        </View>
      
      </View>

    </View>
  )
};


export default HeaderNavigation;


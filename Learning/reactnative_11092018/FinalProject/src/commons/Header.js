// Library
import React from 'react';
import { 
  View, Text, TouchableOpacity, Image, Platform, StatusBar 
} from 'react-native';


// Component
// Button
import sidebarBtn from '@assets/icons/Hamburger.png';
// Customize
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;
const HEADER_HEIGHT = STATUSBAR_HEIGHT * 2;

// Main Header.js
const Header = (props) => {

  return (

    <View style={{ backgroundColor: 'rgb(32, 46, 62)', }}>

      {/* RENDER: Status bar */}
      <View style={{ height:STATUSBAR_HEIGHT, }}>
        <StatusBar barStyle="light-content" />
      </View>

      {/* RENDER: Header content */}
      <View style={{ flexDirection: 'row', height: HEADER_HEIGHT, }}>

        {
          props.showSidebarLogo
          ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
              <TouchableOpacity onPress={props.openSidebar}>
                <Image 
                  source={sidebarBtn} 
                />
              </TouchableOpacity>
            </View>
          : <View style={{ flex:1, }}></View>
        }

        <View style={{ flex: 4, justifyContent: 'center', }}>
          <Text style={{ fontSize: 18, color: '#rgb(255, 255, 255)', }}>{props.title}</Text>
        </View>

      </View>

    </View>
  )
};


export default Header;


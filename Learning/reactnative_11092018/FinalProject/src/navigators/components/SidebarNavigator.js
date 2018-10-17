// Library
import React from 'react';
import { 
    View, Text, Image, TouchableOpacity
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

// Component
// Screens
import ProfileScreen from '@profile/components/ProfileScreen';
// Button
import settingBtn from '@assets/icons/settings.png';
import helpBtn from '@assets/icons/help.png';


// Main SidebarNavigator.js
// Create Screen
const SidebarNavigatorScreen = (props) => {

  return (

    <View style={{ flex: 1, }}>

      {/* RENDER: Profile */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: 'rgb(235, 235, 235)', }}>

        <View style={{ flex: 1, paddingLeft: 20, paddingTop: 70, }}>
          <Image 
            style={{ width: 50, height: 50 }}
            source={{ uri: props.user.profile_image }}
        
          />
        </View>
        
        <View style={{ flex: 4, justifyContent: 'space-evenly', paddingTop: 60, }}>
            <Text style={{ fontSize: 18, color:'rgb(3, 3, 3)', }}>{props.user.name}</Text>
            <Text style={{ fontSize: 14, color: 'rgb(40, 41, 43)', }}>{props.user.friens}</Text>
        </View>

      </View>

      {/* RENDER: Others */}
      <View style={{ flex: 5,  }}>

        {/* RENDER: Profile button */}
        <TouchableOpacity 
          style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 20, }}
          onPress={() => {this.props.openProfileScreen}}>

          <View style={{ flex: 1, }}>
            <Image 
              style={{ width: 25, height: 25, }} 
              source={settingBtn} 
            />
          </View>
          
          <View style={{ flex: 6, }}>
            <Text style={{ fontSize: 18, color: 'rgb(67, 71, 76)', }}>YOUR PROFILE</Text>
          </View>
          
        </TouchableOpacity>

        {/* RENDER: Help button */}
        <TouchableOpacity 
          style={{ flex: 1, flexDirection: 'row', paddingLeft: 20, }}
          onPress={() => {this.props.openHelpScreen}}>

          <View style={{ flex: 1, }}>
            <Image 
              style={{ width: 25, height: 25, }} 
              source={helpBtn} 
            />
          </View>
          
          <View style={{ flex: 6, }}>
            <Text style={{ fontSize: 18, color: 'rgb(67, 71, 76)', }}>HELP</Text>
          </View>

        </TouchableOpacity>

        {/* RENDER: Logout button */}
        <TouchableOpacity 
          style={{ flex: 5, paddingLeft: 270, }}
          onPress={() => {this.props.openLoginScreen}}>
          <Text style={{ fontSize: 18, color: 'rgb(55, 78, 105)', paddingTop: 400, }}>LOGOUT</Text>
        </TouchableOpacity>

      </View>
        
    </View>
  )
}

// Create Navigator
const SidebarNavigator = createDrawerNavigator({

    Profile: {
      screen: ProfileScreen,
    },

    Help: {
    
    }
  }, {
    contentComponent: SidebarNavigatorScreen,
});


export default SidebarNavigator;



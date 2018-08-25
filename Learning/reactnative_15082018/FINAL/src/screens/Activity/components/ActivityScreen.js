// Library
import React from 'react';
import { 
  View, Text, Image, TouchableOpacity
} from 'react-native';

// Component
// Button
import sidebarBtn from '@assets/icon/Hamburger.png';
import homeBtn from '@assets/icon/icon-home-active.png';
import checkinBtn from '@assets/icon/icon-checkin.png';
import activityBtn from '@assets/icon/icon-activity.png';


// Main Activity Screen
export default class ActivityScreen extends React.Component {
  
  render() {
    
    return (

      <View style={{flex: 1, }}>

        {/* RENDER: Activity header */}
        <View style={{ flex: 4, flexDirection:'row', backgroundColor: 'rgb(32, 46, 62)' }}>
          <TouchableOpacity style={{flex: 1, alignItems: 'center', paddingTop: 50, }}>
            <Image
              source={sidebarBtn}
            />
          </TouchableOpacity> 
          <Text style={{ flex: 5, alignItems: 'center', paddingTop: 48, paddingLeft: 110, fontSize: 18, color: 'rgb(255, 255, 255)', }}>ACTIVITY</Text>
        </View>

        <View style={{ flex: 29, }}>
        </View>

        {/* RENDER: Navigation bar */}
        <View style={{ flex: 3, flexDirection: 'row', }}>

          <TouchableOpacity 
            style={{ flex: 1, alignItems: 'center', paddingTop: 18, }} 
            onPress={() => {}}>
            <Image
              source={homeBtn}
            /> 
          </TouchableOpacity>

          <TouchableOpacity 
            style={{ flex: 1, alignItems: 'center', paddingTop: 18, }} 
            onPress={() => {}}>
            <Image
              source={checkinBtn}
            /> 
          </TouchableOpacity>

          <TouchableOpacity 
            style={{ flex: 1, alignItems: 'center', paddingTop: 18, }} 
            onPress={() => {}}>
            <Image
              source={activityBtn}
            />   
          </TouchableOpacity>

</View>
        
      </View>
    )
  };
};
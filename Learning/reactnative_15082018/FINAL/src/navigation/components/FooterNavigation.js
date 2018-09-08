// Library

// react
import React from 'react';

// react-native
import { 
  View, TouchableOpacity, Image,  
} from 'react-native';


// Component

// Button
import homeBtn from '@assets/icon/icon-home.png';
import homeBtnActive from '@assets/icon/icon-home-active.png'
import QRScanBtn from '@assets/icon/icon-checkin.png';
import QRScanBtnActive from '@assets/icon/icon-checkin-active.png'
import activityBtn from '@assets/icon/icon-activity.png';
import activityBtnActive from '@assets/icon/icon-activity-active.png';


// Main Footer Navigation
const FooterNavigation = (props) => {

  return (

    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>

      {/* RENDER: Home button */}
      <TouchableOpacity 
        style={{ flex: 1, }} 
        onPress={() => {this.props.openHomeScreen}}>
        <Image
          source={homeBtn}
        /> 
      </TouchableOpacity>

      {/* RENDER: QR-code scan button */}
      <TouchableOpacity 
        style={{ flex: 1, }} 
        onPress={() => {this.props.openQRScreen}}>
        <Image
          source={QRScanBtn}
        /> 
      </TouchableOpacity>

      {/* RENDER: Activity button */}
      <TouchableOpacity 
        style={{ flex: 1, }} 
        onPress={() => {this.props.openActivityScreen}}>
        <Image
          source={activityBtn}
        />   
      </TouchableOpacity>

    </View>
  )
};


export default FooterNavigation;

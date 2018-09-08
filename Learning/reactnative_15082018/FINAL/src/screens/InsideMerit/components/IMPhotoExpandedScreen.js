// Library

// react
import React from 'react';

// react-native
import { 
    View, Text, Image, TouchableOpacity
} from 'react-native';


// Component

// Button
import downloadBtn from '@assets/icon/group2.png';


// Main Inside merit Screen: Photo expanded
export default class IMPhotosExpandedScreen extends React.Component {
  
  render() {
    
    return (

      <View style={{flex: 1, }}>

        {/* RENDER: Header */}
        <View style={{ flex:4, flexDirection: 'row', alignItems: 'center', backgroundColor:'rgb(242, 242, 242)', }}>

          <TouchableOpacity style={{ flex: 1, paddingLeft: 25, paddingTop: 50, }}>
            <Text style={{ fontSize: 18, color:'rgb(245, 166, 35)', }}>Done</Text>
          </TouchableOpacity>

          <View style={{ flex: 5, alignItems: 'flex-start', paddingTop:50, paddingLeft: 90, }}>
            <Text style={{ fontSize: 18, color:'rgb(40, 41, 43)', }}>8 of 8</Text>
          </View>
          
        </View>

        {/* RENDER: Photo expanded */}
        <View style={{ flex: 27, justifyContent:'space-evenly', }}>
          <Image
            style={{ width: 375, height: 375, }}
            source={require('./../../../assets/icon/noun1410665.png')}
          />
        </View>

        <TouchableOpacity style={{ flex:3, justifyContent:'space-evenly', paddingLeft: 30, backgroundColor:'rgb(242, 242, 242)', }}>
        {/* RENDER: Dowload icon */}
          <Image
            source={downloadBtn}
          />
        </TouchableOpacity>

      </View>
    )
  };
};
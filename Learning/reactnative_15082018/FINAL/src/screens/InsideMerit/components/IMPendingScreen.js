// Library
import React from 'react';
import { 
    View, Text, Image, TouchableOpacity
} from 'react-native';

// Component
// Button
import cancelBtn from '@assets/icon/group2.png';


// Main Inside merit Screen: Pending
export default class IMPendingScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  };

  render() {

    return (
        
        <View style={{ flex: 1, }}>

          {/* RENDER: Header */}
          <View style={{ flex: 2, flexDirection:'row', }}>
            <Text style={{ flex: 5, paddingTop: 50, paddingLeft: 165, fontSize: 18, color: 'rgb(3, 3, 3)', }}>NAME</Text>
            <TouchableOpacity style={{flex: 1, alignItems: 'center', paddingTop: 50, }}>
                    <Image
                      source={cancelBtn}
                    />
            </TouchableOpacity>
          </View>

          {/*RENDER: PENDING*/}
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <TouchableOpacity style={{ flex: 1, flexDirection:'row', alignItems: 'center', backgroundColor: 'rgb(241, 241, 241)', }}>
              <Image
                style={{ flex: 2, }}
              />
              <Text style={{ flex: 3, fontSize: 16, }}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, flexDirection:'row', alignItems: 'center', backgroundColor: 'rgb(241, 241, 241)', }}>
              <Image
                style={{ flex: 2, }}
              />
              <Text style={{ flex: 3, fontSize: 16, }}>Reject</Text>
            </TouchableOpacity>
          </View>

          {/* RENDER: Biography */}
          <View style={{ flex: 5, flexDirection:'row', backgroundColor: 'coral', }}>

            <TouchableOpacity style={{flex: 1, alignItems: 'center', paddingTop: 45, }}>
                    <Image
                      style={{ width: 142, height: 142, }}
                      source={require('./../../../assets/icon/group2.png')}
                    />
            </TouchableOpacity>

            <View style={{ flex: 1, }}>

              <View style={{flex: 1, justifyContent: 'flex-end', }}>
                <Text style={{ fontSize: 14, color: 'rgb(67, 71, 76)' }}>NAME</Text>
                <Text style={{ paddingBottom: 10, fontSize: 18, color: 'rgb(67, 71, 76)' }}>ABC</Text>
              </View>

              <View style={{flex: 1, }}>
                <Text style={{ paddingTop: 10, fontSize: 14, color: 'rgb(67, 71, 76)' }}>FRIENDFRIEND DATE</Text>
                <Text style={{ fontSize: 18, color: 'rgb(67, 71, 76)' }}>123</Text>
              </View>

            </View>

          </View>

          {/* RENDER: More infomation */}
          <View style={{ flex: 10, }}>

            {/*RENDER: Menu */}
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <View style={{ flex: 1, justifyContent: 'center', }}>
                <Text style={{ paddingLeft: 25, color: 'rgb(255, 168, 183)', }}>MORE INFO</Text>
              </View>
              <View style={{ flex: 2, justifyContent: 'center', }}>
                <Text style={{ paddingLeft: 25, color: 'rgb(40, 41, 43)', }}>ATTACHMENTS</Text>
              </View>
            </View>

            {/*RENDER: Description */}
            <View style={{ flex: 6, }}>
              <View style={{ flex:1,  justifyContent: 'center', }}>
                <Text style={{ paddingLeft: 30, color: 'rgba(40, 41, 43, 0.8)', }}>DESCRIPTION</Text>
              </View>
              <View style={{ flex:8, }}>
                <Text style={{ fontSize: 16, paddingLeft: 30, }}>ABC</Text>
              </View>
            </View>

          </View>
          
        </View>
    )
  };
};

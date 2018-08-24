// Library
import React from 'react';
import { 
    View, TouchableOpacity, Text, Image, TextInput, 
} from 'react-native';

// Component


// Main Home Screen: Active
export default class HomeActiveScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  };

  render() {

    return (
        
        <View style={{ flex: 1, }}>

          {/* RENDER: Home header */}
          <View style={{ flex: 1, backgroundColor: 'rgb(32, 46, 62)', }}>

            {/* RENDER: Side bar */}
            <View style={{ flex: 3, flexDirection: 'row', }}>
                <TouchableOpacity style={{flex: 1, alignItems: 'center', paddingTop: 50, }}>
                  <Image
                    source={require('./../../../assets/icon/Hamburger.png')}
                  />
                </TouchableOpacity>
              <Text style={{ flex: 5, alignItems: 'center', paddingTop: 48, paddingLeft: 120, fontSize: 18, color: 'rgb(255, 255, 255)', }}>HOME</Text>
            </View>

            {/* RENDER: Search */}
            <View style={{ flex: 2, }}>
              <View style={{ flex: 1, }}></View>
              <View style={{ flex: 5, flexDirection: 'row', marginLeft: 10, width: 355, height: 32, borderRadius: 5, backgroundColor: 'rgb(255, 255, 255)', }}>
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 10, }}>
                  <Image
                    style={{ width: 22, height: 22, }}
                    source={require('./../../../assets/icon/icon-black-search.png')}
                  />
                </View>
                <TextInput
                  placeholder='Search'  
                  style={{ flex: 7, alignItems: 'center', fontSize: 16, }}
                  value={this.props.value}
                  onChangeText={(text) => this.props.onSearch(text)}
              />
              </View>
              <View style={{ flex: 1, }}></View>
            </View>
            
          </View>

          {/* RENDER: Home content */}
          <View style={{ flex: 5, }}>

            {/* RENDER: Status bar */}
            <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', }}>

              <TouchableOpacity 
                style={{ flex: 1, alignItems: 'center', }} 
                onPress={() => {}}>
                  <Text style={{ fontSize: 18, color: 'rgb(211, 35, 82)', }}>26</Text>
                  <Text style={{ fontSize: 14, color: 'rgb(211, 35, 82)', }}>ACTIVE</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={{ flex: 1, alignItems: 'center', }} 
                onPress={() => {}}>
                  <Text style={{ fontSize: 18, color: 'rgba(40, 41, 43, 0.5)', }}>1</Text>
                  <Text style={{ fontSize: 14, color: 'rgba(40, 41, 43, 0.5)', }}>REJECT</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={{ flex: 1,alignItems: 'center', }} 
                onPress={() => {}}>
                  <Text style={{ fontSize: 18, color: 'rgba(40, 41, 43, 0.5)', }}>18</Text>
                  <Text style={{ fontSize: 14, color: 'rgba(40, 41, 43, 0.5)', }}>PENDING</Text>
              </TouchableOpacity>

            </View>

            {/* RENDER: Friend list */}
            <View style={{ flex: 23, }}>

              <TouchableOpacity 
                style={{ flex: 1, flexDirection: 'row', }} 
                onPress={() => {}}>
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 50, }}>
                  <Image
                    style={{ width: 50, height: 50, }}
                    source={require('./../../../assets/icon/icon-home-active.png')}
                  />
                </View>
                <View style={{ flex:3, flexDirection: 'column', }}>
                  <View style={{ flex: 1, paddingTop: 25, }}>
                    <Text style={{ fontSize: 18, color: 'rgb(67, 71, 76)', }}>NAME</Text>
                  </View>
                  <View style={{ flex: 3, justifyContent:'space-evenly', }}>
                    <Text style={{ color: 'rgb(130, 132, 134)'}}>WORK</Text>
                    <Text style={{ color: 'rgb(130, 132, 134)'}}>GENDER</Text>
                    <Text style={{ color: 'rgb(130, 132, 134)'}}>LIVE</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                style={{ flex: 1, flexDirection: 'row', }} 
                onPress={() => {}}>
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 50, }}>
                  <Image
                    style={{ width: 50, height: 50, }}
                    source={require('./../../../assets/icon/icon-home-active.png')}
                  />
                </View>
                <View style={{ flex:3, flexDirection: 'column', }}>
                  <View style={{ flex: 1, paddingTop: 25, }}>
                    <Text style={{ fontSize: 18, color: 'rgb(67, 71, 76)', }}>NAME</Text>
                  </View>
                  <View style={{ flex: 3, justifyContent:'space-evenly', }}>
                    <Text style={{ color: 'rgb(130, 132, 134)'}}>WORK</Text>
                    <Text style={{ color: 'rgb(130, 132, 134)'}}>GENDER</Text>
                    <Text style={{ color: 'rgb(130, 132, 134)'}}>LIVE</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                style={{ flex: 1, flexDirection: 'row', }} 
                onPress={() => {}}>
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 50, }}>
                  <Image
                    style={{ width: 50, height: 50, }}
                    source={require('./../../../assets/icon/icon-home-active.png')}
                  />
                </View>
                <View style={{ flex:3, flexDirection: 'column', }}>
                  <View style={{ flex: 1, paddingTop: 25, }}>
                    <Text style={{ fontSize: 18, color: 'rgb(67, 71, 76)', }}>NAME</Text>
                  </View>
                  <View style={{ flex: 3, justifyContent:'space-evenly', }}>
                    <Text style={{ color: 'rgb(130, 132, 134)'}}>WORK</Text>
                    <Text style={{ color: 'rgb(130, 132, 134)'}}>GENDER</Text>
                    <Text style={{ color: 'rgb(130, 132, 134)'}}>LIVE</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                style={{ flex: 1, flexDirection: 'row', }} 
                onPress={() => {}}>
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 50, }}>
                  <Image
                    style={{ width: 50, height: 50, }}
                    source={require('./../../../assets/icon/icon-home-active.png')}
                  />
                </View>
                <View style={{ flex:3, flexDirection: 'column', }}>
                  <View style={{ flex: 1, paddingTop: 25, }}>
                    <Text style={{ fontSize: 18, color: 'rgb(67, 71, 76)', }}>NAME</Text>
                  </View>
                  <View style={{ flex: 3, justifyContent:'space-evenly', }}>
                    <Text style={{ color: 'rgb(130, 132, 134)'}}>WORK</Text>
                    <Text style={{ color: 'rgb(130, 132, 134)'}}>GENDER</Text>
                    <Text style={{ color: 'rgb(130, 132, 134)'}}>LIVE</Text>
                  </View>
                </View>
              </TouchableOpacity>

            </View>

            {/* RENDER: Navigation bar */}
            <View style={{ flex: 3, flexDirection: 'row', }}>

              <TouchableOpacity 
                style={{ flex: 1, alignItems: 'center', paddingTop: 18, }} 
                onPress={() => {}}>
                <Image
                  source={require('./../../../assets/icon/icon-home-active.png')}
                /> 
              </TouchableOpacity>

              <TouchableOpacity 
                style={{ flex: 1, alignItems: 'center', paddingTop: 18, }} 
                onPress={() => {}}>
                <Image
                  source={require('./../../../assets/icon/icon-checkin.png')}
                /> 
              </TouchableOpacity>

              <TouchableOpacity 
                style={{ flex: 1, alignItems: 'center', paddingTop: 18, }} 
                onPress={() => {}}>
                <Image
                  source={require('./../../../src/assets/icon/icon-activity.png')}
                />   
              </TouchableOpacity>

            </View>

          </View>
          
        </View>
    )
  };
};

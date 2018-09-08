// Library

// react
import React from 'react';

// react-native
import { 
    View, TextInput, TouchableOpacity, Text, Image,
} from 'react-native';


// Component

// Button
import emailBtn from '@assets/icon/emailIcon.png';
import lockBtn from '@assets/icon/lockIcon.png';


// Main Login Screen
export default class LoginScreen extends React.Component {

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
        <TouchableOpacity 
          style={{ flex: 1, backgroundColor: 'rgb(55, 78, 105)', }} 
          onPress={() => {}}>
            <Text style={{ paddingTop: 50, paddingLeft: 160, fontSize: 18, letterSpacing: 0.5, color: 'rgb(255, 255, 255)',}}>LOGIN</Text>
        </TouchableOpacity>
        
        {/* RENDER: Login center */}
        <View style={{ flex: 9, paddingLeft: 35, paddingRight: 35, }}>

          <View style={{ flex: 1, }}></View>

          {/* RENDER: Input center - Email */}
          <View style={{ flex: 1, }}>

            <Text style={{ flex: 1, paddingTop: 8, fontSize: 15, color: 'rgb(164, 170, 179)', }}>Email</Text>

            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ flex: 1, alignItems: 'center', }}>
                <Image
                  source={emailBtn}
                />
              </View>
              <TextInput
                placeholder='user.email@domain.com'  
                style={{ flex: 5, alignItems: 'center', fontSize: 16, color: 'rgb(40, 41, 43)', }}
                value={this.props.value}
                onChangeText={(text) => this.props.onSearch(text)}
              />
            </View>

          </View>

          {/* RENDER: Input center - Password */}
          <View style={{ flex: 1, }}>

            <Text style={{ flex: 1, paddingTop: 8, fontSize: 14, color: 'rgb(164, 170, 179)', }}>Password</Text>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ flex: 1, alignItems: 'center', }}>
                <Image
                    source={lockBtn}
                  />
              </View>
              <TextInput
                placeholder='*********'  
                style={{ flex: 5, alignItems: 'center', fontSize: 16, color: 'rgb(40, 41, 43)', }}
                value={this.props.value}
                onChangeText={(text) => this.props.onSearch(text)}
              />
            </View>
            
          </View>

          <View style={{ flex: 1, }}></View>

          {/* RENDER: Login button */}
          <View style={ { flex: 1/2, paddingLeft: 60, }}>
            <TouchableOpacity
              style={{ width: 192, height: 40, backgroundColor: 'rgb(55, 78, 105)', alignItems: 'center', borderRadius: 25, }}
              onPress={() => {}}>
                <Text style={{ paddingTop: 10, fontSize: 16, color: 'rgb(255, 255, 255)', }}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flex: 4, }}></View>

        </View>

      </View>  
    )
  };
};
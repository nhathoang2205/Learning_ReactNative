// Library
import React from 'react';
import { 
    View, TextInput, TouchableOpacity, Text, Image,
} from 'react-native';


// Component
// Screens
import Header from '@commons/Header';
// Button
import emailBtn from '@assets/icons/emailIcon.png';
import lockBtn from '@assets/icons/lockIcon.png';


// Main LoginScreen.js
export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  };

  render() {

    return (

      <View>

        {/* RENDER: Header */}
        <Header
          title='LOGIN'
          showSidebarLogo={false}
        />
        
        {/* RENDER: Login center */}
        <View style={{ paddingLeft: 35, paddingRight: 35, }}>

          {/* RENDER: Input center - Email */}
          <View>

            <Text style={{ paddingTop: 65, marginBottom: 10, fontSize: 14, color: 'rgb(164, 170, 179)', }}>Email</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, height: 45, borderRadius: 5, borderWidth: 1, borderColor: 'rgb(164, 170, 179)', }}>
              <View style={{ flex: 1, alignItems: 'center', }}>
                <Image
                  source={emailBtn}
                />
              </View>
              <TextInput
                placeholder='user.email@domain.com'  
                style={{ flex: 5, alignItems: 'center', fontSize: 16, color: 'rgb(40, 41, 43)', }}
                value={this.props.value}
                onChangeText={(text) => this.props.onChange(text)}
              />
            </View>

          </View>

          {/* RENDER: Input center - Password */}
          <View>

            <Text style={{ paddingTop: 15, marginBottom: 10, fontSize: 14, color: 'rgb(164, 170, 179)', }}>Password</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 75, height: 45, borderRadius: 5, borderWidth: 1, borderColor: 'rgb(164, 170, 179)', }}>
              <View style={{ flex: 1, alignItems: 'center', }}>
                <Image
                    source={lockBtn}
                  />
              </View>
              <TextInput
                placeholder='*********'  
                style={{ flex: 5, alignItems: 'center', fontSize: 16, color: 'rgb(40, 41, 43)', }}
                value={this.props.value}
                onChangeText={(text) => this.props.onChange(text)}
              />
            </View>
            
          </View>

          {/* RENDER: Login button */}
          <View style={{ alignItems: 'center', }}>
            <TouchableOpacity
              style={{ width: 192, height: 40, backgroundColor: 'rgb(55, 78, 105)', alignItems: 'center', borderRadius: 25, }}
              onPress={() => {}}>
                <Text style={{ paddingTop: 10, fontSize: 16, color: 'rgb(255, 255, 255)', }}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          
        </View>

      </View>  
    )
  };
};

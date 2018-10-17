// Library
import React from 'react';
import { 
    View, TextInput, TouchableOpacity, Text, Image, Alert
} from 'react-native';


// Component
// Screens
import Header from '@commons/Header';
// firebase
import firebaseData from '@login/components/FirebaseConfig';
// Button
import emailBtn from '@assets/icons/emailIcon.png';
import lockBtn from '@assets/icons/lockIcon.png';


// Main EnterLoginScreen.js
export default class EnterLoginScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  };

  Login() {

    firebaseData.auth().signInWithEmailAndPassword(this.state.email, this.state.password)

    .then(()=>{
      Alert.alert(
        'Alert Title',
        'Login success!',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => this.props.openHomeScreen()},
        ],
        { cancelable: false }
      )
      this.setState({
        email: '',
        password: '',
      })
    })

    .catch(function(error) {
      Alert.alert(
        'Alert Title',
        'Login fail!',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => this.props.openLoginScreen()},
        ],
        { cancelable: false }
      )
    });
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
                autoCapitalize="none"
                value={this.props.email}
                onChangeText={(email) => this.setState({email})}
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
                secureTextEntry={true}
                autoCapitalize="none"
                value={this.props.password}
                onChangeText={(password) => this.setState({password})}
              />
            </View>
          </View>

          {/* RENDER: Login button */}
          <View style={{ alignItems: 'center', }}>
            <TouchableOpacity
              style={{ alignItems: 'center', width: 192, height: 40, backgroundColor: 'rgb(55, 78, 105)', borderRadius: 25, }}
              onPress={() => {this.Login()}}>
                <Text style={{ paddingTop: 10, fontSize: 16, color: 'rgb(255, 255, 255)', }}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>

          {/* RENDER: Register center */}
          <View style={{ alignItems: 'center', paddingTop: 10, }}>

            <Text style={{ marginBottom: 10, fontSize: 14, color: 'rgb(164, 170, 179)', }}>Don't have account?</Text>
            
            <View style={{ alignItems: 'center', }}>
              <TouchableOpacity
                style={{ alignItems: 'center', width: 192, height: 40, backgroundColor: 'rgb(55, 78, 105)', borderRadius: 25}}
                onPress={() => {this.props.openRegisterScreen()}}>
                  <Text style={{ paddingTop: 10, fontSize: 16, color: 'rgb(255, 255, 255)', }}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View> 
    );
  };
};

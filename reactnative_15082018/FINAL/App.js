// // Library
// import React from 'react';
// import { 
//   View, Image, StyleSheet, TouchableOpacity
// } from 'react-native';

// // Component
// // Screen
// import LoginScreen from '@login/components/LoginScreen.js';

// // Main App
// export default class App extends React.Component {
  
//   render() {
    
//     return (

//       <View style={styles.app}>
//         {/* RENDER: Touching the logo will open the Login Screen */}
//         <TouchableOpacity onPress={() => {}}>
//           {/* RENDER: Wellcome logo*/}
//           <Image
//               source={require('./src/assets/wellcome/group.png')}
//               style={{ width: 83, height: 83, marginTop: 320, }}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// // Style
// const styles = StyleSheet.create({

//   app: {
//     flex: 1,
//     backgroundColor: 'rgb(55, 78, 105)',
//     alignItems: 'center',
//   },
// });

// Library
import React from 'react';
import { 
    View, StyleSheet, TouchableOpacity, Text, Image
} from 'react-native';

// Component
import TextInput from '@common/TextInput';

// Main Login Screen
export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  };

  render() {

    return (

      <View style={{ flex: 1, }}>

        {/* RENDER: Login header */}
        <TouchableOpacity
            style={{ flex: 1, backgroundColor: 'rgb(55, 78, 105)', alignItems: 'center', }}
            onPress={() => {}}>
            <Text 
                style={{ fontSize: 17, letterSpacing: 0.5, }}>
                LOGIN
            </Text>
        </TouchableOpacity>
        
        {/* RENDER: Login center */}
        <View style={{ flex:5, alignItems: 'center', }}>

          {/* RENDER: Login input center - Username */}
          <View>
            <Text style={{ paddingTop: 67, paddingRight: 297,paddingBottom: 518, paddingLeft: 38, height: 17, fontSize: 14, color: 'rgb(164, 170, 179)', }}>Email</Text>
            <View style={{ paddingTop: 92,paddingRight: 38, paddingBottom: 465, paddingLeft:37, width: 300, height: 45, }}>
              <Image
                source={require('./src/assets/icon/emailIcon.png')}
                style={{ width: 23, height: 18, }}
              />
              <TextInput
                style={{ height: 19, fontSize: 16, color: 'rgb(40, 41, 43)', paddingLeft: 10, }}
                value={this.props.value}
                onChangeText={(text) => this.props.onSearch(text)}
              />
            </View>
          </View>

          {/* RENDER: Login input center - Password */}
          <View>
            <Text style={{ paddingTop: 156, paddingRight: 269, paddingBottom: 429, paddingLeft: 38, height: 17, fontSize: 14, color: 'rgb(164, 170, 179)', }}>Password</Text>
            <View style={{ paddingTop: 181, paddingRight: 38, paddingBottom: 376, paddingLeft:37, width: 300, height: 45, }}>
              <Image
                source={require('./src/assets/icon/lockIcon.png')}
                style={{ width: 23, height: 18, }}
              />
              <TextInput
                style={{ height: 19, fontSize: 16, color: 'rgb(40, 41, 43)', paddingLeft: 1 }}
                value={this.props.value}
                onChangeText={(text) => this.props.onSearch(text)}
              />
            </View>
          </View>

          {/* RENDER: Login button */}
          <TouchableOpacity
            style={{ width: 192, height: 40, paddingTop: 297, paddingRight: 91, paddingBottom: 265, paddingLeft: 92, backgroundColor: 'rgb(55, 78, 105)', }}
            onPress={() => {}}>
            <Text style={{ width: 43, height: 17,fontSize: 14, alignItems: 'center', }}>LOGIN</Text>
          </TouchableOpacity>

        </View>

      </View>  
    )
  };
};

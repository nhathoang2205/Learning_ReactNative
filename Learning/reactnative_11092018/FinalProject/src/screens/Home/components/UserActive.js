// Library
import React from 'react';
import {
  View, 
} from 'react-native';


// Main UserActive.js
export default class UserActive extends React.Component {

  constructor(props) {

    super(props)
    this.state = {

    }
  };

  render() {

    return (

      <View>
        <TouchableOpacity 
          style={{ flex: 1, flexDirection: 'row', }} 
          onPress={() => {this.props.openProfile}}>

          <View style={{ flex: 1, alignItems: 'center', paddingTop: 50, }}>
            <Image
              style={{ width: 50, height: 50, }}
            />
            </View>

            <View style={{ flex:3, flexDirection: 'column', }}>
              <View style={{ flex: 1, paddingTop: 25, }}>
                <Text style={{ fontSize: 18, color: 'rgb(67, 71, 76)', }}>{this.props.userName}</Text>
              </View>
              <View style={{ flex: 3, justifyContent:'space-evenly', }}>
                <Text style={{ color: 'rgb(130, 132, 134)'}}>{this.props.userJob}</Text>
                <Text style={{ color: 'rgb(130, 132, 134)'}}>{this.props.userGender}</Text>
                <Text style={{ color: 'rgb(130, 132, 134)'}}>{this.props.userAddress}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  };
};

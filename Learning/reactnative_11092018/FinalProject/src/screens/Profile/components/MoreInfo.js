// Library
import React from 'react'
import { 
  View, Text,  
} from 'react-native';


// Main MoreInfo.js
export default class MoreInfo extends React.Component {

  constructor(props) {

    super(props)
  }

  render() {

    return (
        
      <View style={{ justifyContent: 'center', }}>

        <View style={{ flex:1, justifyContent: 'center', }}>
          <Text style={{ paddingLeft: 30, color: 'rgba(40, 41, 43, 0.8)', }}>DESCRIPTION</Text>
        </View>

        <View style={{ flex:8, }}>
          <Text style={{ fontSize: 16, paddingLeft: 30, }}>{this.props.friendDescription}</Text>
        </View>
      </View>
    )
  };
};

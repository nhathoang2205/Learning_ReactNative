// Library
import React from 'react'
import { 
  View, Text,  
} from 'react-native';


// Main Biography.js
export default class Biography extends React.Component {

  constructor(props) {

    super(props)
  }

  render() {

    return (
        
      <View style={{ flexDirection:'row', backgroundColor: 'coral', }}>

        <TouchableOpacity style={{flex: 1, alignItems: 'center', paddingTop: 45, }}>
          <Image
            style={{ width: 142, height: 142, }}
          />
        </TouchableOpacity>

        <View>

          <View style={{ flex: 1, justifyContent: 'flex-end', }}>
            <Text style={{ fontSize: 14, color: 'rgb(67, 71, 76)' }}>NAME</Text>
            <Text style={{ paddingBottom: 10, fontSize: 18, color: 'rgb(67, 71, 76)' }}>{this.props.friendName}</Text>
          </View>

          <View style={{flex: 1, }}>
            <Text style={{ paddingTop: 10, fontSize: 14, color: 'rgb(67, 71, 76)' }}>FRIENDFRIEND DATE</Text>
            <Text style={{ fontSize: 18, color: 'rgb(67, 71, 76)' }}>{this.props.friendDate}</Text>
          </View>

        </View>

      </View>
    )
  };
};

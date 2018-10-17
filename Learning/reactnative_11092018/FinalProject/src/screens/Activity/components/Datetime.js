// Library
import React from 'react';
import { 
  View, Text,  
} from 'react-native';


// Main ActivityDatetime.js
export default class Datetime extends React.Component {

  constructor(props) {
    
    super(props)
  }

  render() {

    return (

      <View style={{ justifyContent: 'center', alignItems: 'center', height: 31, backgroundColor: 'rgb(249, 249, 249)', }}>
          <Text>{this.props.timeline}</Text>
      </View>
    )
  };
};

// Library
import React from 'react';
import { 
  View, Text, StyleSheet, Image 
} from 'react-native';


// Main ActivityNews.js
export default class News extends React.Component {

  constructor(props) {

    super(props)
  }

  render() {
    

    switch (this.props.content) {

      case 'accepted': {

        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 71,  backgroundColor: 'rgb(255, 255, 255)', }}>
            <Image source={acceptedBtn} />
            <Text>Accepted{this.props.userName}</Text>
            <Text>{this.props.timeline}</Text>
          </View>
        )
      };
      
      case 'rejected': {

        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 71,  backgroundColor: 'rgb(255, 255, 255)', }}>
            <Image source={rejectedBtn} />
            <Text>Rejected{this.props.userName}</Text>
            <Text>{this.props.timeline}</Text>
          </View>
        )
      };
      
      case 'expired': {

        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 71,  backgroundColor: 'rgb(255, 255, 255)', }}>
            <Image source={expiredBtn} />
            <Text>Expired{this.props.userName}</Text>
            <Text>{this.props.timeline}</Text>
          </View>
        )
      }
      
      default: {

        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 71,  backgroundColor: 'rgb(255, 255, 255)', }}>
            <Text>Null</Text>
          </View>
          );
      };
    }
  };
};


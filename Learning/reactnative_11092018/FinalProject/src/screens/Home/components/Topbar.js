// Library
import React from 'react';
import { 
    View, TouchableOpacity, Text, 
} from 'react-native';


// Main HomeScreen.js
export default class HomeActiveScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false,
      reject: false,
      pending: false,
    }
  };

  render() {

    return (

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>

        {
          this.state.active
            ? <View style={{ flex: 1, alignItems: 'center', }}>
                <Text style={{ fontSize: 18, color: 'rgb(211, 35, 82)', }}>{this.props.numberUserActive}</Text>
                <Text style={{ fontSize: 14, color: 'rgb(211, 35, 82)', }}>ACTIVE</Text>
              </View>
            : <TouchableOpacity 
                style={{ flex: 1, alignItems: 'center', }} 
                onPress={() => {
                  this.setState({
                    active: true,
                    reject: false,
                    pending: false,
                  })
                }}>
                  <Text style={{ fontSize: 18, color: 'rgba(40, 41, 43, 0.5)', }}>{this.props.numberUserActive}</Text>
                  <Text style={{ fontSize: 14, color: 'rgba(40, 41, 43, 0.5)', }}>ACTIVE</Text>
              </TouchableOpacity>
        }
        
        {
          this.state.reject
            ? <View style={{ flex: 1, alignItems: 'center', }}>
                <Text style={{ fontSize: 18, color: 'rgb(255, 168, 183)', }}>{this.props.numberUserReject}</Text>
                <Text style={{ fontSize: 14, color: 'rgb(255, 168, 183)', }}>REJECT</Text>
              </View>
            : <TouchableOpacity 
                style={{ flex: 1, alignItems: 'center', }} 
                onPress={() => {
                  this.setState({
                    active: false,
                    reject: true,
                    pending: false,
                  })
                }}>
                <Text style={{ fontSize: 18, color: 'rgba(40, 41, 43, 0.5)', }}>{this.props.numberUserReject}</Text>
                <Text style={{ fontSize: 14, color: 'rgba(40, 41, 43, 0.5)', }}>REJECT</Text>
              </TouchableOpacity>
        }
        
        {
          this.state.pending
          ? <View style={{ flex: 1,alignItems: 'center', }}>
              <Text style={{ fontSize: 18, color: 'rgb(255, 168, 183)', }}>{this.props.numberUserPending}</Text>
              <Text style={{ fontSize: 14, color: 'rgb(255, 168, 183)', }}>PENDING</Text>
            </View>
          :  <TouchableOpacity 
              style={{ flex: 1,alignItems: 'center', }} 
              onPress={() => {
                this.setState({
                  active: false,
                  reject: false,
                  pending: true,
                })
              }}>
              <Text style={{ fontSize: 18, color: 'rgba(40, 41, 43, 0.5)', }}>{this.props.numberUserPending}</Text>
              <Text style={{ fontSize: 14, color: 'rgba(40, 41, 43, 0.5)', }}>PENDING</Text>
            </TouchableOpacity>
        }

      </View>
    )
  };
};

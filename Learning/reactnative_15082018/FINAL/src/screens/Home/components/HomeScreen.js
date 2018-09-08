// Library

// react
import React from 'react';

// react-native
import { 
    View, 
} from 'react-native';


// Component


// Main Home Screen
export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  };

  render() {

    return (
        
        <View style={{ flex: 1, }}>

        </View>
    )
  };
};

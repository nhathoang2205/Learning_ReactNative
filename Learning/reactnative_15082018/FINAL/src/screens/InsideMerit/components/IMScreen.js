// Library

// react
import React from 'react';

// react-native
import { 
    View, 
} from 'react-native';


// Component

// Button
import cancelBtn from '@assets/icon/group2.png';


// Main Inside merit Screen
export default class IMScreen extends React.Component {

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

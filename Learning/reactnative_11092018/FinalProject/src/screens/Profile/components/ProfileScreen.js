// Library
import React from 'react';
import { 
    View, Text, Image, TouchableOpacity, StatusBar
} from 'react-native';


// Component
// Screens
import Biography from '@profile/components/Biography';
import MoreInfo from '@profile/components/MoreInfo';
import Attachments from '@profile/components/Attachments';
// Customize
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;


// Main ProfileScreen.js
export default class ProfileScreen extends React.Component {

  constructor(props) {

    super(props)
  };

  render() {

    return (
        
        <View>

          {/* RENDER: Status bar */}
          <View style={{ height:STATUSBAR_HEIGHT, }}>
            <StatusBar barStyle="light-content" />
          </View>

          {/* RENDER: Biography */}
          <Biography />
          
          {/* RENDER: Menu */}
          <View>
            
            
          </View>

      </View>
    )
  };
};

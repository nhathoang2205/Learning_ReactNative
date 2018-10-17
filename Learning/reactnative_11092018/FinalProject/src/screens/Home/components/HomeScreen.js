// Library
import React from 'react';
import { 
    View, TouchableOpacity, Text, Image, TextInput, 
} from 'react-native';


// Component
// Screens
import Header from '@commons/Header';
import BottombarNavigator from '@navigators/components/BottombarNavigator';
import SearchInput from '@commons/SearchInput';
import Topbar from '@home/components/Topbar';
import UserActive from '@home/components/UserActive';
import UserReject from '@home/components/UserReject';
import UserPending from '@home/components/UserPending';


// Main HomeScreen.js
export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  };

  render() {

    return (
        
        <View>

          {/* RENDER: Header */}
          <Header
            title='HOME'
            showSidebarLogo={true}
          />
          <SearchInput />
          
          {/* RENDER: Content */}
          <View>

            {/* RENDER: Top bar */}
            <Topbar />
          
            {/* RENDER: Content */}


            {/* RENDER: Navigation bar */}
            <BottombarNavigator />
            
          </View>
          
        </View>
    )
  };
};

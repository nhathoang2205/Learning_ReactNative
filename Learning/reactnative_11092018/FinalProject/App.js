// Library
import React from 'react';
import { 
  View, 
} from 'react-native';


// Component
// Screens
import WellcomeScreen from '@wellcome/components/WellcomeScreen';


// Main App.js
export default class App extends React.Component {

  render() {

    return (

      <View style={{ flex: 1, }}>∫
        <WellcomeScreen />
      </View>
    );
  };
};

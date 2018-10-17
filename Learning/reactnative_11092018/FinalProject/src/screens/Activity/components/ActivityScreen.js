// Library
import React from 'react';
import { 
  View, 
} from 'react-native';


// Component
// Screens
import Header from '@commons/Header';
import BottombarNavigator from '@navigators/components/BottombarNavigator';
import Datetime from '@activity/components/Datetime';
import News from '@activity/components/News';


// Main ActivityScreen.js
export default class ActivityScreen extends React.Component {

  constructor(props) {

    super(props)
  }

  renderActivity = (actitityList) => (

    actitityList.map(activity => (

        <View key={activity.id}>
            <Datetime datetime={activity.datetime} />
            <News news={activity.news} />
        </View>
    ))
  )
  
  render() {
    
    return (

      <View style={{ flex: 1, }}>

        {/* RENDER: Header */}
        <Header
          title='ACTIVITY'
          showSidebarLogo={true}
        />

        {/* RENDER: Activity timeline */}
        {this.renderActivity()}


        {/* RENDER: Bottom bar navigator */}
        <BottombarNavigator />
      
      </View>
    )
  };
};

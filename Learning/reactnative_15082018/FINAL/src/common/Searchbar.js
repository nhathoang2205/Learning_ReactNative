// Library

// react
import React from 'react';

// react-native
import { 
  View, StatusBar
} from 'react-native';

// react-native-elements
import { 
  SearchBar 
} from 'react-native-elements';


// Main Search input
const SearchInput = (props) => (

  <View style={{ flexDirection: 'row', alignItems: 'center', width: 355, height: 32, paddingLeft: 5, paddingRight: 5, borderRadius: 5, backgroundColor: 'rgb(255, 255, 255)', }}>
    <SearchBar
      icon={{ type: 'font-awesome', name: 'search' }}
      placeholder=''
      inputStyle={{ fontSize: 16, color: 'rgb(130, 132, 134)', }}
    />
  </View>
);

export default SearchInput;

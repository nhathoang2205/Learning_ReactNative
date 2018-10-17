// Library
import React from 'react';
import { 
  View, 
} from 'react-native';
import { 
  SearchBar, 
} from 'react-native-elements';


// Main SearchInput.js
const SearchInput = (props) => (

  <View style={{ paddingLeft: 10, paddingRight: 10, backgroundColor: 'rgb(32, 46, 62)', }}>
    <SearchBar
      containerStyle={{ marginTop: 5, marginBottom: 5, borderWidth: 1, borderRadius: 5, backgroundColor: 'rgb(255, 255, 255)', }}
      icon={{ type: 'font-awesome', name: 'search', }}
      inputStyle={{ color: 'rgb(40, 41, 43)', backgroundColor: 'rgb(255, 255, 255)', }}
      placeholder=''
    />
  </View>
);

export default SearchInput;

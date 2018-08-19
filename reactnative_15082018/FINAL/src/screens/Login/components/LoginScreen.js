// Library
import React from 'react';
import { 
    View, StyleSheet, TouchableOpacity, Text
} from 'react-native';

// Component
import TextInput from '@common/TextInput';

// Main Login Screen
export default class LoginScreen extends React.Component {

  render() {

    return (

      <View style={styles.login}>

        {/* RENDER: Login header */}
			<TouchableOpacity
				style={{ backgroundColor: 'rgb(55, 78, 105)', alignItems: 'center', }}
				onPress={() => {}}>
				<Text 
						styles={{ fontSize: 17, letterSpacing: 0.5, }}>
						LOGIN
				</Text>
			</TouchableOpacity>
							
			{/* RENDER: Login center */}
			<View style={styles.inputCenter}>

				{/* RENDER: Login input center */}
				<View style={{}}>
						<Image
								source={require('../../../assets/icon/emailIcon.png')}
								style={{}}
						/>
						<TextInput
								placeholder='Username' 
								style={styles.textInput}
								value={props.value}
								onChangeText={(text) => props.onSearch(text)}
						/>
				</View>
					
				<View style={{}}>
						<Image
								source={require('../../../assets/icon/lockIcon.png')}
								style={{}}
						/>
						<TextInput
								placeholder='Username' 
								style={styles.textInput}
								value={props.value}
								onChangeText={(text) => props.onSearch(text)}
						/>
				</View>

				{/* RENDER: Login button */}
				<TouchableOpacity onPress={() => {}}>
						<Text>LOGIN</Text>
				</TouchableOpacity>

			</View>

	</View>
			)
	}
};

// Style Login Screen
const styles = StyleSheet.create({
    
  login: {

  },

  inputCenter: {

  },

  textInput: {

  },
});
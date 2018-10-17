// Library
import React from 'react';
import { 
    Navigator,
} from 'react-native-custom-components';


// Component
// Screens
import EnterLoginScreen from '@login/components/EnterLoginScreen';
import RegisterScreen from '@login/components/RegisterScreen';
import HomeScreen from '@home/components/HomeScreen';

const LoginScreen = () => {

  return(

    <Navigator
      initialRoute={{name:'login'}}
      renderScene={(route, navigator) => {

        if(route.name == 'login') {
          return (
            <EnterLoginScreen
              openRegisterScreen={() => {
                navigator.push({name: 'register'})
              }}
              openHomeScreen={() => {
                navigator.push({name: 'home'})
              }}
            />
          )
        };

        if(route.name == 'register') {
          return (
            <RegisterScreen
              openLoginScreen={()=>{
                navigator.push({name: 'login'})
              }}
            />
          )
        };

        if(route.name == 'home') {
          return (
            <HomeScreen />
          )
        };
      }}
    />
  );
};


export default LoginScreen;

import React, {Component} from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import OTPScreen from './components/OTPScreen';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        {/* <SplashScreen /> */}
        {/* <LoginScreen /> */}
        <OTPScreen />
      </View>
    );
  }
}


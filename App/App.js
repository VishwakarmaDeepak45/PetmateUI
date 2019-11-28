import React, {Component} from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import LoginScreen2 from './components/LoginScreen2';
import OTPScreen from './components/OTPScreen';
import Example from './components/Example';
import ThankYouScreen from './components/ThankYouScreen';
import PetParentAddPet from './components/PetParentAddPet';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        {/* <SplashScreen /> */}
        {/* <LoginScreen /> */}
        {/* <LoginScreen2 /> */}
        {/* <OTPScreen /> */}
        {/* <Example /> */}
        {/* <ThankYouScreen /> */}
        <PetParentAddPet />
      </View>
    );
  }
}


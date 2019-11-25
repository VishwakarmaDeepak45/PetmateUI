import React, {Component} from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default class SplashScreen extends Component {
  render() {
    return (
      <View>
        <ImageBackground source={require('../assets/splash-screen.jpg') } style={{width: '100%', height: '100%'}}>
          <View style={{display:'flex', alignItems:"center", justifyContent:"center", marginTop: hp(10)}}>
            <Image style={{resizeMode:'contain', width:'70%',}} source={require('../assets/Petmate-Logo.png')} />
         </View>
        </ImageBackground>
      </View>
    );
  }
}


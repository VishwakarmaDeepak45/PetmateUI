// @ts-nocheck
import React, {Component} from 'react';
import {View, Image, Text, ImageBackground, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import CountryPicker from 'react-native-country-picker-modal';

export default class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: '',
      cca2: 'IN',
      callingCode: ' +91',
      cca2Empty: null,
      country: null,
    }
  
}
updateUser(user){
  this.setState({ user: user })
}
  
  render() {

    return (
      <ScrollView>
      <View style={{ width: '100%', height: '100%'}}>
        <ImageBackground source={require('../assets/Bg.png') } style={{width: '100%', height: '100%', resizeMode:'contain'}}>
          <View style={{marginLeft:wp(10),marginRight:wp(10)}}>
          <View style={{display:'flex', alignItems:"center", justifyContent:"center", paddingTop:60, marginBottom:40,marginBottom: hp(7) }}>
            <Image style={{resizeMode:'contain', width:wp(55),}} source={require('../assets/Petmate-Logo.png')} />
         </View>
         <View style={{marginBottom: hp(6)}}>
           <Text style={{fontSize:20, fontWeight:'900', textAlign: 'center', color: '#504182'}}>LET’S SIGN IN</Text>
         </View>
          <View style={{
            alignItems:"center",
            display:"flex", 
            flexDirection: 'row', 
            justifyContent: "center", 
            }} >
              <View style={{
                width: wp(25), 
                height:51, 
                color:'#757E90',
                borderWidth: 1, 
                borderColor: '#000', 
                borderBottomLeftRadius: 50, 
                borderTopLeftRadius: 50, 
                display:'flex', 
                flexDirection: 'row',
                alignItems: 'center', 
                justifyContent:'center', 
                borderRightWidth:0}}>
              <CountryPicker
                  ref={(countryPicker) => { this.countryPicker = countryPicker; }}
                  onChange={(value)=> this.setState({country: value, cca2: value.cca2,
                                        callingCode: value.callingCode == undefined ? '': '  +'+value.callingCode })}
                  cca2={this.state.cca2}
                  showCallingCode={true}
                  translation='eng'
                  closeable
              />
              <Text>{this.state.callingCode}</Text> 
             </View>
                <TextInput  
                    style={{
                      borderWidth: 1, 
                      paddingLeft:20,
                      color:'#757E90', 
                      height: 51, 
                      borderBottomRightRadius: 50, 
                      borderTopRightRadius: 50, 
                      borderColor: '#000', 
                      width: wp(60)}}
                  placeholder="MOBILE NUMBER"  />
              
            </View>
            <View>
              <Text style={{fontWeight: '400',fontSize: 12, color: '#EB5757'}}>Error message comes here</Text>
            </View>

            <View style={{justifyContent: 'center', alignItems: "center", paddingBottom:40, marginTop:120 }}>
              <TouchableOpacity style={{backgroundColor:'#F0A33E', padding:20,justifyContent:"center",alignItems:"center", borderRadius:50, width:'100%', }}>
                <Text style={{textAlign: "center", color: '#fff',fontWeight: '500', fontSize: 16, }}>SUBMIT</Text>
              </TouchableOpacity>
            </View>

            <View style={{paddingBottom:120}}> 
              <Text style={{
                fontWeight: 'normal', 
                fontSize: 14, 
                textAlign:"center", 
                color:'#757E90'}}>By signing in, I am agreeing to PetMates 
                <Text style={{color:'#504182'}}> Privacy Policy</Text>
              </Text>
            </View>
            </View>
        </ImageBackground>    
      </View>
      </ScrollView>

    );
  }
}


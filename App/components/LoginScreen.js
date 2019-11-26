import React, {Component} from 'react';
import {View, Image, Text, ImageBackground, TextInput, Picker, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import CountryPicker from 'react-native-country-picker-modal';

export default class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: '',
      cca2: 'IN',
      cca2Empty: null,
      country: null,
    }
  
}
updateUser(user){
  this.setState({ user: user })
}
  
  render() {

    return (
      <View style={{backgroundColor:'#D3D3D3'}}>
        <ImageBackground source={require('../assets/Pattern.png') } style={{width: '100%', height: '100%'}}>
          <View style={{display:'flex', alignItems:"center", justifyContent:"center", marginTop: hp(10),marginBottom: hp(10) }}>
            <Image style={{resizeMode:'contain', width:'45%',}} source={require('../assets/Petmate-Logo.png')} />
         </View>
         <View style={{marginBottom: hp(5)}}>
           <Text style={{fontSize:20, fontWeight:'900', textAlign: 'center', color: '#504182'}}>Let’s Sign In</Text>
         </View>
          <View style={{alignItems:"center",display:"flex", flexDirection: 'row', justifyContent: "center", }} >
              <View style={{width: wp(30),color:'#757E90', paddingLeft:10 ,borderWidth: 1, borderColor: '#000', borderBottomLeftRadius: 50, borderTopLeftRadius: 50,}}>
              <CountryPicker
                  styles={{}}
                  ref={(countryPicker) => { this.countryPicker = countryPicker; }}
                  onChange={(value)=> this.setState({country: value, cca2: value.cca2,})}
                  cca2={this.state.cca2}
                  showCallingCode={true}
                  translation='eng'
                  closeable
              />

                 
              </View>
                <TextInput  
                style={{
                   borderWidth: 1, paddingLeft:20,color:'#757E90',
                    borderBottomRightRadius: 50, borderTopRightRadius: 50, borderColor: '#000', width: wp(60)}}
                placeholder="Mobile Number"  />
              
            </View>
            <View style={{marginLeft:wp(10), marginBottom:hp(18)}}>
              <Text style={{fontWeight: '600',fontSize: 12, color: '#EB5757'}}>Error message comes here</Text>
            </View>

            <View style={{ display: "flex", justifyContent: 'center', alignItems: "center"}}>
              <TouchableOpacity style={{backgroundColor:'#F0A33E', height:50,justifyContent:"center",alignItems:"center", width: wp(70), borderRadius:50}}>
                <Text style={{textAlign: "center", color: '#fff',fontWeight: 'bold', fontSize: 18, }}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{fontWeight: 'normal', fontSize: 12, textAlign:"center", color:'#757E90'}}>By signing in, I am agreeing to PetMates <Text style={{color:'#504182'}}>Privacy Policy</Text></Text>
            </View>
        </ImageBackground>
      </View>
    );
  }
}


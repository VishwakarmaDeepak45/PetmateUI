// @ts-nocheck
import React, {Component} from 'react';
import {View, Image, Text, ImageBackground, StyleSheet, TouchableOpacity, Platform, KeyboardAvoidingView, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Item, Input } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

export default class OTPScreen extends Component {
  state = {otp:[]}   
  otpTextInput = [];

componentDidMount() {
  this.otpTextInput[0]._root.focus();
}

renderInputs() {
  const inputs = Array(6).fill(0);
  const txt = inputs.map((i, j) => 
                <Col key={j} style={styles.txtMargin}>
                  <Item style={{height: hp(7), }}> 
                    <Input
                        style={styles.inputRadius}
                        keyboardType="numeric"
                        onChangeText={v => this.focusNext(j, v)}
                        onKeyPress={e => this.focusPrevious(e.nativeEvent.key, j)}
                        ref={ref => this.otpTextInput[j] = ref}
                    />
                  </Item>
                </Col>
  );
  return txt;
}

focusPrevious(key, index) {
  if (key === 'Backspace' && index !== 0)
      this.otpTextInput[index - 1]._root.focus();
}

focusNext(index, value) {
  if (index < this.otpTextInput.length - 1 && value) {
      this.otpTextInput[index + 1]._root.focus();
  }
  if (index === this.otpTextInput.length - 1) {
      this.otpTextInput[index]._root.blur();
  }
  const otp = this.state.otp;
  otp[index] = value;
  this.setState({ otp });
  //this.props.getOtp(otp.join(''));
}

  render() {
    return (
      <ImageBackground source={require('../assets/Bg.png') } resizeMode={'cover'} style={{flex:1}}>
        <ScrollView style={{flex:1,}}>
          <View style={{flex:1}}>
          <View style={{ marginLeft:wp(10), marginRight: wp(10), flex:1,}}>
            <View style={{display:'flex', alignItems:"center", justifyContent:"center", paddingTop:40, marginBottom:30}}>
              <Image style={{resizeMode:'contain', width:wp(55),}} source={require('../assets/Petmate-Logo.png')} />
            </View>
            <View style={{marginBottom: hp(2)}}>
              <Text style={{fontSize:20, fontWeight:'900', textAlign: 'center', color: '#504182' }}>VERIFY MOBILE NUMBER</Text>
            </View>
            <View style={{marginBottom:hp(6)}}>
              <Text style={{textAlign:"center",fontWeight:"normal", fontSize:12}}>Please enter One Time Password to verify your account</Text>
            </View>
            <View style={{alignItems:"center",display:"flex", flexDirection: 'row', justifyContent: "center"  }} >
              <Grid>
              {this.renderInputs()}
              </Grid>   
            </View>
            <View style={{marginLeft:wp(2), marginBottom:hp(3)}}>
              <Text style={{fontWeight: '400',fontSize: 12, color: '#EB5757'}}>Error message comes here</Text>
            </View>

            <View style={{paddingTop:20}}> 
              <Text style={{
                fontWeight: 'normal', 
                fontSize: 14, 
                textAlign:"center", 
                color:'#757E90'}}>Not Received yet? 
                <Text style={{color:'#504182'}}> RESEND</Text>
              </Text>
            </View>

            <View style={{justifyContent: 'center', alignItems: "center", paddingBottom:28, marginTop:80 }}>
              <TouchableOpacity style={{backgroundColor:'#F0A33E', padding:20,justifyContent:"center",alignItems:"center", borderRadius:50, width:'100%', }}>
                <Text style={{textAlign: "center", color: '#fff',fontWeight: '500', fontSize: 16, }}>CONTINUE</Text>
              </TouchableOpacity>
            </View>
          </View>
           
      
        </View>
       </ScrollView>
       </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  txtMargin: { margin: 5, borderColor: 'black', borderWidth:1, },
  inputRadius: { textAlign: 'center', fontSize: 20 , padding:0}
});


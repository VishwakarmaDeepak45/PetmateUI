import React, {Component} from 'react';
import {View, Image, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Item, Input } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

export default class OTPScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: '',
      otp:[],    
    }
}
    otpTextInput = [];

updateUser(user){
  this.setState({ 
    user: user,
   })
}

componentDidMount() {
  this.otpTextInput[0]._root.focus();
}
renderInputs() {
  const inputs = Array(6).fill(0);
  const txt = inputs.map((i, j) => 
                <Col key={j} style={styles.txtMargin}>
                  <Item regular>
                    <Input
                        style={[styles.inputRadius, { borderRadius: 10 }]}
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
  this.props.getOtp(otp.join(''));
}

  render() {
    return (
      <View style={{backgroundColor:'#d3d3d3'}}>
        <ImageBackground source={require('../assets/Pattern.png') } style={{width: '100%', height: '100%'}}>
          <View style={{display:'flex', alignItems:"center", justifyContent:"center", marginTop: hp(10),marginBottom: hp(10) }}>
            <Image style={{resizeMode:'contain', width:'45%',}} source={require('../assets/Petmate-Logo.png')} />
         </View>
         <View style={{marginBottom: hp(2)}}>
           <Text style={{fontSize:20, fontWeight:'900', textAlign: 'center', color: '#504182'}}>Verify Mobile Number</Text>
         </View>
         <View style={{marginBottom:hp(6)}}>
           <Text style={{textAlign:"center", fontWeight:"normal"}}>Please enter One Time Password to verify your account</Text>
         </View>
          <View style={{alignItems:"center",display:"flex", flexDirection: 'row', justifyContent: "center",marginLeft: wp(5), marginRight:wp(5),  }} >
            {/* <Grid style={styles.gridPad}>
             {this.renderInputs()}
            </Grid> */}
                
           </View>
            <View style={{marginLeft:wp(10), marginBottom:hp(3)}}>
              <Text style={{fontWeight: '600',fontSize: 12, color: '#EB5757'}}>Error message comes here</Text>
            </View>
            <View style={{marginBottom:hp(10)}}>
                <Text style={{fontWeight: 'normal', fontSize: 16, textAlign:"center", color:'#757E90'}}>Not received yet?  <Text style={{color:'#504182'}}>RESEND</Text></Text>
            </View>

            <View style={{ display: "flex", justifyContent: 'center', alignItems: "center"}}>
              <TouchableOpacity style={{backgroundColor:'#F0A33E', height:50,justifyContent:"center",alignItems:"center", width: wp(70), borderRadius:50}}>
                <Text style={{textAlign: "center", color: '#fff',fontWeight: 'bold', fontSize: 18, }}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
            
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  gridPad: { padding: 30 },
  txtMargin: { margin: 3 },
  inputRadius: { textAlign: 'center' }
});


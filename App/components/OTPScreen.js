import React, {Component} from 'react';
import {View, Image, Text, ImageBackground, TextInput, Picker, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default class OTPScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: ''
    }
  
}
updateUser(user){
  this.setState({ user: user })
}
  
  render() {
    return (
      <View>
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
         
                <TextInput  
                style={{ borderWidth: 1,
                  padding:10,
                   color:'#757E90',
                    borderColor: '#000',
                    marginRight:wp(1),
                    textAlign: "center",
                    }}
                placeholder="1"  />
              
                 <TextInput  
                style={{ borderWidth: 1,
                  textAlign: "center",
                   color:'#757E90',
                    borderColor: '#000',
                    marginLeft: wp(1),
                    marginRight:wp(1),
                    padding:10,
                    }}
                placeholder="1"  />
                <TextInput  
                style={{ borderWidth: 1,
                  textAlign: "center",
                   color:'#757E90',
                    borderColor: '#000',
                    marginLeft: wp(1),
                    marginRight:wp(1),
                    padding:10,
                    }}
                placeholder="1"  />
               <TextInput  
                style={{ borderWidth: 1,
                  padding:10,
                  textAlign: "center",
                   color:'#757E90',
                    borderColor: '#000',
                    marginLeft: wp(1),
                    marginRight:wp(1),
                   
                    }}
                placeholder="1"  />
                <TextInput  
                style={{ borderWidth: 1,
                  padding:10,
                   color:'#757E90',
                    borderColor: '#000',
                    marginLeft: wp(1),
                    marginRight:wp(1),
                     textAlign: "center",
                    
                    }}
                placeholder="1"  />
                <TextInput  
                style={{ borderWidth: 1,
                    padding:10,
                   color:'#757E90',
                    borderColor: '#000',
                    margin:wp(1),
                    textAlign: "center",
                    }}
                placeholder="1"  />
           
              
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


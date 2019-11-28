import React, {Component} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default class ThankYouScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between', }} style={{width:'100%', }}>
        <View style={{flex:1,}}>
           
          <View style={{marginLeft:'8%', marginRight:'8%', marginBottom:300}}>
            <View style={{marginTop:70, marginBottom:5}}>
              <Text style={{textAlign:'center', fontSize:16, fontWeight:'600', color:'#757E90'}}>Excellent,</Text>
            </View>
            <View style={{marginBottom:5}}>
              <Text style={{textAlign:'center', fontSize:16, fontWeight:'600', color:'#757E90'}}>Your Petmate account as a Pet Lover</Text>
            </View>
            <View style={{marginBottom:60}}>
              <Text style={{textAlign:'center', fontSize:16, fontWeight:'600', color:'#757E90'}}>has been created successfully.</Text>
            </View>
            <View style={{width:'100%',}}>
              <TouchableOpacity style={{padding:15,  borderRadius:50, backgroundColor:'#F0A33E'}}>
                <Text style={{textAlign:'center', fontSize:16, fontWeight:'400', color:'white'}}>GO TO HOME</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flex:1, justifyContent: 'flex-end', }}>
            <Image source={require('../assets/Background-Garden.png')} resizeMode={'stretch'} style={{width:'100%', position: 'absolute', bottom:0, }}   />
          </View>
          
      </View>
    </ScrollView>
    </View>
    );
  }
}


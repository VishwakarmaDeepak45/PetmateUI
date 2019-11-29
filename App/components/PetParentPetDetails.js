// @ts-nocheck
import React, {Component} from 'react';
import {View, Image, Text, TextInput, ScrollView, TouchableOpacity, Switch, ImageBackground,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Col,Grid,Row} from 'react-native-easy-grid';
import WebView  from 'react-native-webview';

export default class PetParentAddPet extends Component {

  constructor(props){
    super(props);
    this.state = {
      defaultImage: true,
      pickedImag: false,
      filePath: {},
      
      selectPet: '',
      choosenPetIndex: '',
      selectBreed: '',
      choosenBreedIndex: '',
      gender:'',
      choosenGenderIndex:'',
      age: '',
      choosenAgeIndex: '',
      switchLocationValue:false,
      switchPedigreeValue:false,
      switchVaccinatedValue:false,
      selectBehaviourDog: false,
      selectBehaviourCat: false,
      selectBehaviourKid: false,
    }
  
}

//Image Picker Methods Declaration.
chooseFile = () => {
  
  var options = {
    title: 'Select Image',
    customButtons: [
      { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  ImagePicker.showImagePicker(options, response => {
    console.log('Response = ', response);

    if (response.didCancel) {
      this.setState({defaultImage:true, pickedImag:false });
      //console.log('User cancelled image picker');
    } else if (response.error) {
      //console.log('ImagePicker Error: ', response.error);
      this.setState({defaultImage:true, pickedImag:false });
    } else {
      let source = response;
      this.setState({
        filePath: source,
      });
    }
  });

};

hideImage = () =>{
  this.setState({defaultImage:false, pickedImag:true });
  this.chooseFile();
} 
  
  render() {
    const {pickedImag, defaultImage, selectBehaviourCat, selectBehaviourDog, selectBehaviourKid}=this.state;

    return (
        <ScrollView style={{flex:1}}>
          <View style={{ flex:1, backgroundColor:'#F4F3EE', }}>
            <View>
              <ImageBackground source={require('../assets/Princedog.png')} style={{width: '100%', height: 250, }}>
               <Image
                    source={require('../assets/backgroundprince.png')}
                    style={{width: '100%', height: 250, }}
                /> 
                </ImageBackground>
            </View>
          
            <View style={{  marginTop: -15,  borderRadius:20, backgroundColor:'#F4F3EE'}}>
              <View style={{  display: 'flex', flexDirection:'row', justifyContent: 'space-between',paddingTop:20, alignItems:'center', marginBottom:10 }}>
                  <View style={{ marginLeft:'8%' ,paddingBottom:10}}> 
                    <Text style={{fontWeight: '500', fontSize: 22, color: '#F0A33E'}}>Prince</Text>
                  </View>
                  <View style={{ marginRight:'8%'}}>
                    <Image
                        source={require('../assets/redflag.png')}
                    /> 
                  </View>
              </View>
            </View>

           


            {/* Pet */}
            <View style={{marginLeft:'8%', marginRight:'8%',}}>

            <Grid>
                <Col size={2} style={{borderRightWidth:1, borderColor:'#E0E0E0',  }}>
                    <View style={{}}> 
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#757E90'}}>Breed</Text>
                    </View>
                    <View style={{paddingTop:10, }}> 
                      <Text style={{fontWeight: '400', fontSize: 12, color: '#F0A33E'}}>Pug</Text>
                    </View>
                </Col>
                <Col size={3} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <View style={{ }}> 
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#757E90'}}>Gender</Text>
                    </View>
                    <View style={{paddingTop:10, display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center'}}> 
                      <Text style={{fontWeight: '400', fontSize: 12, color: '#F0A33E'}}>Female</Text>
                      <View style={{marginLeft:10}}>
                        <Image style={{resizeMode:'contain', }} source={require('../assets/petwomen.png')} />
                      </View>
                    </View>
                </Col>
                <Col size={2} style={{display:'flex', alignItems:'flex-end', borderColor:'#E0E0E0', borderLeftWidth:1,}}>
                    <View style={{ }}> 
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#757E90', textAlign:'left', marginRight:10}}>Age</Text>
                    </View>
                    <View style={{paddingTop:10, }}> 
                      <Text style={{fontWeight: '400', fontSize: 12, color: '#F0A33E', textAlign:'left'}}>12 Months</Text>
                    </View>
                </Col>
            </Grid>


              <View style={{ marginTop: 30}}>
                <View style={{marginBottom:25}}>
                  <Text style={{fontWeight: '500', fontSize: 16, color: '#757E90'}}>Pet Bio</Text>
                </View>
                <View style={{ display:'flex', }}>
                    <WebView style={{fontWeight: '400', height:100,fontSize: 12, color: '#504182', textAlign: 'justify',letterSpacing:0.1}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={'<h1 style="color:red;"> Skptricks Blog </h1>'} />
                     {/* source={{"We all need friends , soul mates and we have them as our support system. However can we say the same for our kids (read pets). Petmate is a platform to help them find their friends and soul mates. Petmate pioneered the online dating industry for pets. With the click of a mouse , members can instantly see photos and see all potential matches in the location of preference. {'\n'}The sole purpose of petmate is to see happy pet faces . Petmate serves as an online community for pet owners who want their pets to enjoy a long , healthy and fulfilling life in the company of another pet." }} /> */}
                </View>
                  
              </View>

             

              {/* My behaviour */}
              <View style={{marginTop:30 }}>
                  <View style={{marginBottom:20}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#757E90'}}>Pet behaviour</Text>
                  </View>

                  {/* Dog */}
                <View style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                  
                      <TouchableOpacity style={{backgroundColor:'white', justifyContent:"center",alignItems:"center", borderRadius:30, width:'30%', height:110 ,borderWidth:1, borderColor: 'orange',backgroundColor :selectBehaviourDog ? 'orange' : 'white'  }}
                         onPress={()=>this.setState({selectBehaviourDog: true, selectBehaviourCat: false, selectBehaviourKid:false}) }>
                        <View style={{ right:0,top:0, position:"absolute" }}>
                          <Image style={{resizeMode:'contain', }} source={require('../assets/CheckboxActive.png')} />
                        </View>
                        <View style={{paddingBottom:5}}>
                          <Image style={{resizeMode:'contain', }} source={require('../assets/DogColored.png')} />
                        </View>

                        <View style={{marginBottom:8}}> 
                          <Text style={{textAlign: "center", color: '#F0A33E',fontWeight: '400', fontSize: 13, }}>
                            Dog {'\n'}Friendly
                          </Text>
                        </View>
                      </TouchableOpacity>
                 

                    {/* Cat */}
                  
                      <TouchableOpacity style={{backgroundColor:'white', justifyContent:"center",alignItems:"center", borderRadius:30, width:'30%', height:110 ,borderWidth:1, borderColor: 'orange',backgroundColor :selectBehaviourCat ? 'orange' : 'white' }}
                      onPress={()=>this.setState({selectBehaviourDog: false, selectBehaviourCat: true, selectBehaviourKid:false}) }>
                         <View style={{right:0,top:0, position:"absolute"}}>
                            <Image style={{resizeMode:'contain', }} source={require('../assets/CheckboxActive.png')} />
                        </View>
                        <View style={{paddingBottom:5}}>
                          <Image style={{resizeMode:'contain', }} source={require('../assets/CatColored.png')} />
                        </View>
                        
                        <View style={{marginBottom:8}}> 
                          <Text style={{textAlign: "center", color: '#F0A33E',fontWeight: '400', fontSize: 13, }}>
                              Cat {'\n'}Friendly
                          </Text> 
                      </View>
                      </TouchableOpacity>
                  

                    {/* Child */}
                
                     <TouchableOpacity style={{backgroundColor:'white', justifyContent:"center",alignItems:"center", borderRadius:30, width:'30%', height:110 ,borderWidth:1, borderColor: '#BDBDBD', backgroundColor :selectBehaviourKid ? 'orange' : 'white' }}
                      onPress={()=>this.setState({selectBehaviourDog: false, selectBehaviourCat: false, selectBehaviourKid:true}) }>
                        <View style={{paddingTop:5, paddingBottom:5}}>
                          <Image style={{resizeMode:'contain',}} source={require('../assets/Kid.png')} />
                        </View>
                        
                        <View style={{marginBottom:8}}> 
                        <Text style={{textAlign: "center", color: '#BDBDBD',fontWeight: '400', fontSize: 13, }}>
                          Kid {'\n'}Friendly
                        </Text> 
                      </View>
                    </TouchableOpacity>
                 
                </View>
              </View>


              {/* Pedigree & Vaccine*/}
              <View style={{marginTop:30, }}>
                <View>
                  <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#757E90'}}>Pedigree</Text>
                      <Switch  
                        tintColor={'gray'}
                        thumbTintColor={'white'}
                        onTintColor={'orange'}
                        value={this.state.switchPedigreeValue}  
                        onValueChange ={(switchPedigreeValue)=>this.setState({switchPedigreeValue})}/> 
                  </View>
                  <View style={{}}>
                      <Text style={{fontWeight: '400', fontSize: 12, color: '#757E90'}} numberOfLines={1}>Does your pet have pedigree certifcate</Text>
                  </View>
                </View>

                <View style={{marginTop:30}}>
                  <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#757E90'}}>Vaccinated</Text>
                      <Switch  
                      tintColor={'gray'}
                      thumbTintColor={'white'}
                      onTintColor={'orange'}
                        value={this.state.switchVaccinatedValue}  
                        onValueChange ={(switchVaccinatedValue)=>this.setState({switchVaccinatedValue})}/> 
                  </View>
                  <View style={{}}>
                      <Text style={{fontWeight: '400', fontSize: 12, color: '#757E90', }} numberOfLines={1}>Does your pet have regular vaccination</Text>
                  </View>
                </View>
              </View>

              {/* Location */}
              <View style={{ marginTop:30}}>
                  <View style={{marginBottom:20}}>
                      <Text style={{fontWeight: '500', fontSize: 15, color: '#757E90'}}>LOCATION</Text>
                  </View>
                  <View style={{display: 'flex', flexDirection:'row', }}>
                    <View style={{marginRight:10, marginLeft:5}}>
                        <Image style={{resizeMode:'contain', }} source={require('../assets/Location.png')} />
                    </View>
                    <Text style={{fontWeight: '400', fontSize: 16, color: '#504182'}}>Santacruz, Mumbai</Text>
                  </View>
              </View>

              {/* Name details */}
              <View style={{ marginTop:25, display: 'flex', flexDirection:'row', backgroundColor:'#E5E5E5' ,borderRadius:20, paddingTop:15, paddingBottom:15, paddingLeft:20}}>
                    <View style={{marginRight:10, alignContent:'center', justifyContent:'center'}}>
                        <Image style={{resizeMode:'contain', }} source={require('../assets/DefaultUser.png')} />
                    </View>
                    <View>
                      <View style={{marginBottom:5}}>
                          <Text style={{fontWeight: '500', fontSize: 15, color: '#504182'}}>Durgesh Yadav</Text>
                      </View>
                      <View style={{display: 'flex', flexDirection:'row', }}>
                        <Text style={{fontWeight: '400', fontSize: 12, color: '#828282'}}>Owner</Text>
                      </View>
                  </View>
              </View>
              

              {/* Submit */}
              <View style={{paddingBottom:80, marginTop:40, marginLeft:'8%', marginRight:'8%', display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'center'  }}>

                <TouchableOpacity style={{backgroundColor:'white', alignItems:'center', justifyContent:'center',marginRight:15, borderRadius:wp(50), display:'flex',width:75, height:75}}>
                    <View style={{}}>
                        <Image style={{resizeMode:'contain',  }} source={require('../assets/ThumbDown.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:'white', alignItems:'center', justifyContent:'center',marginLeft:15, borderRadius:wp(50), display:'flex', width:75, height:75 }}>
                    <View style={{}}>
                        <Image style={{resizeMode:'contain', }} source={require('../assets/ThumbUp.png')} />
                    </View>
                </TouchableOpacity>
              </View>
            </View>
            </View>
      </ScrollView>
        

    );
  }
}
const styles = StyleSheet.create ({  
 pickerStyle:{  
     marginLeft:5, 
     width: "100%",  
     color: '#757E90',  
     justifyContent: 'center',  
 }  
})  

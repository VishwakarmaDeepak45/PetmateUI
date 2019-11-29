// @ts-nocheck
import React, {Component} from 'react';
import {View, Image, Text, TextInput, ScrollView, TouchableOpacity, Switch, Picker, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';


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
          <View style={{ flex:1, backgroundColor:'white'}}>
            <View>
                {pickedImag && (<Image
                    source={{ uri: this.state.filePath.uri }}
                    onPress={() => this.chooseFile()} 
                    style={{width: '100%', height: 200, }}
                />  )}
                { defaultImage && (<TouchableOpacity 
                    style={{width: '100%', height: 200, backgroundColor:'#E0E0E0', display: 'flex', alignItems: 'center', justifyContent: 'center'}} 
                    onPress={() => {this.hideImage()}} >
                    <Image
                        source={require('../assets/Petpalms.png') }
                    /> 
                    <View style={{marginTop:5}}>
                        <Text style={{fontWeight: '400', fontSize: 12, color: '#757E90', textAlign:"center"}}>Add your pet best image</Text>
                    </View>
                    </TouchableOpacity> 
                  )}
            </View>

              {/* Select Pet */}
              <View style={{ marginLeft:'8%', marginRight:'8%', marginTop: 25}}>
                  <View style={{ borderWidth:1,  borderColor: '#ccc', borderRadius: 50 }}>
                    <Picker 
                          style={styles.pickerStyle}  
                          selectedValue={this.state.selectPet}  
                          onValueChange={(itemValue, itemPosition) =>  
                              this.setState({selectPet: itemValue, choosenPetIndex: itemPosition})}>  
                      <Picker.Item label="SELECT PET" value="NULL" />  
                      <Picker.Item label="Dog" value="Dog" />  
                      <Picker.Item label="Cat" value="Cat" />  
                    </Picker>  
                  </View>
                  <View style={{marginLeft:10}}>
                    <Text style={{fontWeight: '400', fontSize: 12, color: '#EB5757'}}>Error message comes here</Text>
                  </View>
              </View>

              <View style={{}}></View>

              {/* Breed */}
              <View style={{ marginLeft:'8%', marginRight:'8%', marginTop: 25}}>
                <View style={{ borderWidth:1,  borderColor: '#ccc', borderRadius: 50 }}>
                    <Picker 
                          style={styles.pickerStyle}  
                          selectedValue={this.state.selectBreed}  
                          onValueChange={(itemValue, itemPosition) =>  
                              this.setState({selectBreed: itemValue, choosenBreedIndex: itemPosition})}>  
                      <Picker.Item label="BREED" value="NULL" />  
                      <Picker.Item label="JavaScript" value="js" />  
                      <Picker.Item label="React Native" value="rn" />  
                    </Picker>  
                  </View>
                  <View style={{marginLeft:10}}>
                    <Text style={{fontWeight: '400', fontSize: 12, color: '#EB5757'}}>Error message comes here</Text>
                  </View>
              </View>

              {/* Gender & Age */}
              <View style={{ marginLeft:'8%', marginRight:'8%', marginTop:25, display:'flex', flexDirection:'row', justifyContent: 'space-between'  }}>
                <View style={{ width:'48%'}}>
                    <View style={{borderWidth:1,  borderColor: '#ccc', borderRadius: 50}}>
                      <Picker 
                            style={styles.pickerStyle}  
                            selectedValue={this.state.gender}  
                            onValueChange={(itemValue, itemPosition) =>  
                                this.setState({gender: itemValue, choosenGenderIndex: itemPosition})}>
                        <Picker.Item label="GENDER" value="NULL" />  
                        <Picker.Item label="Male" value="Male" />  
                        <Picker.Item label="Female" value="Female" />  
                      </Picker>  
                    </View>
                    <View style={{marginLeft:10}}>
                      <Text style={{fontWeight: '400', fontSize: 12, color: '#EB5757'}}>Error message comes here</Text>
                    </View>
                </View>
                <View style={{ width:'48%'}}>
                    <View style={{borderWidth:1,  borderColor: '#ccc', borderRadius: 50}}>
                      <Picker 
                            style={styles.pickerStyle}  
                            selectedValue={this.state.age}  
                            onValueChange={(itemValue, itemPosition) =>  
                                this.setState({age: itemValue, choosenAgeIndex: itemPosition})}  
                        >  
                        <Picker.Item label="AGE" value="NULL" />  
                        <Picker.Item label="less then 10" value="less then 10" />  
                        <Picker.Item label="greater then 10" value="greater then 10" />  
                      </Picker>  
                    </View>
                    <View style={{marginLeft:10}}>
                      <Text style={{fontWeight: '400', fontSize: 12, color: '#EB5757'}}>Error message comes here</Text>
                    </View>
                </View>
              </View>

              {/* Tell Us Your Pet Name */}
              <View style={{marginLeft:'8%', marginRight:'8%', marginTop:25}}>
                <View style={{ width:'100%', borderWidth:1,  borderColor: '#ccc', borderRadius: 50}}>
                  <TextInput  
                        style={{
                        paddingLeft:20,
                        color:'#757E90', 
                        height: 51, 
                        }}
                        numberOfLines={1}
                      placeholder="TELL US YOUR PET'S NAME" 
                  />
                </View>
                <View style={{marginLeft:10 }}>
                    <Text style={{fontWeight: '400', fontSize: 12, color: '#EB5757'}}>Error message comes here</Text>
                </View>
              </View>

              {/* Separator */}
              <View style={{marginTop:30,borderColor: '#BDBDBD', borderBottomWidth:0.5}}>
              </View>

              {/* My behaviour */}
              <View style={{marginTop:30 , marginLeft:'8%', marginRight: '8%'}}>
                  <View style={{marginBottom:20}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#504182'}}>MY BEHAVIOUR</Text>
                  </View>

                  {/* Dog */}
                <View style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                  
                      <TouchableOpacity style={{backgroundColor:'white', justifyContent:"center",alignItems:"center", borderRadius:30, width:'28%', height:110 ,borderWidth:1, borderColor: '#757E90',backgroundColor :selectBehaviourDog ? 'orange' : 'white'  }}
                         onPress={()=>this.setState({selectBehaviourDog: true, selectBehaviourCat: false, selectBehaviourKid:false}) }>
                        <View>
                          <Image style={{resizeMode:'contain', }} source={require('../assets/Dog.png')} />
                        </View>

                        <View style={{paddingTop:10}}> 
                          <Text style={{textAlign: "center", color: '#757E90',fontWeight: '400', fontSize: 14, }}>
                            Dog {'\n'}Friendly
                          </Text>
                        </View>
                      </TouchableOpacity>
                 

                    {/* Cat */}
                  
                      <TouchableOpacity style={{backgroundColor:'white', justifyContent:"center",alignItems:"center", borderRadius:30, width:'28%', height:110 ,borderWidth:1, borderColor: '#757E90',backgroundColor :selectBehaviourCat ? 'orange' : 'white' }}
                      onPress={()=>this.setState({selectBehaviourDog: false, selectBehaviourCat: true, selectBehaviourKid:false}) }>
                        <View>
                          <Image style={{resizeMode:'contain', }} source={require('../assets/Cat.png')} />
                        </View>
                        
                        <View style={{paddingTop:10}}> 
                        <Text style={{textAlign: "center", color: '#757E90',fontWeight: '400', fontSize: 14, }}>
                            Cat {'\n'}Friendly
                        </Text> 
                      </View>
                      </TouchableOpacity>
                  

                    {/* Child */}
                
                     <TouchableOpacity style={{backgroundColor:'white', justifyContent:"center",alignItems:"center", borderRadius:30, width:'28%', height:110 ,borderWidth:1, borderColor: '#757E90', backgroundColor :selectBehaviourKid ? 'orange' : 'white' }}
                      onPress={()=>this.setState({selectBehaviourDog: false, selectBehaviourCat: false, selectBehaviourKid:true}) }>
                        <View style={{}}>
                          <Image style={{resizeMode:'contain',}} source={require('../assets/Kid.png')} />
                        </View>
                        
                        <View style={{paddingTop:10}}> 
                        <Text style={{textAlign: "center", color: '#757E90',fontWeight: '400', fontSize: 14, }}>
                          Kid {'\n'}Friendly
                        </Text> 
                      </View>
                      </TouchableOpacity>
                 
                </View>
              </View>

                {/* Separator */}
                <View style={{marginTop:25,borderColor: '#BDBDBD', borderBottomWidth:0.5}}>
                </View>

              {/* MY STORY */}
              <View style={{ marginLeft:'8%', marginRight:'8%',marginTop:25}}>
                  <View style={{}}>
                      <Text style={{fontWeight: '500', fontSize: 18, color: '#504182'}}>MY STORY</Text>
                  </View>
                  <View style={{ width:'100%', marginTop:15, }}>
                    <TextInput  
                          style={{
                            borderWidth: 1, 
                            padding:10,
                            color:'#757E90', 
                            height: 110, 
                            fontSize:16,
                            borderRadius:5,
                            backgroundColor: 'white',
                            borderColor: '#757E90', 
                            textAlignVertical: "top",
                            }}
                            multiline={true}
                            numberOfLines={4}
                            />
                  </View>
              </View>

              {/* Separator */}
              <View style={{marginTop:30,borderColor: '#BDBDBD', borderBottomWidth:0.5}}>
              </View>

              {/* Pedigree & Vaccine*/}
              <View style={{ marginLeft:'8%', marginRight:'8%',marginTop:30, }}>
                <View>
                  <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#504182'}}>PEDIGREE</Text>
                      <Switch  
                        tintColor={'orange'}
                        thumbTintColor={'orange'}
                        onTintColor={'orange'}
                        value={this.state.switchPedigreeValue}  
                        onValueChange ={(switchPedigreeValue)=>this.setState({switchPedigreeValue})}/> 
                  </View>
                  <View style={{}}>
                      <Text style={{fontWeight: '400', fontSize: 12, color: '#757E90'}} numberOfLines={1}>Does your pet have pedigree certifcate</Text>
                  </View>
                </View>

                <View style={{marginTop:25}}>
                  <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#504182'}}>VACCINATED</Text>
                      <Switch  
                      tintColor={'orange'}
                      thumbTintColor={'orange'}
                      onTintColor={'orange'}
                        value={this.state.switchVaccinatedValue}  
                        onValueChange ={(switchVaccinatedValue)=>this.setState({switchVaccinatedValue})}/> 
                  </View>
                  <View style={{}}>
                      <Text style={{fontWeight: '400', fontSize: 12, color: '#757E90', }} numberOfLines={1}>Does your pet have regular vaccination</Text>
                  </View>
                </View>
              </View>

              {/* Separator */}
              <View style={{marginTop:30,borderColor: '#BDBDBD', borderBottomWidth:0.5}}>
              </View>

              {/* Pedigree & Vaccine*/}
              <View style={{ marginLeft:'8%', marginRight:'8%',marginTop:25}}>
                  <View style={{marginBottom:25}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#504182'}}>LOCATION</Text>
                  </View>
                  <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                      <Text style={{fontWeight: '400', fontSize: 16, color: '#757E90'}}>User current location</Text>
                      <Switch  
                      tintColor={'orange'}
                      thumbTintColor={'orange'}
                      onTintColor={'orange'}
                        value={this.state.switchLocationValue}  
                        onValueChange ={(switchLocationValue)=>this.setState({switchLocationValue})}/> 
                  </View>
              </View>

              {/* Separator */}
              <View style={{marginTop:30,borderColor: '#BDBDBD', borderBottomWidth:0.5}}>
              </View>

              {/* Submit */}
              <View style={{paddingBottom:80, marginTop:40, marginLeft:'8%', marginRight:'8%' }}>
                <TouchableOpacity style={{backgroundColor:'#F0A33E', padding:15,justifyContent:"center",alignItems:"center", borderRadius:50, width:'100%', }}>
                  <Text style={{textAlign: "center", color: '#fff',fontWeight: '500', fontSize: 16, }}>SUBMIT</Text>
                </TouchableOpacity>
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

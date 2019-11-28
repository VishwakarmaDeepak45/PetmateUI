// @ts-nocheck
import React, {Component} from 'react';
import {View, Image, Text, TextInput, ScrollView, TouchableOpacity, Switch, Picker, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';


export default class PetParentAddPet extends Component {

  constructor(props){
    super(props);
    this.state = {
      filePath: {},
      switchValue: false  ,
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
      //console.log('User cancelled image picker');
    } else if (response.error) {
      //console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      //console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      let source = response;
      this.setState({
        filePath: source,
        language: '',
        choosenIndex: '',
      });
    }
  });

};

ChangeLocation = () =>{
  
} 
  
  render() {

    return (
        <ScrollView style={{flex:1}}>
          <View style={{ flex:1}}>
            <View>
                <Image
                    source={{ uri: this.state.filePath.uri }}
                    style={{ width: '100%', }}
                    onPress={() => this.chooseFile()} style={{width: '100%', height: 200, }}
                  /> 
            {/* <TouchableOpacity >
                
              </TouchableOpacity> */}
            </View>
              {/* Select Pet */}
              <View style={{ marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{ borderWidth:1,  borderColor: '#ccc' }}>
                    <Picker 
                          style={styles.pickerStyle}  
                          selectedValue={this.state.language}  
                          onValueChange={(itemValue, itemPosition) =>  
                              this.setState({language: itemValue, choosenIndex: itemPosition})}>  
                      <Picker.Item label="SELECT PET" value="NULL" />  
                      <Picker.Item label="JavaScript" value="js" />  
                      <Picker.Item label="React Native" value="rn" />  
                    </Picker>  
                  </View>
                  <View style={{marginLeft:10}}>
                    <Text style={{fontWeight: '400', fontSize: 12, color: '#EB5757'}}>Error message comes here</Text>
                  </View>
              </View>

              {/* Breed */}
              <View style={{ marginLeft:'8%', marginRight:'8%'}}>
                  <View style={{ flex:1}}>
                    <Picker 
                          style={styles.pickerStyle}  
                          selectedValue={this.state.language}  
                          onValueChange={(itemValue, itemPosition) =>  
                              this.setState({language: itemValue, choosenIndex: itemPosition})}>  
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
              <View style={{ flex:1}}>
                <View style={{ marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{ flex:1}}>
                      <Picker 
                            style={styles.pickerStyle}  
                            selectedValue={this.state.language}  
                            onValueChange={(itemValue, itemPosition) =>  
                                this.setState({language: itemValue, choosenIndex: itemPosition})}>
                        <Picker.Item label="GENDER" value="NULL" />  
                        <Picker.Item label="Male" value="Male" />  
                        <Picker.Item label="Female Native" value="Female" />  
                      </Picker>  
                    </View>
                    <View style={{marginLeft:10}}>
                      <Text style={{fontWeight: '400', fontSize: 12, color: '#EB5757'}}>Error message comes here</Text>
                    </View>
                </View>
                <View style={{ marginLeft:'8%', marginRight:'8%'}}>
                    <View style={{ flex:1}}>
                      <Picker 
                            style={styles.pickerStyle}  
                            selectedValue={this.state.language}  
                            onValueChange={(itemValue, itemPosition) =>  
                                this.setState({language: itemValue, choosenIndex: itemPosition})}  
                        >  
                        <Picker.Item label="AGE" value="NULL" />  
                        <Picker.Item label="JavaScript" value="js" />  
                        <Picker.Item label="React Native" value="rn" />  
                      </Picker>  
                    </View>
                    <View style={{marginLeft:10}}>
                      <Text style={{fontWeight: '400', fontSize: 12, color: '#EB5757'}}>Error message comes here</Text>
                    </View>
                </View>
              </View>

              {/* Tell Us Your Pet Name */}
              <View style={{ width:'100%'}}>
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
                      placeholder="TELL US YOUR PET'S NAME"  />
              </View>
              
              <View style={{marginLeft:10, marginBottom:50, borderColor: '#BDBDBD', borderBottomWidth:0.5}}>
                  <Text style={{fontWeight: '400', fontSize: 12, color: '#EB5757'}}>Error message comes here</Text>
              </View>

              {/* My behaviour */}
              <View style={{marginTop:30 ,marginBottom:30, borderColor: '#BDBDBD', borderBottomWidth:0.5, marginLeft:'8%', marginRight: '8%'}}>
                  <View style={{}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#504182'}}>MY BEHAVIOUR</Text>
                  </View>

                  {/* Dog */}
                <View style={{display: 'flex', flexDirection: 'row', alignItems:'center'}}>
                  <View>
                      <TouchableOpacity style={{backgroundColor:'white', justifyContent:"center",alignItems:"center", borderRadius:50, width:'100%', }}>
                        <View>
                          <Image style={{resizeMode:'contain', }} source={require('../assets/Dog.png')} />
                        </View>

                        <View> 
                          <Text style={{textAlign: "center", color: '#fff',fontWeight: '500', fontSize: 16, }}>SUBMIT</Text>
                        </View>
                      </TouchableOpacity>
                  </View>

                    {/* Cat */}
                  <View>
                      <TouchableOpacity style={{backgroundColor:'white', justifyContent:"center",alignItems:"center", borderRadius:50, width:'100%',}}>
                        <View>
                          <Image style={{resizeMode:'contain', }} source={require('../assets/Cat.png')} />
                        </View>
                        
                        <View> 
                          <Text style={{textAlign: "center", color: '#fff',fontWeight: '500', fontSize: 16, }}>SUBMIT</Text>
                        </View>
                      </TouchableOpacity>
                  </View>

                    {/* Child */}
                  <View>
                      <TouchableOpacity style={{backgroundColor:'white', justifyContent:"center",alignItems:"center", borderRadius:50, width:'100%', padding:20}}>
                        <View>
                          <Image style={{resizeMode:'contain',}} source={require('../assets/Kid.png')} />
                        </View>
                        
                        <View> 
                          <Text style={{textAlign: "center", color: '#fff',fontWeight: '500', fontSize: 16, }}>SUBMIT</Text>
                        </View>
                      </TouchableOpacity>
                  </View>
                </View>
                
              </View>

              {/* MY STORY */}
              <View style={{ marginLeft:'8%', marginRight:'8%',marginBottom:30, borderColor: '#BDBDBD', borderBottomWidth:0.5}}>
                  <View style={{}}>
                      <Text style={{fontWeight: '500', fontSize: 18, color: '#504182'}}>MY STORY</Text>
                  </View>
                  <View style={{ width:'100%', }}>
                    <TextInput  
                          style={{
                            borderWidth: 1, 
                            paddingLeft:20,
                            color:'#757E90', 
                            height: 150, 
                           
                            borderColor: '#000', 
                            width: wp(60)}}
                          placeholder="TELL US YOUR PET'S NAME"  />
                  </View>
              </View>

              {/* Pedigree & Vaccine*/}
              <View style={{ marginLeft:'8%', marginRight:'8%',marginBottom:30, borderColor: '#BDBDBD', borderBottomWidth:0.5}}>
                <View>
                  <View style={{}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#504182'}}>PEDIGREE</Text>
                      <Switch  
                        value={this.state.switchValue}  
                        onValueChange ={(switchValue)=>this.setState({switchValue})}/> 
                  </View>
                  <View style={{}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#504182'}}>Does your pet have pedigree certifcate</Text>
                  </View>
                </View>

                <View>
                  <View style={{}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#504182'}}>VACCINATED</Text>
                      <Switch  
                        value={this.state.switchValue}  
                        onValueChange ={(switchValue)=>this.setState({switchValue})}/> 
                  </View>
                  <View style={{}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#504182'}}>Does your pet have regular vaccination</Text>
                  </View>
                </View>
              </View>

              {/* Pedigree & Vaccine*/}
              <View style={{ marginLeft:'8%', marginRight:'8%',marginBottom:30, borderColor: '#BDBDBD', borderBottomWidth:0.5}}>
                  <View style={{}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#504182'}}>LOCATION</Text>
                  </View>
                  <View style={{}}>
                      <Text style={{fontWeight: '500', fontSize: 16, color: '#757E90'}}>User current location</Text>
                      <Switch  
                        value={this.state.switchValue}  
                        onValueChange ={(switchValue)=>this.setState({switchValue})}/> 
                  </View>
              </View>

              {/* Submit */}
              <View style={{paddingBottom:80, marginTop:10, marginLeft:'8%', marginRight:'8%' }}>
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
     height: 50,  
     width: "100%",  
     color: '#344953',  
     justifyContent: 'center',  
 }  
})  

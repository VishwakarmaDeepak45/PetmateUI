import React, { Component } from 'react';
import { View, Text, Alert, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/AntDesign';
import IconInfo from 'react-native-vector-icons/Entypo';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default class Example extends Component {
    constructor(props) {
    super(props);

        this.state = {
            modalVisible: false,
            image: null,
            name: '',
            description: '',
            datas: [
                { name: 'Ronnie', image: require('../assets/Ronnie.png'), description: 'Golden Retriever' },
                { name: 'Lucy', image: require('../assets/lucy.png'), description: 'Doberman' },
                { name: 'Daisy', image: require('../assets/daisy.png'), description: 'Pug' },

                { name: 'Ronnie', image: require('../assets/Ronnie.png'), description: 'Golden Retriever' },
                { name: 'Lucy', image: require('../assets/lucy.png'), description: 'Doberman' },
                { name: 'Daisy', image: require('../assets/daisy.png'), description: 'Pug' },

                { name: 'Ronnie', image: require('../assets/Ronnie.png'), description: 'Golden Retriever' },
                { name: 'Lucy', image: require('../assets/lucy.png'), description: 'Doberman' },
                { name: 'Daisy', image: require('../assets/daisy.png'), description: 'Pug' },

                { name: 'Ronnie', image: require('../assets/Ronnie.png'), description: 'Golden Retriever' },
                { name: 'Lucy', image: require('../assets/lucy.png'), description: 'Doberman' },
                { name: 'Daisy', image: require('../assets/daisy.png'), description: 'Pug' },

                { name: 'Ronnie', image: require('../assets/Ronnie.png'), description: 'Golden Retriever' },
                { name: 'Lucy', image: require('../assets/lucy.png'), description: 'Doberman' },
                { name: 'Daisy', image: require('../assets/daisy.png'), description: 'Pug' }
            ],
        }
    }
    render() {
        const { datas, modalVisible, image, name, description } = this.state;
        return (
            <View>
                <FlatList
                    data={datas}
                    renderItem={({ item }) =>
                        <View style={{ backgroundColor: 'white' }}>
                            <Swipeout
                                style={{ marginTop: 5, marginLeft: 15, marginRight: 15 }}
                                right={[{
                                    text: <Icon name='delete' size={20} color='#000' />,
                                    backgroundColor: 'white',
                                    onPress: () => {
                                        Alert.alert(
                                            'Delete Item',
                                            'Do you want to delete the item',
                                            [
                                                {
                                                    text: 'Cancel',
                                                    onPress: () => console.log('Cancel Pressed'),
                                                    style: 'cancel',
                                                },
                                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                                            ],
                                            { cancelable: false },
                                        );
                                    }
                                }]}
                                left={[{
                                    text: <IconInfo name='info' size={20} color='#000' /> ,
                                    backgroundColor: 'white',
                                    onPress: () => { 
                                    this.setState({ modalVisible: true, name: item.name, image: item.image, description: item.description}) 
                                    }
                                 }  
                                ]}
                                backgroundColor='white'  >
                                <View style={{ paddingVertical: 6, display: 'flex', flexDirection: 'row' }}>
                                    <View style={{ paddingHorizontal: 6 }}>
                                        <Image style={{ borderRadius: wp(50), width: 60, height: 60 }} source={item.image} />
                                    </View>
                                    <View style={{ marginLeft: 8, justifyContent: 'center' }}>
                                        <View style={{ marginBottom: 4 }}>
                                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#504182' }}>{item.name}</Text>
                                        </View>
                                        <View style={{}}>
                                            <Text style={{ fontSize: 12, fontWeight: '400', color: '#757E90' }}>{item.description}</Text>
                                        </View>
                                    </View>
                                </View>

                            </Swipeout>

                        </View>
                    }
                />
                {modalVisible && <Modal
                    animationType={"fade"}
                    transparent={true}
                    style={{opacity:0.6}}
                    visible={modalVisible} >
                <View style={{flex:1,  }}>
                    <View style={{flex:1, display: 'flex', alignItems: 'center', justifyContent: 'center',  }}>
                        <View style={{ width: '80%',padding:10, height: '40%', backgroundColor:'#f1f1f1', borderRadius:10}}>
                            <View style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                                <Image style={{ borderRadius: wp(50), width: 60, height: 60 }} source={image} />
                            </View>

                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: '#504182' }}>Name: {name}</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: '#504182' }}>Description: {description}</Text>
                            </View>

                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop:20 }}>
                                    <TouchableOpacity 
                                        
                                        onPress={() => this.setState({ modalVisible: false }) }>
                                        <Text style={{fontSize:12, fontWeight:'500', color:'red', textAlign:'center'}}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                        style={{padding:10, borderRadius:10}}
                                        onPress={() => this.setState({ modalVisible: false }) }>
                                        <Text style={{fontSize:16, fontWeight:'500', color:'white', textAlign:'center'}}>Ok</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>}
                {console.log(modalVisible)}
            </View>
        )
    }
}
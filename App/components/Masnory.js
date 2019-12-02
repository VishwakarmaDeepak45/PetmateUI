import React, { Component } from 'react';
import { View, Text, Alert, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import MasonryList from 'react-native-masonry-list';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default class Example extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[
                { uri: "https://stimg.cardekho.com/images/carexteriorimages/360x240/Ferrari/Ferrari-Portofino/047.jpg" },
                { uri: "https://rollr.io/wp-content/uploads/2017/02/mini-home-car.jpg" },
                { uri: "https://www.bmw-speedmotorwagen.in/sites/default/files/styles/nostyle/public/slider_banner_image/2018-02/M4Coupe-Header_Banner_17.jpg?itok=zmJWURhi"},
                { uri: "https://img.etimg.com/thumb/msid-67103187,width-1200,height-900,resizemode-4,imgsize-96644/car-getty.jpg" },
                { uri: "https://stimg.cardekho.com/images/carexteriorimages/360x240/Ferrari/Ferrari-Portofino/047.jpg" },
                { uri: "https://rollr.io/wp-content/uploads/2017/02/mini-home-car.jpg" },
                { uri: "https://www.bmw-speedmotorwagen.in/sites/default/files/styles/nostyle/public/slider_banner_image/2018-02/M4Coupe-Header_Banner_17.jpg?itok=zmJWURhi"},
                { uri: "https://img.etimg.com/thumb/msid-67103187,width-1200,height-900,resizemode-4,imgsize-96644/car-getty.jpg" },
                { uri: "https://stimg.cardekho.com/images/carexteriorimages/360x240/Ferrari/Ferrari-Portofino/047.jpg" },
                { uri: "https://rollr.io/wp-content/uploads/2017/02/mini-home-car.jpg" },
                { uri: "https://www.bmw-speedmotorwagen.in/sites/default/files/styles/nostyle/public/slider_banner_image/2018-02/M4Coupe-Header_Banner_17.jpg?itok=zmJWURhi"},
                { uri: "https://img.etimg.com/thumb/msid-67103187,width-1200,height-900,resizemode-4,imgsize-96644/car-getty.jpg" },
             ]
        }
    }
    
    render(){
        return(
            
            <MasonryList
            columns={2}
            spacing={4}
            renderIndividualFooter={(data) => {
                return (
                    <View style={{
                        backgroundColor: 'white', borderBottomLeftRadius: 8, borderBottomRightRadius: 8,  marginLeft: 8, marginRight: 8, marginTop: -12 , padding: 10, width: data.masonryDimensions.width,
                    }}>
                        <TouchableOpacity  >
                            <Text style={{ width: '100%', fontFamily: 'Muli', fontSize: 14, color: '#757E90', textAlign: 'justify' }}>Deepak</Text>
                            <Text numberOfLines={3} style={{ width: '100%', fontFamily: 'Muli', fontSize: 14, color: '#504182', textAlign: 'justify' }}>Deepak Title Deepak TitleDeepak Title</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            {/* <Image source={data.user_id && data.user_id.user_photo ? { uri: route.hostname + data.user_id.user_photo } : ProPic} resizeMode={'cover'} style={{ height: 30, width: 30, borderRadius: 15 }} /> */}
                            <Text numberOfLines={2} style={{ width: "80%", fontSize: 14, fontFamily: 'Muli', color: '#F0A33E', fontWeight: '600', paddingLeft: 5 }}>deepak</Text>
                        </TouchableOpacity>
                    </View>)
            }}
            
               images={[
                { uri: "https://stimg.cardekho.com/images/carexteriorimages/360x240/Ferrari/Ferrari-Portofino/047.jpg" },
                { uri: "https://rollr.io/wp-content/uploads/2017/02/mini-home-car.jpg" },
                { uri: "https://www.bmw-speedmotorwagen.in/sites/default/files/styles/nostyle/public/slider_banner_image/2018-02/M4Coupe-Header_Banner_17.jpg?itok=zmJWURhi"},
                { uri: "https://img.etimg.com/thumb/msid-67103187,width-1200,height-900,resizemode-4,imgsize-96644/car-getty.jpg" },
                { uri: "https://stimg.cardekho.com/images/carexteriorimages/360x240/Ferrari/Ferrari-Portofino/047.jpg" },
                { uri: "https://rollr.io/wp-content/uploads/2017/02/mini-home-car.jpg" },
                { uri: "https://www.bmw-speedmotorwagen.in/sites/default/files/styles/nostyle/public/slider_banner_image/2018-02/M4Coupe-Header_Banner_17.jpg?itok=zmJWURhi"},
                { uri: "https://img.etimg.com/thumb/msid-67103187,width-1200,height-900,resizemode-4,imgsize-96644/car-getty.jpg" },
                { uri: "https://stimg.cardekho.com/images/carexteriorimages/360x240/Ferrari/Ferrari-Portofino/047.jpg" },
                { uri: "https://rollr.io/wp-content/uploads/2017/02/mini-home-car.jpg" },
                { uri: "https://www.bmw-speedmotorwagen.in/sites/default/files/styles/nostyle/public/slider_banner_image/2018-02/M4Coupe-Header_Banner_17.jpg?itok=zmJWURhi"},
                { uri: "https://img.etimg.com/thumb/msid-67103187,width-1200,height-900,resizemode-4,imgsize-96644/car-getty.jpg" },
             ]}
               
                backgroundColor='#F4F3EE'
                style={{ borderRadius: 10, backgroundColor: 'black' }}
                imageContainerStyle={{borderRadius: 8, marginLeft:8, zIndex:10 }}
                listContainerStyle={{ borderRadius: 8, width: "100%", zIndex:-10 }}
        />
                
        )
    }
}
                                
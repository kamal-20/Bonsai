import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import {Icon, Button,Card,Header} from 'react-native-elements';

const GalleryScreen = () => {
    return (
        <View >
            <Header
            placement="center"
            centerComponent={{ text: 'Gallery', style: { color: '#000', fontSize: 20 } }}
            backgroundColor="white"
            />
            
        </View>
    )
}

GalleryScreen.navigationOptions = {
    title: 'Gallery',
    tabBarIcon: <Icon type='evilicon' name='image' size={30}  />
}

export default GalleryScreen;

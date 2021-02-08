import React from 'react'
import { View, Text } from 'react-native'
import {Icon} from 'react-native-elements';

const GalleryScreen = () => {
    return (
        <View>
            <Text>Gallery</Text>
        </View>
    )
}

GalleryScreen.navigationOptions = {
    title: 'Gallery',
    tabBarIcon: <Icon type='evilicon' name='image' size={30}  />
}

export default GalleryScreen;

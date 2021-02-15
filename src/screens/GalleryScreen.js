import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import {Icon, Button,Card} from 'react-native-elements';

const GalleryScreen = () => {
    return (
        <SafeAreaView >
            <Card>
                <Card.Title>HELLO WORLD</Card.Title>
                <Card.Divider/>
                <Card.Image source={{
                    uri: "https://source.unsplash.com/random"
                }} />
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
            </Card>
        </SafeAreaView>
    )
}

GalleryScreen.navigationOptions = {
    title: 'Gallery',
    tabBarIcon: <Icon type='evilicon' name='image' size={30}  />
}

export default GalleryScreen;

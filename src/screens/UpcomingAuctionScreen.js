import React,{useState} from 'react'
import { StyleSheet,Dimensions, ActivityIndicator } from 'react-native';
import { View, FlatList,TouchableOpacity,ScrollView, } from 'react-native'
import {Icon,Header,Image,Text,Tab } from 'react-native-elements';


const UpcomingAuctionScreen = () => {

    return (
        <View>
            <Header
                placement="center"
                centerComponent={{ text: 'Auctions', style: { color: '#000', fontSize: 20, fontFamily: "sans-serif-condensed"} }}
                backgroundColor="white"
            />
            <Text>UpcomingAuctionScreen</Text>

        </View>
    )
}

  const styles = StyleSheet.create({
    
});

export default UpcomingAuctionScreen;

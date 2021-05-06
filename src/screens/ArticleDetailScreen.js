import React,{useState} from 'react'
import { StyleSheet,Dimensions, ActivityIndicator } from 'react-native';
import { View, FlatList,TouchableOpacity,ScrollView, } from 'react-native'
import {Icon,Header,Image,Text,Tab } from 'react-native-elements';


const ArticleDetailScreen = () => {

    return (
        <View>
            <Header
                placement="center"
                centerComponent={{ text: 'Bonsai', style: { color: '#000', fontSize: 20, fontFamily: "sans-serif-condensed"} }}
                backgroundColor="white"
            />
            <Text>ArticleDetailScreen</Text>

        </View>
    )
}

  const styles = StyleSheet.create({
    
});

export default ArticleDetailScreen;

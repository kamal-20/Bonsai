import React,{useState} from 'react'
import { StyleSheet,Dimensions, ActivityIndicator } from 'react-native';
import { View, FlatList,TouchableOpacity,ScrollView, } from 'react-native'
import {Icon,Header,Image,Text,Tab } from 'react-native-elements';


const OngoingAuctionScreen = () => {

    return (
        <View>

            <FlatList
                style={styles.list}
                contentContainerStyle={styles.listContainer}
                data = {ongoingAuctions}
                horizontal={false}
                keyExtractor= {(item)=>{
                    return item.id;
                }}
                renderItem= {({item}) =>{
                    return <TouchableOpacity
                    >
                    <Image  
                        style={styles.image} 
                        source={{uri:item.image}}
                        PlaceholderContent= {<ActivityIndicator />}
                        >
                        <Text style={{fontSize:28,color:"white", margin: 10, marginLeft:10, fontFamily: "sans-serif-condensed", textAlign:"center"}} >{item.title}</Text>
                    </Image>
                    </TouchableOpacity> 
                }}
            />

        </View>
    )
}

  const styles = StyleSheet.create({
    list: {
        marginTop: 10,
        marginHorizontal: 0,
        paddingHorizontal: 0,
        marginBottom: 10
    },
    listContainer:{
        alignItems:'center',
    },
    image:{
        marginHorizontal: 0,
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1,
        width: '20%',
        height: undefined ,
        marginVertical: 10,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 15,
    }
});

export default OngoingAuctionScreen;

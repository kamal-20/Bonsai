import React,{useState,useEffect} from 'react'
import { StyleSheet,Dimensions, ActivityIndicator } from 'react-native';
import { View, FlatList,TouchableOpacity,ScrollView,SafeAreaView } from 'react-native'
import {Image,Text} from 'react-native-elements';


const ArticleDetailScreen = (props) => {

    useEffect(() => {
        console.log(props.navigation.state.params);
      return () => {
        console.log(props.navigation.state.params);
      };
    });
    return (
        <SafeAreaView>
            {/* <Image  
                style={styles.image} 
                source={{uri:article.image}}
                PlaceholderContent= {<ActivityIndicator />}
            />
            <Text>{article.writer}</Text>
            <Text>{article.date}</Text>
            <Text>{article.text}</Text> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        marginHorizontal: 0,
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 2.2,
        width: '100%',
        height: 150 ,
        marginVertical: 10,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 15,
    }
});

export default ArticleDetailScreen;

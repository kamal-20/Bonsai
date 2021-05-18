import React,{useState,useEffect} from 'react'
import { StyleSheet,Dimensions, ActivityIndicator } from 'react-native';
import { View, FlatList,TouchableOpacity,ScrollView,SafeAreaView } from 'react-native'
import {Image,Text} from 'react-native-elements';


const ArticleDetailScreen = (props) => {
    const [article,setArticle] = useState({});
    useEffect(() => {
        setArticle(props.navigation.state.params.article);
      return () => {
        setArticle(props.navigation.state.params.article);
      };
    },[props.navigation.state.params.article]);
    return (
        <ScrollView>
            <Image  
                style={styles.image} 
                source={{uri:article.image}}
                PlaceholderContent= {<ActivityIndicator />}
            />
            <Text style={styles.writer}>{` - ${article.writer}`}</Text>
            <Text style={styles.para}>{article.text}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        marginHorizontal: 0,
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1.5 ,
        width: '100%',
        height: undefined ,
        marginVertical: 10,
    },
    para:{
        marginHorizontal: 15,
        letterSpacing: 0.6,
        lineHeight: 20,
        fontFamily: 'sans-serif',
        textAlign:"left",
    },
    writer:{
        fontSize: 20,
        color: 'green',
        marginLeft: 20,
        marginTop:20

    }
});

export default ArticleDetailScreen;

import React,{useState} from 'react'
import { OpaqueColorValue } from 'react-native';
import { View,StyleSheet,FlatList,TouchableOpacity } from 'react-native'
import {Icon,Header,Text,Image, } from 'react-native-elements';

const ArticleScreen = () => {
    const data = [
        {id:1, likes:12, image:"https://images.unsplash.com/photo-1539176170444-67d6c8f356d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=670&q=80", title:"How to prune"},
        {id:2, likes:11, image:"https://images.unsplash.com/photo-1467043198406-dc953a3defa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=670&q=80", title:"How to change soil"},
        {id:3, likes:25, image:"https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80", title:"Shaping a junyper"}, 
        {id:4, likes:12, image:"https://images.unsplash.com/photo-1569873175476-10aa45523ab8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9uc2FpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title:"Caring maple"}, 
        {id:5, likes:10, image:"https://images.unsplash.com/photo-1611387729672-25583e070328?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80", title:"A guide to Bonsai Forests"}, 
        {id:6, likes:12, image:"https://images.unsplash.com/photo-1613143323550-7a9044756070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80", title:"Selecting right pot"}, 
        {id:7, likes:34, image:"https://images.unsplash.com/photo-1586170112425-3adf1ed0146e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", title:"All about Hibiscus"}, 
        {id:8, likes:45, image:"https://images.unsplash.com/photo-1470364693235-a4fe27c60914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80", title:"Tools Manual"},
        {id:9, likes:32, image:"https://images.unsplash.com/photo-1569677229133-730f610ae381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=635&q=80", title:"All about citrus"},
        {id:10, likes:56, image:"https://images.unsplash.com/photo-1511971532930-9d589f9e3a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1348&q=80", title:"Creating Hokidachi"},
        {id:11, likes:12, image:"https://images.unsplash.com/photo-1599598425947-5202edd56bdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80", title:"shaping a Windswept"}, 
        {id:12, likes:34, image:"https://images.unsplash.com/photo-1605552680957-7862f7265954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80", title:"Creating a Double trunk"}, 
        {id:13, likes:45, image:"https://images.unsplash.com/photo-1579450841234-49351e3a312b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80", title:"Guide to grow Bonsai on rock"},
        {id:14, likes:32, image:"https://images.unsplash.com/photo-1573689705342-73173e359155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80", title:"Shari, Everything you should know"},
        {id:15, likes:56, image:"https://images.unsplash.com/photo-1599598177777-21fece775e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80", title:"How to style Raft"},
      ];
      const [articles,setArticles] = useState(data);
    return (
        <View>
            <Header
            placement="center"
            centerComponent={{ text: 'Articles', style: { color: '#000', fontSize: 20, fontFamily: "sans-serif-condensed"} }}
            backgroundColor="white"
            />
            <FlatList
                style={styles.list}
                contentContainerStyle={styles.listContainer}
                data = {articles}
                horizontal={false}
                keyExtractor= {(item)=>{
                    return item.id;
                }}
                renderItem= {({item}) =>{
                    return <TouchableOpacity
                    onPress={() => {
                    console.log("kuchh to hua");
                    }}
                    >
                    <Image  style={styles.image} source={{uri:item.image}}>
                        <Text style={{fontSize:28,color:"white", margin: 10, marginLeft:10, fontFamily: "sans-serif-condensed", textAlign:"center"}} >{item.title}</Text>
                    </Image>
                    </TouchableOpacity> 
                }}
            />
        </View>
    )
}

ArticleScreen.navigationOptions = {
    title: 'Article',
    tabBarIcon: <Icon type='evilicon' name='chart' size={30}  />
  }

const styles = StyleSheet.create({
    list: {
        marginTop: 10,
        marginHorizontal: 0,
        paddingHorizontal: 0,
        marginBottom: 70
    },
    listContainer:{
        alignItems:'center',
    },
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

export default ArticleScreen;

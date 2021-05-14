import React,{useState} from 'react'
import { StyleSheet,Dimensions, ActivityIndicator } from 'react-native';
import { View, FlatList,TouchableOpacity,SafeAreaView } from 'react-native'
import {Icon,Header,Image,Text,Tab } from 'react-native-elements';


const ShopScreen = (props) => {
    const data1 = [
        {id:1, likes:12, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hokidachi.jpg/1200px-Hokidachi.jpg", shape: "hokidachi" },
        {id:2, likes:11, image:"https://i.pinimg.com/originals/8b/82/32/8b8232413a092c92d0ae6907016928c4.jpg", shape: "chokkan" },
        {id:3, likes:25, image:"https://images.unsplash.com/photo-1613143323550-7a9044756070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80", shape: "moyogi"}, 
        {id:4, likes:12, image:"https://548038.smushcdn.com/934934/wp-content/uploads/2018/06/Slanting-bonsai-style-shakan-1024x1024.jpg?lossy=1&strip=0&webp=1", shape: "Shakan" }, 
        {id:5, likes:10, image:"https://548038.smushcdn.com/934934/wp-content/uploads/2018/06/Cascade-bonsai-style-kengai.jpg?lossy=1&strip=0&webp=1", shape: "kengai" }, 
        {id:6, likes:12, image:"https://i.ytimg.com/vi/AnVWVz1AtaM/hqdefault.jpg", shape: "han-kengai" }, 
        {id:7, likes:34, image:"https://images.unsplash.com/photo-1611387729672-25583e070328?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80", shape: "bunjingi" }, 
        {id:8, likes:45, image:"https://live.staticflickr.com/7450/28017370005_4d52bf1b19_z.jpg", shape: "fukinagashi" },
        {id:9, likes:32, image:"https://images.unsplash.com/photo-1605552680957-7862f7265954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80", shape: "Sokan" },
        {id:10, likes:56, image:"https://bit.ly/3aT7ekx", shape: "kabudachi" },
        {id:11, likes:12, image:"https://i.redd.it/dbcy68t9ta421.jpg", shape: "yose-ue" }, 
        {id:12, likes:34, image:"https://live.staticflickr.com/4016/4682437602_b34652719c_b.jpg", shape: "seki-joju" }, 
        {id:13, likes:45, image:"https://images.unsplash.com/photo-1581087267669-97b203e9ec30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", shape: "ishisuki" },
        {id:14, likes:32, image:"https://i.pinimg.com/originals/b4/e5/98/b4e59874130e1964fc0328572f9621a7.jpg", shape: "ikadabuki" },
        {id:15, likes:56, image:"https://i.pinimg.com/originals/65/72/0b/65720bf5a3c41f34bb451b0d64f0c663.jpg", shape: "sharimiki" },
      ];
    
    const [images,setImages] = useState(data1);

    return (
        <SafeAreaView>
            <FlatList
               style={styles.list}
               contentContainerStyle={styles.listContainer}
               data = {images}
               horizontal={false}
               numColumns={2}
               keyExtractor= {(item)=>{
                   return item.id;
               }}
               renderItem= {({item}) =>{
                   return (<TouchableOpacity
                   onPress={() => {
                        props.navigation.push('Auction')
                   }}
                   >
                   <Image  
                   style={styles.image} 
                   source={{uri:item.image}}
                   PlaceholderContent= {<ActivityIndicator />} 
                   />
                   <Text style={styles.shapetext}> {item.shape}</Text>
                   </TouchableOpacity>
                   ) 
               }}
            />

        </SafeAreaView>
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
    image: {
        marginHorizontal: 10,
        aspectRatio: 1,
        width: Dimensions.get('window').width/2.5,
        height: undefined ,
        marginVertical: 10,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 5,
        
    },
    shapetext:{
        marginHorizontal: 30,
        fontFamily: 'sans-serif-condensed',
        textTransform: "uppercase",
        borderRadius: 25,
        borderBottomWidth: 3,
        marginBottom: 30,
        textAlign: "center",

    },
    sectionheading:{
        fontFamily: 'sans-serif-condensed',
        color: 'white',
        textTransform: 'capitalize',
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginHorizontal: '5%',
        marginTop: 10,
        fontSize: 18,
        backgroundColor: 'rgba(25, 25, 25, 0.5)',
        paddingHorizontal: 20,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderColor: '#333',
        
    }
});

export default ShopScreen;

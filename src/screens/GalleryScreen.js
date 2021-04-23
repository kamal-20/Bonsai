import React,{useState} from 'react';
import { Dimensions } from 'react-native';
import { View, Text,SafeAreaView,FlatList,StyleSheet} from 'react-native';
import {Icon, Button,Card,Header,Image,Ca} from 'react-native-elements';

const GalleryScreen = () => {
    const data = [
        {id:1, likes:12, image:"https://source.unsplash.com/random/2400x1600/?bonsai,tree,nature"},
        {id:2, likes:11, image:"https://source.unsplash.com/random/2400x1600/?bonsai,tree,nature"},
        {id:3, likes:25, image:"https://source.unsplash.com/random/2400x1600/?bonsai,tree,nature"}, 
        {id:4, likes:12, image:"https://source.unsplash.com/random/2400x1600/?bonsai"}, 
        {id:5, likes:10, image:"https://source.unsplash.com/random/2400x1600/?bonsai,tree,nature"}, 
        {id:6, likes:12, image:"https://source.unsplash.com/random/2400x1600/?bonsai,tree,nature"}, 
        {id:7, likes:34, image:"https://source.unsplash.com/random/2400x1600/?bonsai,tree,nature"}, 
        {id:8, likes:45, image:"https://source.unsplash.com/random/2400x1600/?bonsai,tree,nature"},
        {id:9, likes:32, image:"https://source.unsplash.com/random/2400x1600/?bonsai,tree,nature"},
        {id:10, likes:56, image:"https://source.unsplash.com/random/2400x1600/?bonsai,tree,nature"},
        {id:11, likes:12, image:"https://source.unsplash.com/random/1600x2400/?bonsai,tree,nature"}, 
        {id:12, likes:34, image:"https://source.unsplash.com/random/1600x2400/?bonsai,tree,nature"}, 
        {id:13, likes:45, image:"https://source.unsplash.com/random/1600x2400/?bonsai,tree,nature"},
        {id:14, likes:32, image:"https://source.unsplash.com/random/1600x2400/?bonsai,tree,nature"},
        {id:15, likes:56, image:"https://source.unsplash.com/random/1600x2400/?bonsai,tree,nature"},
      ];
      const [images,setImages] = useState(data);
    return (
        <View >
            <Header
            placement="center"
            centerComponent={{ text: 'Gallery', style: { color: '#000', fontSize: 20 } }}
            backgroundColor="white"
            />
  
            <FlatList
                style={styles.list}
                contentContainerStyle={styles.listContainer}
                data = {images}
                horizontal={false}
                keyExtractor= {(item)=>{
                    return item.id;
                }}
                renderItem= {({item}) =>{
                    return <Card>
                    <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider/>
                    <Card.Image  style={styles.image} source={{uri:item.image}}>
                    </Card.Image>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                      
                  </Card>
                    
                }}
            />
            
        </View>
    )
}

GalleryScreen.navigationOptions = {
    title: 'Gallery',
    tabBarIcon: <Icon type='evilicon' name='image' size={30}  />
}

const styles = StyleSheet.create({
    list: {
        marginHorizontal: 0,
        paddingHorizontal: 0,
        marginBottom: 60
      },
      listContainer:{
        alignItems:'center'
      },
    image: {
        alignSelf: 'center',
        aspectRatio: 3/2,
        width: '100%',
        height: undefined,
        resizeMode: "cover",
        marginVertical: 10
    }
});

export default GalleryScreen;

import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"


const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 40,
    height: 300,
    marginVertical: 30,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },  
  image: {
    width: '100%',
    height: 350,
    alignContent: 'center'
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem
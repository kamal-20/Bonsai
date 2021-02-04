import React from 'react';
import {StyleSheet,View} from 'react-native';
import {Text,Image} from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import RoundButton from '../components/RoundButton';


const StartScreen = ({navigation}) => {
    StartScreen.navigationOptions = { header: false };
    return (
            <View style={styles.container} >
                    <Text h2 style={{marginTop:40}}>Art.</Text>
                    <Text h2>Nature.</Text>
                    <Text h2>Bonsai.</Text>
                    <Image
                        source={{ uri: "https://res.cloudinary.com/dsys26psh/image/upload/v1607882821/bonsai/ishisuki-removebg-preview_b5tvqj.png" }}
                        style={styles.image}
                    />
                    <RoundButton
                    title="SIGN IN"
                    color="#2AA528"
                    path="Signin"
                    />
                    <RoundButton
                    title="SIGN UP"
                    color="#000000"
                    path="Signup" 
                    />
            </View>
    )
}

StartScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#ffffff",
    },
    image: {
        
        height: 300,
        width: 300,
        marginBottom: 20,
        marginTop: 0,
        
    },
    text:{
        fontFamily: "Nato Sans"
    }
  });

export default StartScreen;

import React, { useState, useEffect } from 'react';
import {View,StyleSheet} from 'react-native'; 
import {Conntext as AuthContext} from '../context/AuthContext';
import firebase from 'firebase';
import {navigate} from '../navigatorRef';

const authScreen = ()=> {
    const tryLocalSignin = () => {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                console.log(user);
                navigate("mainFlow");
            }else{
                navigate("Start");
            }
        })
    
    };
    useEffect(() => {
        tryLocalSignin();
      }, []);

    return (
        null
    )
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
});
export default authScreen;
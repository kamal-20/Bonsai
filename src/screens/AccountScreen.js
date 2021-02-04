import React, { useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import { Button, Accessory,Avatar,Text,Icon,ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { LinearGradient } from 'expo-linear-gradient';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout,user } = useContext(AuthContext);
  const list = [
    {
      title: 'Account Settings',
      icon: 'user',
      onpress: ()=>{signout}
    },
    {
      title: 'Cart',
      icon: 'cart',
      onpress: ()=>{signout}
    },
    {
      title: 'Wishlist',
      icon: 'heart',
      onpress: ()=>{signout}
    },
    {
      title: 'My Orders',
      icon: 'chart',
      onpress: ()=>{signout}
    },
    {
      title: 'Logout',
      icon: 'exclamation',
      onpress: ()=>{signout}
    }

  ]

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
          colors={['#bdc3c7', '#2c3e50']}
          style={styles.background}
        >
          <Avatar
            rounded
            size={150}
            style={styles.avatar}
            source={{
              uri:
                'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            }}
          />
          <View style={{justifyContent:"space-evenly", flexDirection:"row"}}>
            <Text style={styles.nametext}>User Name </Text>
          </View>
        </LinearGradient>
        <View>
          {
            list.map((item, i) => (
              <ListItem key={i} bottomDivider onPress={()=>item.onpress}>
                <Icon type="evilicon" name={item.icon} />
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))
          }
        </View>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <Icon type='antdesign' name='setting' size={25}  />
}

const styles = StyleSheet.create({
    container:{
    },
    avatar:{
      marginTop: 20,
      width:150,
      height:150,
    },
    nametext:{
      marginTop: 10,
      fontWeight: "700",
      fontSize: 24,
      color: "white"
    },
    background:{
      width: 360,
      height: 250,
      alignItems: "center"
    }
});

export default AccountScreen;
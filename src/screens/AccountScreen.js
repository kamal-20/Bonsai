import React, { useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import { Button, Accessory,Avatar,Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons';

const AccountScreen = () => {
  const { signout,user } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
        <Avatar
        rounded
        size={150}
        source={{
          uri:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        }}
      />
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
    },
    avatar:{
      width:200,
      height:200,

    }
});

export default AccountScreen;
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}  style={styles.container}>
        <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
    marginHorizontal: 20
    
  },
  link: {
    color: 'blue',
    
  }
});

export default withNavigation(NavLink);
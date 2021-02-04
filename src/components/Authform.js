import React, { useState } from 'react';
import { View,StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import RoundButton from '../components/RoundButton';

import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
        <Text h2 style={styles.title}>{headerText}</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        inputContainerStyle={styles.input}
      />
      <Spacer />
      <Input
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        inputContainerStyle={styles.input}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
        <Button
            title={submitButtonText}
            buttonStyle={{
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: "#000",
                marginLeft: 30,
                marginRight: 30,
                margin: 10,
                height: 50,
                width: 300
            }}
            onPress={() => onSubmit({ email, password })}
            
        />
    </>
  );
};

const styles = StyleSheet.create({

  title:{
    fontFamily: "Nato Sans",
    marginTop: 50,
    marginBottom: 50
  },
  input:{
    marginHorizontal: 20
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
});

export default AuthForm;
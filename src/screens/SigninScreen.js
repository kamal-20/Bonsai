import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/Authform';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="SIGN IN"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="SIGN IN"
      />
      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: () => false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center"
  },
});

export default SigninScreen;
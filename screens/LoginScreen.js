import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import HeaderLogo from '../components/HeaderLogo';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <HeaderLogo style={styles.headerLogo} />
      <Text style={styles.login}>로그인</Text>
      <GoogleSigninButton onPress={props.onGoogleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerLogo: {
    height: 56,
  },
  InputUserInfo: {
    height: 110,
    alignSelf: 'center',
  },
  login: {
    height: 120,
    marginTop: 100,
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 40,
    alignSelf: 'center',
  },
  submitButton: {
    width: 100,
    height: 36,
    marginTop: 120,
    borderWidth: 0,
    borderColor: '#000000',
    borderRadius: 5,
    alignSelf: 'center',
  },
});

export default LoginScreen;

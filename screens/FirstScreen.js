import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import LoginButton from '../components/LoginButton';
import SignUpButton from '../components/SignUpButton';
import HeaderLogo from '../components/HeaderLogo';

function FirstScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <StatusBar hidden backgroundColor="rgba(255,255,255,1)" />
      <HeaderLogo style={styles.headerLogo} />
      <Text style={styles.txtPicstagram}>Picstagram</Text>
      <LoginButton style={styles.loginButton} />
      <SignUpButton style={styles.signUpButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginButton: {
    height: 36,
    width: 100,
    borderRadius: 5,
    borderWidth: 0,
    borderColor: '#000000',
    marginTop: 190,
    alignSelf: 'center',
  },
  signUpButton: {
    height: 36,
    width: 100,
    borderRadius: 5,
    marginTop: 26,
    alignSelf: 'center',
  },
  txtPicstagram: {
    fontFamily: 'roboto-700italic',
    color: '#3f51b5',
    lineHeight: 50,
    fontSize: 50,
    textAlign: 'center',
    marginTop: 200,
  },
  loginButtonColumnFiller: {
    flex: 1,
  },
  headerLogo: {
    height: 56,
  },
});

export default FirstScreen;

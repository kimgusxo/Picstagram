import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import LoginButton from '../components/LoginButton';
import SignUpButton from '../components/SignUpButton';
import HeaderLogo from '../components/HeaderLogo';

function FirstScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden backgroundColor="rgba(255,255,255,1)" />
      <View style={styles.loginButtonColumn}>
        <LoginButton style={styles.loginButton} />
        <SignUpButton style={styles.signUpButton} />
        <Text style={styles.txtPicstagram}>Picstagram</Text>
      </View>
      <View style={styles.loginButtonColumnFiller} />
      <HeaderLogo style={styles.headerLogo} />
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
    marginLeft: 76,
  },
  signUpButton: {
    height: 36,
    width: 100,
    borderRadius: 5,
    marginTop: 26,
    marginLeft: 76,
  },
  txtPicstagram: {
    fontFamily: 'roboto-700italic',
    color: '#3f51b5',
    lineHeight: 50,
    fontSize: 50,
    textAlign: 'center',
    marginTop: -288,
  },
  loginButtonColumn: {
    width: 252,
    marginTop: 230,
    marginLeft: 54,
  },
  loginButtonColumnFiller: {
    flex: 1,
  },
  headerLogo: {
    height: 56,
    marginBottom: 584,
  },
});

export default FirstScreen;

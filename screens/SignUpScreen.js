import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import InputUserInfo from '../components/InputUserInfo';
import HeaderLogo from '../components/HeaderLogo';
import SubmitButton from '../components/SubmitButton';

function SignUpScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <InputUserInfo style={styles.inputUserInfo} />
      <Text style={styles.txtSignUp}>회원 가입</Text>
      <HeaderLogo style={styles.headerLogo} />
      <SubmitButton style={styles.submitButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputUserInfo: {
    height: 161,
    width: 329,
    marginTop: 220,
    alignSelf: 'center',
  },
  txtSignUp: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 40,
    height: 54,
    width: 170,
    marginTop: -275,
    alignSelf: 'center',
  },
  headerLogo: {
    height: 56,
    marginTop: -160,
  },
  submitButton: {
    width: 100,
    height: 36,
    marginTop: 388,
    alignSelf: 'center',
  },
});

export default SignUpScreen;

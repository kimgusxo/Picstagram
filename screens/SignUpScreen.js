import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import InputUserInfo from '../components/InputUserInfo';
import HeaderLogo from '../components/HeaderLogo';
import SubmitButton from '../components/SubmitButton';

function SignUpScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <HeaderLogo style={styles.headerLogo} />
      <Text style={styles.txtSignUp}>회원 가입</Text>
      <InputUserInfo style={styles.inputUserInfo} />
      <SubmitButton style={styles.submitButton} />
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
  inputUserInfo: {
    height: 110,
    alignSelf: 'center',
  },
  txtSignUp: {
    height : 120,
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

export default SignUpScreen;

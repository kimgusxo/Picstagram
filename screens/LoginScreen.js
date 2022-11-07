import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import HeaderLogo from '../components/HeaderLogo';
import InputUserInfo from '../components/InputUserInfo';
import SubmitButton from '../components/SubmitButton';

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <HeaderLogo style={styles.headerLogo} />
      <InputUserInfo style={styles.InputUserInfo} />
      <Text style={styles.로그인}>로그인</Text>
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
  InputUserInfo: {
    height: 110,
    width: 287,
    marginTop: 166,
    alignSelf: 'center',
  },
  로그인: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 40,
    width: 120,
    height: 54,
    marginTop: -226,
    marginLeft: 120,
  },
  submitButton: {
    width: 100,
    height: 36,
    borderWidth: 0,
    borderColor: '#000000',
    borderRadius: 5,
    marginTop: 284,
    alignSelf: 'center',
  },
});

export default LoginScreen;

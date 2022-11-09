import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text, Dimensions} from 'react-native';
import HeaderLogo from '../components/HeaderLogo';
import InputUserInfo from '../components/InputUserInfo';
import SubmitButton from '../components/SubmitButton';

const windowWidth = Dimensions.get("window").width;

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <HeaderLogo style={styles.headerLogo} />
      <Text style={styles.로그인}>로그인</Text>
      <InputUserInfo style={styles.InputUserInfo} />
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
    alignSelf: 'center',
  },
  로그인: {
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

export default LoginScreen;

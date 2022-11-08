import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

function LoginButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={() => props.navigation.navigate('Login')}>
      <Text style={styles.login}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    color: '#fff',
    fontSize: 14,
    height: 17,
    width: 35,
  },
});

export default LoginButton;

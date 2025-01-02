import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function SignUpButton(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={() => props.navigation.navigate('SignUp')}
    >
      <Text style={styles.signUp}>Sign Up</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
  },
  signUp: {
    color: '#fff',
    fontSize: 14,
  },
});

export default SignUpButton;

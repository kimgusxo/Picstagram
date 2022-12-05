import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function UpdateProfileButton(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={() => props.navigation.navigate('UpdateProfile')}
    >
      <Text style={styles.프로필편집}>프로필 편집</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2196F3',
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
  프로필편집: {
    color: '#fff',
    fontSize: 14,
  },
});

export default UpdateProfileButton;

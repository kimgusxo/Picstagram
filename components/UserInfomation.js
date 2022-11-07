import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

function UserInfomation(props) {
  return <View style={[styles.container, props.style]} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6E6',
  },
});

export default UserInfomation;

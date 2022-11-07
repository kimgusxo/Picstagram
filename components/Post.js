import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

function Post(props) {
  return <TouchableOpacity style={[styles.container, props.style]} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6E6',
  },
});

export default Post;

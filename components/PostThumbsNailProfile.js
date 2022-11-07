import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

function PostThumbsNailProfile(props) {
  return <View style={[styles.container, props.style]} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(189,16,224,1)',
  },
});

export default PostThumbsNailProfile;

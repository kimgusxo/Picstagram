import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PostProfile from './PostProfile';
import Feed from './Feed';
import PostFooter from './PostFooter';

function PostComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <PostProfile style={styles.postProfile} />
      <Feed style={styles.imageFeed} />
      <PostFooter style={styles.postFooter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  postProfile: {
    height: 64,
    backgroundColor: '#fff',
  },
  imageFeed: {
    height: 368,
  },
  postFooter: {
    height: 33,
    marginTop: 6,
  },
});

export default PostComponent;

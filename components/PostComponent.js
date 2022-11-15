import React from 'react';
import { StyleSheet, View } from 'react-native';
import PostProfile from './PostProfile';
import Feed from './Feed';
import PostFooter from './PostFooter';

function PostComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <PostProfile style={styles.postProfile} navigation={props.navigation} />
      <Feed navigation={props.navigation} />
      <PostFooter style={styles.postFooter} navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  postProfile: {
    height: 64,
    backgroundColor: '#fff',
  },
  postFooter: {
    height: 44,
  },
});

export default PostComponent;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import PostProfile from './PostProfile';
import Feed from './Feed';
import PostFooter from './PostFooter';
import Comments from './Comments';
import InputComment from './InputComment';

function PostComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <PostProfile style={styles.postProfile} navigation={props.navigation} />
      <Feed navigation={props.navigation} isDetailed={props.isDetailed} />
      <PostFooter style={styles.postFooter} navigation={props.navigation} />
      <Comments navigation={props.navigation} isDetailed={props.isDetailed} />
      <InputComment isDetailed={props.isDetailed} />
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

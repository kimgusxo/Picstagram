/* eslint-disable indent */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function NoImgFeed(props) {
  // props
  const isDetailed = props.isDetailed;

  // state & ref
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.txtPostTitle}>{props.post.title}</Text>
      {isDetailed ? <Text style={styles.txtContent}>{props.post.content}</Text> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  txtPostTitle: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  txtContent: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    marginHorizontal: 16,
    lineHeight: 24,
  },
});

export default NoImgFeed;

import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

function FollowerOrFollowingTab(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <TouchableOpacity style={styles.followerWrapper}>
          <Text style={styles.팔로워}>팔로워</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followingWrapper}>
          <Text style={styles.팔로우}>팔로우</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  textWrapper: {
    height: 29,
    flexDirection: 'row',
    width: 360,
    marginTop: 14,
  },
  followerWrapper: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 6,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    width: 180,
    height: 29,
    left: 0,
    top: 0,
  },
  팔로워: {
    fontSize: 13,
    color: '#FFFFFF',
    width: 60,
    height: 9,
  },
  followingWrapper: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 6,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    width: 180,
    height: 29,
    left: 180,
    top: 0,
  },
  팔로우: {
    fontSize: 13,
    color: '#007AFF',
    width: 57,
    height: 9,
  },
});

export default FollowerOrFollowingTab;

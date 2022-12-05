import React, { Component, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function ProfileFollowingButton(props) {
  const [isFollowed, setIsFollowed] = useState(false);

  const toggleFollowBtn = () => {
    setIsFollowed(!isFollowed);
  };

  return isFollowed ? (
    <TouchableOpacity
      style={[styles.container, props.style, styles.followedBtn]}
      onPress={() => {
        console.log('Clicked unfollowing btn');
        toggleFollowBtn();
      }}
    >
      <Text style={styles.프로필편집}>팔로잉</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[styles.container, props.style, styles.followingBtn]}
      onPress={() => {
        console.log('Clicked following btn');
        toggleFollowBtn();
      }}
    >
      <Text style={styles.팔로우요청}>팔로우 요청</Text>
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
  팔로우요청: {
    color: '#fff',
    fontSize: 14,
  },
  followingBtn: {},
  followedBtn: {
    backgroundColor: '#888',
  },
});

export default ProfileFollowingButton;

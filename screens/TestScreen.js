import React, {Component, createContext, useState} from 'react';
import {StyleSheet, View, StatusBar, Text, Image} from 'react-native';
import HeaderLogo from '../components/HeaderLogo';
import SubmitButton from '../components/SubmitButton';
import {findPostById, findPostByTitle, findPostList, createPost, deletePost,
  postRangeUpdate, likeUpdate, createComments, deleteComments, isMyPost, isMyComments} from '../api/PostApi';
import {createUser, findUserById, addFollowing, findFollowingById, findFollowerById, countFollowing,
  countFollower, deleteFollowing, deleteFollower, duplicationId} from '../api/UserApi';
import { getImageUrl, imageUpload, setMetadata, metadataImage } from '../api/StorageImage';

function TestScreen(props) {

    // 유저 아이디로 할 수 있는 것
     const email = "dong_hui"
     findUserById(email)

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <HeaderLogo style={styles.headerLogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerLogo: {
    height: 56,
  },
  InputUserInfo: {
    height: 110,
    alignSelf: 'center',
  },
  로그인: {
    height : 120,
    marginTop: 100,
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 40,
    width: 120,
    height: 54,
    marginTop: -226,
    alignSelf: 'center',
  },
  submitButton: {    
    width: 100,
    height: 36,
    marginTop: 120,
    borderWidth: 0,
    borderColor: '#000000',
    borderRadius: 5,
    alignSelf: 'center',
  },
  image: {
    width: 200,
    height: 300
  }
});

export default TestScreen;

import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, Alert } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function PostProfile(props) {
  let isMyPost = true;
  const [isLockedPost, setIsLockedPost] = useState(false);

  const alertLockBtn = () => {
    if (isLockedPost) {
      Alert.alert('게시물 공개범위 변경', '게시물을 공개하겠습니까?', [
        {
          text: '취소',
          onPress: () => console.log('Opened for all'),
        },
        {
          text: '모두에게',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: '팔로워만', onPress: () => console.log('Opened just Follower') },
      ]);
    } else {
      Alert.alert('게시물 공개범위 변경', '게시물을 비공개하겠습니까?', [
        {
          text: '취소',
          onPress: () => console.log('Private btn Pressed'),
        },
        {
          text: '',
          style: 'cancel',
        },
        { text: '비공개', onPress: () => console.log('privite') },
      ]);
    }
  };

  const alertEtcBtn = () => {
    Alert.alert('게시물 수정/삭제', '게시물을 수정하겠습니까?', [
      {
        text: '취소',
        fontSize: 8,
        onPress: () => console.log('Cancle pressed'),
      },
      {
        text: '수정',
        onPress: () => console.log('Update the post'),
        style: 'cancel',
      },
      { text: '삭제', onPress: () => console.log('Delete the post') },
    ]);
  };

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.profileButtonRow}>
        <TouchableOpacity style={styles.profileButton}>
          <EntypoIcon name="user" style={styles.profileIcon} />
          <Text style={styles.txtProfileUserId}>user_ID</Text>
        </TouchableOpacity>
        {isMyPost ? (
          <View style={styles.etcContainer}>
            <TouchableOpacity style={styles.lockButton} onPress={alertLockBtn}>
              <FontAwesomeIcon name="lock" style={styles.lockIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.dotButton} onPress={alertEtcBtn}>
              <EntypoIcon name="dots-three-horizontal" style={styles.dotIcon} />
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  profileButton: {
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  profileIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
    alignSelf: 'center',
  },
  txtProfileUserId: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 14,
    marginHorizontal: 8,
    alignSelf: 'center',
  },
  lockButton: {
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  lockIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
    alignSelf: 'center',
  },
  dotButton: {
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  dotIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
    alignSelf: 'center',
  },
  profileButtonRow: {
    height: 60,
    paddingHorizontal: 12,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  etcContainer: {
    flexDirection: 'row',
  },
});

export default PostProfile;

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Alert,
  ProgressViewIOSComponent,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { deletePost, postRangeUpdate, updatePost } from '../api/PostApi';

function PostProfile(props) {
  const [curRange, setCurRange] = useState('All');
  const [isMyPost, setIsMyPost] = useState(false);

  useEffect(() => {
    if (props.userInfo.id == props.post.writer) setIsMyPost(true);
    if (props.post.range == 'Private') setCurRange('Private');
  }, []);

  const alertLockBtn = () => {
    if (curRange == 'Private') {
      Alert.alert('게시물 공개범위 변경', '게시물을 공개하겠습니까?', [
        {
          text: '취소',
          onPress: () => {
            console.log('Cancel Pressed');
          },
        },
        {
          text: '모두에게',
          onPress: () => {
            console.log('Opened All');
            postRangeUpdate({ postDate: props.post.date, range: 'All' });
            props.post.range = 'All';
            setCurRange('All');
          },
          style: 'cancel',
        },
        {
          text: '팔로워만',
          onPress: () => {
            console.log('Opened just Follower');
            postRangeUpdate({ postDate: props.post.date, range: 'Follower' });
            props.post.range = 'Follower';
            setCurRange('Follower');
          },
        },
      ]);
    } else {
      Alert.alert('게시물 공개범위 변경', '게시물을 비공개하겠습니까?', [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: '',
          style: 'cancel',
        },
        {
          text: '비공개',
          onPress: () => {
            console.log('Private btn Pressed');
            postRangeUpdate({ postDate: props.post.date, range: 'Private' });
            props.post.range = 'Private';
            setCurRange('Private');
          },
        },
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
        onPress: () => {
          console.log('Update the post');
          props.navigation.navigate(); // Navigate to UpdatePostScreen With a Post Data. if...isDetailedPostScreen -> navigation.goback()
        },
        style: 'cancel',
      },
      {
        text: '삭제',
        onPress: () => {
          console.log('Delete the post');
          deletePost(props.post.date); // Delete a Post (need Rerendering)
        },
      },
    ]);
  };

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.profileButtonRow}>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => {
            props.navigation.navigate('Profile', {
              userInfo: { email: '', id: props.post.writer },
            });
          }}
        >
          <EntypoIcon name="user" style={styles.profileIcon} />
          <Text style={styles.txtProfileUserId}>{props.post.writer}</Text>
        </TouchableOpacity>
        {isMyPost ? (
          <View style={styles.etcContainer}>
            <TouchableOpacity style={styles.lockButton} onPress={alertLockBtn}>
              {curRange == 'Private' ? (
                <FontAwesomeIcon name="lock" style={styles.lockIcon} />
              ) : curRange == 'Follower' ? (
                <FontAwesomeIcon name="unlock-alt" style={styles.lockIcon} />
              ) : (
                <FontAwesomeIcon name="unlock" style={styles.lockIcon} />
              )}
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

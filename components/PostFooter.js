import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function PostFooter(props) {
  const [likeCnt, setLikeCnt] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [commentCnt, setCommentCnt] = useState(0);

  useEffect(() => {
    // 좋아요 숫자 변경 로직
  }, [isLiked])

  const toggleLike = () => {
    setIsLiked(!isLiked);
  }

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.likeButtonRow}>
        {/* like button */}
        <TouchableOpacity style={styles.likeButton} onPress={toggleLike}>
          <EntypoIcon name={isLiked ? "heart" : "heart-outlined"} style={isLiked ? styles.redLikeIcon : styles.likeIcon} />
          <View style={styles.likeIconFiller} />
          <Text style={styles.txtLikeCount}>{likeCnt}</Text>
        </TouchableOpacity>
        {/* comment button : navigation */}
        <TouchableOpacity style={styles.commentButton} onPress={() => props.navigation.navigate('DetailPost')} >
          <FontAwesomeIcon name="comments-o" style={styles.commentIcon} />
          <View style={styles.commentIconFiller} />
          <Text style={styles.txtCommentCount}>{commentCnt}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  likeButton: {
    width: 60,
    flexDirection: 'row',
  },
  likeIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
  },
  redLikeIcon: {
    color: 'rgba(255,0,0,1)',
    fontSize: 30,
  },
  likeIconFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  txtLikeCount: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 25,
    alignSelf: 'center',
  },
  commentButton: {
    width: 60,
    flexDirection: 'row',
    marginLeft: 20,
  },
  commentIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
  },
  commentIconFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  txtCommentCount: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 25,
    alignSelf: 'center',
  },
  likeButtonRow: {
    height: 33,
    flexDirection: 'row',
    flex: 1,
    marginLeft: 20,
    alignSelf: 'center',
  },
});

export default PostFooter;
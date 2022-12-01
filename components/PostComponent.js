import React from 'react';
import { StyleSheet, View } from 'react-native';
import PostProfile from './PostProfile';
import Feed from './Feed';
import PostFooter from './PostFooter';
import Comments from './Comments';
import InputComment from './InputComment';

/**
 * Post를 출력하는 componen
 * t
 * @param {navigation, post} props
 * @returns
 * presentaion_
 *  PostProfile: userId
 *  Feed: postTitle, pictures, likes, comments count, / Detailpost인 경우 추가적으로 postContent
 *
 *  DetailPost인 경우 Comments 컴포넌트에서 comments
 */
function PostComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <PostProfile
        style={styles.postProfile}
        navigation={props.navigation}
        post={props.post}
        userInfo={props.userInfo}
      />
      <Feed
        navigation={props.navigation}
        isDetailed={props.isDetailed}
        post={props.post}
        userInfo={props.userInfo}
      />
      <PostFooter
        style={styles.postFooter}
        navigation={props.navigation}
        post={props.post}
        userInfo={props.userInfo}
      />
      <Comments
        navigation={props.navigation}
        isDetailed={props.isDetailed}
        post={props.post}
        userInfo={props.userInfo}
      />
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

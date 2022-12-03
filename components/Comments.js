import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Comment = (props) => {
  /**
   * 내 댓글일 때 삭제 기능 추가 필요
   */
  return (
    <View style={styles.profileButtonRow}>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() =>
          props.navigation.navigate('Profile', {
            userInfo: { id: props.comment.commentWriter, email: '' },
          })
        }
      >
        <EntypoIcon name="user" style={styles.profileIcon} />
        <Text styles={styles.txtUserId}>{props.comment.commentWriter}</Text>
      </TouchableOpacity>
      <View style={styles.txtCommentContainer}>
        <Text styles={styles.txtComment}>{props.comment.commentContent}</Text>
      </View>
    </View>
  );
};

function Comments(props) {
  return (
    <>
      {props.isDetailed ? (
        props.post.commentList.map((comment, index) => (
          <Comment key={index} comment={comment} navigation={props.navigation} />
        ))
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  profileButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 16,
    marginTop: 8,
    marginHorizontal: 16,
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtUserId: {
    textAlignVertical: 'center',
    borderColor: 'black',
  },
  profileIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 25,
    alignSelf: 'center',
    marginRight: 16,
  },
  txtComment: {},
  txtCommentContainer: {
    // alignItems: 'center',
    paddingHorizontal: 16,
    width: '75%',
  },
});

export default Comments;

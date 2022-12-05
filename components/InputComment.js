import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CommentSubmitButton from './CommentSubmitButton';

function InputComment(props) {
  const [comment, setComment] = React.useState({
    commentWriter: '',
    commentContent: '',
    date: '',
    postDate: props.post.date,
  });

  return (
    <>
      {props.isDetailed ? (
        <View style={styles.wrapper}>
          <View style={styles.inputCommentContainer}>
            <View style={styles.inputComment}>
              <TextInput
                ref={props.txtInputRef}
                multiline={true}
                value={comment.commentContent}
                placeholder=": Insert any comment..."
                onChangeText={(text) => {
                  setComment({
                    ...comment,
                    commentWriter: props.userInfo.id,
                    commentContent: text,
                  });
                }}
              />
            </View>
            <CommentSubmitButton
              style={styles.submitButton}
              comment={comment}
              txtInputRef={props.txtInputRef}
              setTxtInput={props.setTxtInput}
              post={props.post}
              setComment={setComment}
              setCommentList={props.setCommentList}
            />
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputComment: {
    width: '75%',
  },
  inputCommentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 5,
    width: '93%',
  },
  submitButton: {
    borderRadius: 10,
    height: 32,
  },
});

export default InputComment;

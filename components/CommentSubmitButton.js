import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createComments } from '../api/PostApi';

function CommentSubmitButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => {
          if (props.comment.commentContent != '') {
            createComments(
              props.comment.commentWriter,
              props.comment.commentContent,
              props.comment.postDate,
            ).then((createdDate) => {
              const temp = {
                commentWriter: props.comment.commentWriter,
                commentContent: props.comment.commentContent,
                type: true,
                date: createdDate,
              };
              props.setCommentList((prev) => {
                return [...prev, temp];
              });

              props.setComment({
                commentWriter: '',
                commentContent: '',
                date: '',
                postDate: props.post.date,
              });
            });
          }
        }}
      >
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
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
  submit: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CommentSubmitButton;

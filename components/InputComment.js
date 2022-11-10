import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import SubmitButton from './SubmitButton';

function InputComment(props) {
  return (
    <>
      {props.isDetailed ? (
        <View style={styles.wrapper}>
          <View style={styles.inputCommentContainer}>
            <View style={styles.inputComment}>
              <TextInput multiline={true} placeholder=": Insert any comment..." />
            </View>
            <SubmitButton style={styles.submitButton} />
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

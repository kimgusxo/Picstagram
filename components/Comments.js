import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Comment = () => {
  return (
    <View style={styles.profileButtonRow}>
      <TouchableOpacity style={styles.profileButton}>
        <EntypoIcon name="user" style={styles.profileIcon} />
        <Text styles={styles.txtUserId}>user_ID</Text>
      </TouchableOpacity>
      <View style={styles.txtCommentContainer}>
        <Text styles={styles.txtComment}>
          She is so cute😁💕{'\n'}I hope she becomes famous in Korea, too!🥺
        </Text>
      </View>
    </View>
  );
};

function Comments(props) {
  return (
    <>
      {props.isDetailed ? (
        <>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </>
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

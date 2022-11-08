import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

function CupertinoSegmentWithTwoTabs(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tabsWrapper}>
        <TouchableOpacity style={styles.follwerButton}>
          <Text style={styles.txtFollower}>팔로워</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.txtFollow}>팔로우</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  tabsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  follwerButton: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,

    height: 29,
  },
  txtFollower: {
    fontSize: 13,
    fontFamily: 'roboto-700',
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  followButton: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,

    height: 29,
  },
  txtFollow: {
    fontSize: 13,
    fontFamily: 'roboto-700',
    color: '#007AFF',
    alignSelf: 'center',
  },
});

export default CupertinoSegmentWithTwoTabs;

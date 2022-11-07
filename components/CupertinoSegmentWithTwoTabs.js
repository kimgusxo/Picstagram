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
    backgroundColor: '#FFF',
  },
  tabsWrapper: {
    height: 29,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    width: 360,
    alignSelf: 'center',
  },
  follwerButton: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 6,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    width: 150,
    height: 29,
  },
  txtFollower: {
    fontSize: 13,
    fontFamily: 'roboto-700',
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  followButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 6,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    width: 150,
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

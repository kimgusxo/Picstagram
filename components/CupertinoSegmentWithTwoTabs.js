import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

function CupertinoSegmentWithTwoTabs(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <TouchableOpacity style={styles.segmentTextWrapperLeft}>
          <Text style={styles.팔로워}>팔로워</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapperRight}>
          <Text style={styles.팔로우}>팔로우</Text>
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
  textWrapper: {
    height: 29,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    width: 360,
  },
  segmentTextWrapperLeft: {
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
  팔로워: {
    fontSize: 13,
    color: '#FFFFFF',
    width: 42,
    height: 9,
  },
  segmentTextWrapperRight: {
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
  팔로우: {
    fontSize: 13,
    color: '#007AFF',
    width: 44,
    height: 9,
  },
});

export default CupertinoSegmentWithTwoTabs;

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

function FollowListTabs(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tabsWrapper}>
        <TouchableOpacity
          style={[
            styles.follwerButton,
            {
              backgroundColor: props.token ? '#007AFF' : '#FFFFFF',
            },
          ]}
          onPress={() => props.setToken((prev) => !prev)}
        >
          <Text style={[styles.txtFollower, { color: props.token ? '#FFFFFF' : '#007AFF' }]}>
            팔로워
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.followButton,
            {
              backgroundColor: props.token ? '#FFFFFF' : '#007AFF',
            },
          ]}
          onPress={() => props.setToken((prev) => !prev)}
        >
          <Text style={[styles.txtFollow, { color: props.token ? '#007AFF' : '#FFFFFF' }]}>
            팔로잉
          </Text>
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
    borderColor: '#007AFF',
    borderWidth: 1,
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

export default FollowListTabs;

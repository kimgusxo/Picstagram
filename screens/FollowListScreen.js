import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import CupertinoSegmentWithTwoTabs from '../components/CupertinoSegmentWithTwoTabs';
import UserSmallProfile from '../components/UserSmallProfile';

function FollowListScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ProfileHeader style={styles.profileHeader} />
      <CupertinoSegmentWithTwoTabs style={styles.followListTabs} />
      <ScrollView contentContainerStyle={styles.followList}>
        <UserSmallProfile style={styles.userSmallProfile} />
        <UserSmallProfile style={styles.userSmallProfile} />
        <UserSmallProfile style={styles.userSmallProfile} />
        <UserSmallProfile style={styles.userSmallProfile} />
        <UserSmallProfile style={styles.userSmallProfile} />
        <UserSmallProfile style={styles.userSmallProfile} />
        <UserSmallProfile style={styles.userSmallProfile} />
        <UserSmallProfile style={styles.userSmallProfile} />
        <UserSmallProfile style={styles.userSmallProfile} />
        <UserSmallProfile style={styles.userSmallProfile} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileHeader: {
    height: 56,
  },
  followListTabs: {
    height: 56,
  },
  followList: {
    paddingVertical: 15
  },
  userSmallProfile: {
    height: 70,
    borderWidth: 1,
    borderColor: 'rgba(155,155,155,1)',
  },
});

export default FollowListScreen;
